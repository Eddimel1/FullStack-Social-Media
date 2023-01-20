import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BarItems } from '../../Bars/BarItems/BarItems'
import { postFormItems } from './data'
import classes from './PostForm.module.scss'
import { Protected_Instance } from '../../../../../Rest-Api/Axios/Instances/protected.instance'
import {
  Audio_F_Post_U,
  Image_F_Post_U,
  Video_F_Post_U,
} from '../../../../../__generated__/types'
import { filteredPosts } from '../../../../../Pages/Profile/ProfilePostSection/ProfilePostSection'
import { usecreatePostMutation } from './__generated__/PostCreate.mutation'
import { useupdatePostMutation } from './__generated__/PostUpdate.mutation'
import {
  getUserProfileDocument,
  getUserProfileQuery,
} from '../../../../../Pages/Profile/__generated__/Profile.query'
import { authState } from '../../../../../Redux/Selectors/selectors'
import produce from 'immer'
import { PublishForm } from '../../PublishForm/PublishForm'
import { getAssetsInitialState } from '../../PublishForm/Utility/factories'
import { useremovePostMutation } from './__generated__/PostRemove.mutation'
import { getOperationMetaData } from '../../PublishForm/Utility/helpers'
import {
  ToastPortal,
  _addMessageArgs,
} from '../../Toasts/CommonToast/ToastPortal/ToastPortal'
import { useToastAssets } from '../../Toasts/CommonToast/Hooks/useToastAssets'
import { returnDeleteAddToast } from '../../Toasts/CommonToast/utilities/helpers'

const stateCopy = getAssetsInitialState<
  Audio_F_Post_U,
  Video_F_Post_U,
  Image_F_Post_U
>('post')
export const PostForm = React.memo(
  ({ unPublishedPost }: { unPublishedPost: filteredPosts | null }) => {
    const postFormInitialState = getAssetsInitialState<
      Audio_F_Post_U,
      Video_F_Post_U,
      Image_F_Post_U
    >('post')

    const [_, force] = useState(false)
    const { addToast, toastRef ,deleteAddToasts} = useToastAssets('Post')
    const [createPost, created_post] = usecreatePostMutation({
      onError: deleteAddToasts.notSuccessfulAddOperation,
    })
    const [updatePost, updated_post] = useupdatePostMutation({
      onError: deleteAddToasts.notSuccessfulAddOperation,
    })
    const [removePost, removed_post] = useremovePostMutation({
      onError: deleteAddToasts.notSuccessfulDeleteOperation,
    })
    const reset = useRef(false)
    const user_id = authState().user.id
    let state = useRef(postFormInitialState)
    const avatar_url = authState().user.avatar?.url
   
    const handlers = useMemo(
      () => ({
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
              obj[prop] = new_val
              const s = state.current
              const entity = s.audio.entity || s.video.entity || s.image.entity
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
                    const _data = cache.readQuery<getUserProfileQuery>({
                      query: getUserProfileDocument,
                      variables: { id: user_id },
                    })

                    cache.writeQuery({
                      query: getUserProfileDocument,
                      variables: { id: user_id },
                      data: produce<getUserProfileQuery>(_data, (x) => {
                        x.getOneUser.user.posts.unshift(data.updatePost)
                      }),
                    })
                  },
                })
                console.log(
                  'initial : ',
                  postFormInitialState,
                  'STATE : ',
                  state.current
                )
                state.current = stateCopy
                unPublishedPost = { ...stateCopy, posts: [] }
                reset.current = true
                deleteAddToasts.SuccessfulAddOperation()
                force((prev) => !prev)
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
                    const _data = cache.readQuery<getUserProfileQuery>({
                      query: getUserProfileDocument,
                      variables: { id: user_id },
                    })

                    cache.writeQuery({
                      query: getUserProfileDocument,
                      variables: { id: user_id },
                      data: produce<getUserProfileQuery>(_data, (x) => {
                        x.getOneUser.user.posts.unshift(data.createPost)
                      }),
                    })
                    state.current = stateCopy
                    unPublishedPost = null
                    reset.current = true
                    deleteAddToasts.SuccessfulAddOperation()
                  },
                })
              }
            }
          }

          if (prop === 'operation_type') {
            const { entityType, operationType } = getOperationMetaData(new_val)
            const entity =
              state.current.audio.entity ||
              state.current.video.entity ||
              state.current.image.entity
            if (!state.current[entityType]['entity']) {
              if (operationType === 'upload') {
                const formdata = new FormData()
                formdata.append('file', obj.file)
                if (entity) formdata.append('ownerId', String(entity.ownerId))
                Protected_Instance.post(
                  `${process.env.NEST_SERVER_URL}user/post/${new_val}`,
                  formdata,
                  { headers: { 'Content-Type': 'multipart/form-data' } }
                )
                  .then((res) => {
                    state.current[entityType]['entity'] = res.data
                    state.current[entityType]['local_url'] = null
                    console.log('response : ', res)
                    obj[prop] = new_val
                    state.current.number_of_files += 1
                    force((prev) => !prev)
                  })
                  .catch((e) => console.log(e))
              } else {
                obj[prop] = new_val
              }
            } else if (state.current[entityType]['entity']) {
              if (operationType === 'delete') {
                console.log(state.current.number_of_files)
                if (state.current.number_of_files === 1) {
                  removePost({
                    variables: {
                      id: state.current[entityType]['entity']['ownerId'],
                    },
                    update: (cache, { data }) => {
                      const identity = cache.identify(data.removePost)
                      state.current[entityType]['entity'] = null
                      cache.evict({ id: identity })
                    },
                  }).catch((e) => {
                    console.log(e)
                  })
                } else if (state.current.number_of_files > 1) {
                  Protected_Instance.delete(
                    `${
                      process.env.NEST_SERVER_URL
                    }user/post/${`${new_val}/${state.current[entityType]['entity']['file_name']}`}`,
                    { data: { ownerId: entity.ownerId } }
                  )
                    .then((res) => {
                      if (operationType === 'delete')
                        state.current[entityType]['entity'] = null
                      obj[prop] = new_val
                      state.current.number_of_files -= 1
                    })
                    .catch((e) => {
                      console.log(e)
                    })
                }
              }
            }
          } else {
            console.log(obj, prop, new_val)
            obj[prop] = new_val
          }
          console.log(state.current)
          return true
        },
      }),
      []
    )
    useEffect(() => {
      const image = unPublishedPost?.posts?.[0]?.image
      const audio = unPublishedPost?.posts?.[0]?.audio
      const video = unPublishedPost?.posts?.[0]?.video
      const entities = [image, audio, video]
      entities.forEach((entity) => {
        if (entity) state.current.number_of_files++
      })
      if (image) state.current.image.entity = image
      if (video) state.current.video.entity = video
      if (audio) state.current.audio.entity = audio
      console.log(state.current)
    }, [unPublishedPost])

    state = new Proxy<React.MutableRefObject<typeof postFormInitialState>>(
      state,
      handlers
    )

    return (
      <>
        <ToastPortal
          autoCloseTime={5000}
          ref={toastRef}
          autoClose={true}
        ></ToastPortal>

        <PublishForm
          mappingType="post_u"
          avatar_url={avatar_url}
          reset={reset.current}
          state={state.current}
        >
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
            <BarItems state={state} items={postFormItems}></BarItems>
          </div>

          <hr
            style={{
              height: '1px',
              marginTop: '1rem',
              width: '70%',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          ></hr>
        </PublishForm>
      </>
    )
  }
)
