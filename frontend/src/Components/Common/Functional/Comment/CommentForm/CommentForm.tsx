import produce from 'immer'
import React, { useMemo } from 'react'
import { useState, useRef, useCallback, useEffect } from 'react'
import { authState } from '../../../../../Redux/Selectors/selectors'
import { Protected_Instance } from '../../../../../Rest-Api/Axios/Instances/protected.instance'
import {
  Audio_F_Comment_F_Post_U,
  Video_F_Comment_F_Post_U,
  Image_F_Comment_F_Post_U,
} from '../../../../../__generated__/types'
import { PublishForm } from '../../PublishForm/PublishForm'
import { getAssetsInitialState } from '../../PublishForm/Utility/factories'
import {
  GetComments_F_Post_U_Query,
  GetComments_F_Post_U_Document,
} from '../CommentSection/__generated__/GetComments.query'
import { useCreateCommentForPost_U_Mutation } from './__generated__/CreateComment.mutation'
import { useRemoveCommentForPost_U_Mutation } from './__generated__/DeleteComment.mutation'
import { useUpdateCommentForPost_U_Mutation } from './__generated__/UpdateComment.mutation'

type _props = {
  postId: number
  _state: any
}
const stateCopy = getAssetsInitialState<
  Audio_F_Comment_F_Post_U,
  Video_F_Comment_F_Post_U,
  Image_F_Comment_F_Post_U
>('comment')
export const CommentForm = React.memo(({ postId, _state }: _props) => {
  const [_, force] = useState(false)
  const [createComment, created_comment] = useCreateCommentForPost_U_Mutation()
  const [updateComment, updated_comment] = useUpdateCommentForPost_U_Mutation()
  const [removeComment, removed_comment] = useRemoveCommentForPost_U_Mutation()
  const reset = useRef(false)
  const user_id = authState().user.id
  const commentId = useRef<string>(null)
  const commentFormInitialState = getAssetsInitialState<
    Audio_F_Comment_F_Post_U,
    Video_F_Comment_F_Post_U,
    Image_F_Comment_F_Post_U
  >('comment')
  let state = useRef(commentFormInitialState)
  const avatar_url = authState().user.avatar?.url
 
  //this is needed when comment is in a database but still is unpublished , send beacon and remove it in a database
  const handleBeforeUnload = () => {
    if (anyEntity && commentId.current) {
      removeComment({
        variables: {
          input: {
            commentId: Number(commentId.current),
            ownerId: postId,
          },
        },
        context: { headers: { keepAlive: 'timeout=1, max=0' } },
      }).catch((e) => console.log(e))
    }
  }

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
            const anyEntity = s.audio.entity || s.video.entity || s.image.entity
            if (anyEntity) {
              updateComment({
                variables: {
                  input: {
                    commentId: Number(commentId.current),
                    ownerId: postId,
                    text: s.text.value,
                    published: s.published,
                  },
                },
                update: (cache, { data }) => {
                  const _data = cache.readQuery<GetComments_F_Post_U_Query>({
                    query: GetComments_F_Post_U_Document,
                    variables: { id: postId },
                  })

                  console.log('BEFORE : ', cache)
                  cache.writeQuery({
                    query: GetComments_F_Post_U_Document,
                    variables: { id: postId },
                    data: produce<GetComments_F_Post_U_Query>(_data, (x) => {
                      console.log(data)
                      x.findAllCommentsForPost_U.items.unshift(
                        data.updateCommentForPost_U
                      )
                    }),
                  })
                  console.log('AFTER : ', cache)
                },
              })
              state.current = stateCopy
              reset.current = true
              _state._showSection()
            } else if (!anyEntity) {
              createComment({
                variables: {
                  input: {
                    text: s.text.value,
                    ownerId: postId,
                    published: s.published,
                  },
                },
                update: (cache, { data }) => {
                  const _data = cache.readQuery<GetComments_F_Post_U_Query>({
                    query: GetComments_F_Post_U_Document,
                    variables: { id: postId },
                  })

                  cache.writeQuery({
                    query: GetComments_F_Post_U_Document,
                    variables: { id: postId },
                    data: produce<GetComments_F_Post_U_Query>(_data, (x) => {
                      x.findAllCommentsForPost_U.items.unshift(
                        data.createCommentForPost_U
                      )
                    }),
                  })
                  state.current = stateCopy
                  reset.current = true
                  _state._showSection()
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
              if (entity) {
                formdata.append('ownerId', commentId.current)
              }
              if (!commentId.current)
                formdata.append('parentOfOwnerId', String(postId))
              Protected_Instance.post(
                `${process.env.NEST_SERVER_URL}user/comment_f_post_u/${new_val}`,
                formdata,
                { headers: { 'Content-Type': 'multipart/form-data' } }
              )
                .then((res) => {
                  state.current[type]['entity'] = res.data
                  commentId.current = res.data.ownerId
                  obj[prop] = new_val
                  state.current.number_of_files += 1
                  force((prev) => !prev)
                })
                .catch((e) => console.log(e))
            } else {
              obj[prop] = new_val
            }
          } else if (state.current[type]['entity']) {
            if (operation_type === 'delete') {
              if (state.current.number_of_files === 1) {
                removeComment({
                  variables: {
                    input: {
                      commentId: Number(commentId.current),
                      ownerId: Number(postId),
                    },
                  },
                  update: (cache, { data }) => {
                    const identity = cache.identify(data.removeCommentForPost_U)
                    state.current[type]['entity'] = null
                    commentId.current = null
                    cache.evict({ id: identity })
                  },
                })
              } else if (state.current.number_of_files > 1) {
                Protected_Instance.delete(
                  `${
                    process.env.NEST_SERVER_URL
                  }user/${`${new_val}/${state.current[type]['entity']['file_name']}`}`,
                  { data: { ownerId: commentId.current } }
                )

                  .then((res) => {
                    if (operation_type === 'delete')
                      state.current[type]['entity'] = null
                    obj[prop] = new_val
                    state.current.number_of_files -= 1
                    force((prev) => !prev)
                  })
                  .catch((e) => console.log(e))
              }
            }
          }
        } else {
          obj[prop] = new_val
        }
        return true
      },
    }),
    []
  )
  useEffect(() => {
    return () => handleBeforeUnload()
  }, [])

  state = new Proxy<React.MutableRefObject<typeof commentFormInitialState>>(
    state,
    handlers
  )

  return (
    <PublishForm
      placeholder="Add your comment..."
      key={postId}
      mappingType="comment_f_post_u"
      avatar_url={avatar_url}
      reset={reset.current}
      state={state.current}
      containerCss={{ width: '80%' }}
    ></PublishForm>
  )
})
