import {
  CameraOutlined,
  CustomerServiceOutlined,
  PaperClipOutlined,
  PlaySquareOutlined,
  SendOutlined,
} from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import { ButtonBackGrounds } from '../../../../../Global/Styles/button'
import { iconContainerStyles } from '../../../../../Global/Styles/icons'
import { Avatar } from '../../../UI-Dumb/Graphics/Images/Avatar/Avatar'
import { BarItems } from '../../Bars/BarItems/BarItems'
import { CommentAssets } from '../../Comment/Assets/Assets'
import { SimpleDropDown } from '../../DropDowns/Simple/SimpleDropDown'
import { CommonFileInput } from '../../Input/File/Common/Common-file-input'
import { TextArea } from '../../Input/TextArea/TextArea'
import { postFormItems } from './data'
import classes from './PostForm.module.scss'
import { FOLDERS_U } from '../../../../../../../shared/index'
import { Protected_Instance } from '../../../../../Rest-Api/Axios/Instances/protected.instance'
import {
  Audio_F_Post_U,
  Image_F_Post_U,
  Video_F_Post_U,
} from '../../../../../__generated__/types'
import { filteredPosts } from '../../../../../Pages/Profile/ProfilePostSection/ProfilePostSection'
import { usecreatePostMutation } from './__generated__/PostCreate.mutation'
import { useupdatePostMutation } from './__generated__/PostUpdate.mutation'
import { getUserProfileDocument, getUserProfileQuery } from '../../../../../Pages/Profile/__generated__/Profile.query'
import { authState } from '../../../../../Redux/Selectors/selectors'
import produce from 'immer'

type _operations = 'upload' | 'delete'
export type assetType = {
  audio: {
    local_url: string
    file: File | null
    error: string
    entity: Omit<Audio_F_Post_U,'createdAt' | 'updatedAt' | 'owner'> | null
    operation_type: `${_operations}/${FOLDERS_U.AUDIO_F_POST}` | null
  }
  video: {
    local_url: string
    file: File | null
    error: string
    entity: Omit<Video_F_Post_U,'createdAt' | 'updatedAt' | 'owner'> | null
    operation_type: `${_operations}/${FOLDERS_U.VIDEO_F_POST}` | null
  }
  image: {
    local_url: string
    file: File | null
    error: string
    entity: Omit<Image_F_Post_U,'createdAt' | 'updatedAt' | 'owner'> | null
    operation_type: `${_operations}/${FOLDERS_U.IMAGE_F_POST}` | null
  }
}

export type _commentAssetsInitial = assetType & {
  text: { value: string; error: string; type: 'text' | null }
  selected: string
  emoji: boolean
  published: boolean
  subject: string
  privacy: string
  likes: number
}
const initialState: _commentAssetsInitial = {
  text: { value: '', error: '', type: 'text' },
  image: {
    local_url: '',
    file: null,
    error: '',
    operation_type: null,
    entity: null,
  },
  audio: {
    local_url: '',
    file: null,
    error: '',
    operation_type: null,
    entity: null,
  },
  video: {
    local_url: '',
    file: null,
    error: '',
    operation_type: null,
    entity: null,
  },
  selected: '',
  emoji: false,
  published: false,
  likes: 0,
  privacy: 'public',
  subject: 'IT',
}

export const PostForm = ({
  unPublishedPost,
  avatar_url,
}: {
  unPublishedPost: filteredPosts | null
  avatar_url: string
}) => {
  const [_, force] = useState(false)
  const [createPost, created_post] = usecreatePostMutation()
  const [updatePost, updated_post] = useupdatePostMutation()
  const reset = useRef(false)
  const user_id = authState().user.id

  const handlers = {
    get(target, key) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key], handlers)
      } else {
        return target[key]
      }
    },
    set(obj, prop, new_val) {
      if (prop === 'emoji') {
        obj[prop] = new_val
        force((prev) => !prev)
      }
      if (prop === 'published') {
        if (new_val) {
          console.log('updated')
          obj[prop] = new_val
          const s = state.current
          const entity = s.audio.entity || s.video.entity || s.image.entity
          console.log('ENTITY : ', entity)
          if (entity) {
            updatePost({
              variables: {
                input: {
                  postId: Number(entity.ownerId),
                  text: s.text.value,
                  privacy: s.privacy,
                  subject: s.subject,
                  published: s.published,
                },
              },
              update: (cache, { data }) => {
                console.log(data.updatePost)
                const _data = cache.readQuery<getUserProfileQuery>({
                  query: getUserProfileDocument,
                  variables: { id: user_id },
                })

                cache.writeQuery({
                  query: getUserProfileDocument,
                  variables: { id: user_id },
                  data: produce<getUserProfileQuery>(_data, (x) => {
                    x.getOneUser.posts.unshift(data.updatePost)
                  }),
                })
              },
            })
            state.current = null
            unPublishedPost = {...initialState,posts:[]}
            reset.current = true
            console.log('STATE AFTER : ', state.current)
          } else if (!entity) {
            createPost({
              variables: {
                input: {
                  text: s.text.value,
                  privacy: s.privacy,
                  subject: s.subject,
                  published: s.published,
                },
              },
              update: (cache, { data }) => {
                console.log(data.createPost)
                const _data = cache.readQuery<getUserProfileQuery>({
                  query: getUserProfileDocument,
                  variables: { id: user_id },
                })

                cache.writeQuery({
                  query: getUserProfileDocument,
                  variables: { id: user_id },
                  data: produce<getUserProfileQuery>(_data, (x) => {
                    x.getOneUser.posts.unshift(data.createPost)
                  }),
                })
                state.current = initialState
                unPublishedPost = null
                reset.current = true
              },
            })
          }
        }
      }

      if (prop === 'operation_type') {
        const operation_type = new_val.split('/')[0]
        const type = new_val.split('/')[1].split('_')[0]
        const entity =
          state.current.audio.entity ||
          state.current.video.entity ||
          state.current.image.entity
        console.log(new_val, !state.current[type]['entity'])
        if (!state.current[type]['entity']) {
          if (operation_type === 'upload') {
            const formdata = new FormData()
            formdata.append('file', obj.file)
            if (entity) formdata.append('ownerId', String(entity.ownerId))
            console.log(operation_type, state.current[type])
            Protected_Instance.post(
              `${process.env.NEST_SERVER_URL}user/post/${new_val}`,
              formdata,
              { headers: { 'Content-Type': 'multipart/form-data' } }
            )
              .then((res) => {
                state.current[type]['entity'] = res.data
                console.log('response : ', res)
                obj[prop] = new_val
                force((prev) => !prev)
              })
              .catch((e) => console.log(e))
          } else {
            obj[prop] = new_val
          }
        } else if (state.current[type]['entity']) {
          if (operation_type === 'delete') {
            Protected_Instance.delete(
              `${
                process.env.NEST_SERVER_URL
              }user/post/${`${new_val}/${state.current[type]['entity']['file_name']}`}`,
              { data: { ownerId: entity.ownerId } }
            )
              .then((res) => {
                if (operation_type === 'delete')
                  state.current[type]['entity'] = null
                console.log('response : ', res)
                obj[prop] = new_val
                force((prev) => !prev)
              })
              .catch((e) => console.log(e))
          }
        }
      } else {
        obj[prop] = new_val
      }
      return true
    },
  }
  useEffect(() => {
    const image = unPublishedPost?.posts?.[0]?.image
    console.log(image)
    const audio = unPublishedPost?.posts?.[0]?.audio
    const video = unPublishedPost?.posts?.[0]?.video

    if (image) state.current.image.entity = image
    if (video) state.current.video.entity = video
    if (audio) state.current.audio.entity = audio
  }, [unPublishedPost])

  const _proxy = new Proxy<typeof initialState>(initialState, handlers)
  const state = useRef<typeof initialState>(_proxy)

  console.log(state)
  return (
    <div className={classes.wrapper}>
      <div className={classes.main_container}>
        <div className={classes.left}>
          <Avatar src={avatar_url}></Avatar>
          <div className={classes.inputAndIconsContainer}>
            <TextArea
              reset={reset.current}
              mutated_obj={state.current}
              placeholder="What is new ?"
              smiles
              prop="text"
              label={false}
              cols={40}
              css={{ padding: '1rem' }}
            ></TextArea>
            <div className={classes.icons}>
              <CommonFileInput
                operation_type={`upload/${FOLDERS_U.IMAGE_F_POST}`}
                children_type="icon"
                mutated_obj={state.current}
                prop="image"
              >
                <CameraOutlined style={{ fontSize: '25px' }}></CameraOutlined>
              </CommonFileInput>
              <SimpleDropDown
                options={{
                  display: 'flex',
                  dropdown_css: { transform: 'translate(0,0)', top: '40px' },
                }}
                asset={{
                  icon: PaperClipOutlined,
                  type: 'icon',
                  css: { fontSize: '25px' },
                }}
              >
                <CommonFileInput
                  operation_type={`upload/${FOLDERS_U.IMAGE_F_POST}`}
                  mutated_obj={state.current}
                  prop="image"
                >
                  <CameraOutlined style={{ fontSize: '25px' }}></CameraOutlined>
                </CommonFileInput>
                <CommonFileInput
                  operation_type={`upload/${FOLDERS_U.AUDIO_F_POST}`}
                  mutated_obj={state.current}
                  prop="audio"
                >
                  <CustomerServiceOutlined
                    style={{ fontSize: '25px' }}
                  ></CustomerServiceOutlined>
                </CommonFileInput>
                <CommonFileInput
                  operation_type={`upload/${FOLDERS_U.VIDEO_F_POST}`}
                  mutated_obj={state.current}
                  prop="video"
                >
                  <PlaySquareOutlined
                    style={{ fontSize: '25px' }}
                  ></PlaySquareOutlined>
                </CommonFileInput>
              </SimpleDropDown>
            </div>
          </div>
        </div>
        <div
          onClick={() => (state.current.published = true)}
          className={classes.send_icon}
          style={{
            ...iconContainerStyles,
          }}
        >
          <SendOutlined style={{ fontSize: '30px' ,color:'rgb(192, 242, 198)'}}></SendOutlined>
        </div>
      </div>
      <CommentAssets
        audio={state?.current?.audio}
        image={state?.current?.image}
        video={state?.current?.video}
      ></CommentAssets>
      <hr
        style={{
          height: '1px',
          marginTop: '1rem',
          width: '70%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      ></hr>
      <div
        className={classes.dropdown}
        style={{
          width: '70%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <BarItems state={_proxy} items={postFormItems}></BarItems>
      </div>

      <hr
        style={{
          height: '1px',
          marginTop: '1rem',
          width: '70%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      ></hr>
    </div>
  )
}
