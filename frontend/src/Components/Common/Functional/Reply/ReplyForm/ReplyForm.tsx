import produce from 'immer'
import React, { useEffect, useMemo } from 'react'
import { useState, useRef, useCallback } from 'react'
import { authState } from '../../../../../Redux/Selectors/selectors'
import { Protected_Instance } from '../../../../../Rest-Api/Axios/Instances/protected.instance'
import {
  Audio_F_Comment_F_Post_U,
  Video_F_Comment_F_Post_U,
  Image_F_Comment_F_Post_U,
} from '../../../../../__generated__/types'
import { PublishForm } from '../../PublishForm/PublishForm'
import { getAssetsInitialState } from '../../PublishForm/Utility/factories'
import { getOperationMetaData } from '../../PublishForm/Utility/helpers'
import { useToastAssets } from '../../Toasts/CommonToast/Hooks/useToastAssets'
import { ToastPortal } from '../../Toasts/CommonToast/ToastPortal/ToastPortal'
import { replySectionState } from '../ReplySection/ReplySection'
import { FindDescendantsTree_F_Post_U_Document } from '../ReplySection/__generated__/GetReplies.query'
import { ReplyChildrenFragmentDoc } from '../ReplySection/__generated__/ReplyChildren.fragment'
import { useCreateReply_F_Post_U_Mutation } from './__generated__/CreateReply.mutation'
import { useDeleteReply_F_Post_U_Mutation } from './__generated__/DeleteReply.mutation'
import { useUpdateReply_F_Post_U_Mutation } from './__generated__/UpdateReply.mutation'

const stateCopy = getAssetsInitialState<
  Audio_F_Comment_F_Post_U,
  Video_F_Comment_F_Post_U,
  Image_F_Comment_F_Post_U
>('reply')
export const ReplyForm = ({
  isRootReply,
  commentId,
  _replyId,
  receiverId,
  _openReplies,
  _state,
}: {
  isRootReply: boolean
  receiverId?: number
  commentId?: number
  _replyId?: number
  _openReplies?: any
  _state?: replySectionState
}) => {
  const [_, force] = useState(false)
  const { addToast, toastRef, deleteAddToasts } = useToastAssets('Reply')
  const [createReply, created_reply] = useCreateReply_F_Post_U_Mutation({
    onError: deleteAddToasts.notSuccessfulAddOperation,
  })
  const [updateReply, updated_reply] = useUpdateReply_F_Post_U_Mutation({
    onError: deleteAddToasts.notSuccessfulAddOperation,
  })
  const [removeReply, removed_reply] = useDeleteReply_F_Post_U_Mutation({
    onError: deleteAddToasts.notSuccessfulAddOperation,
  })
  const reset = useRef(false)
  const replyId = useRef<number>(null)
  const replyFormInitialState = getAssetsInitialState<
    Audio_F_Comment_F_Post_U,
    Video_F_Comment_F_Post_U,
    Image_F_Comment_F_Post_U
  >('reply')
  let state = useRef(replyFormInitialState)

  const avatar_url = authState().user.avatar?.url
  const handleBeforeUnload = useCallback(() => {
    const anyEntity =
      state.current.audio.entity ||
      state.current.video.entity ||
      state.current.image.entity
    if (replyId.current && anyEntity) {
      removeReply({
        variables: {
          input: replyId.current,
        },
        context: { headers: { keepAlive: 'timeout=3, max=0' } },
      }).catch((e) => console.log(e))
    }
  }, [])

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
            const entity =
              state.current.audio.entity ||
              state.current.video.entity ||
              state.current.image.entity
            if (entity) {
              updateReply({
                variables: {
                  input: {
                    replyId: replyId.current,
                    text: s.text.value,
                    published: s.published,
                  },
                },
                update: (cache, { data: { updateReplyForPost_U } }) => {
                  const modified = cache.modify({
                    id: `${updateReplyForPost_U.__typename}:${
                      updateReplyForPost_U.parentId ||
                      updateReplyForPost_U.ownerId
                    }`,
                    fields: {
                      children(existing = [], { readField }) {
                        const new_value = cache.writeFragment({
                          data: updateReplyForPost_U,
                          fragment: ReplyChildrenFragmentDoc,
                        })
                        return [...existing, new_value]
                      },
                    },
                  })
                  state.current = stateCopy
                  state.current.text.value = ''
                  reset.current = true
                  deleteAddToasts.notSuccessfulAddOperation()
                  console.log(state.current)

                  window.setTimeout(() => {
                    if (_openReplies) _openReplies(true)
                  }, 500)
                },
              })
            } else if (!entity) {
              createReply({
                variables: {
                  input: {
                    text: s.text.value,
                    ownerId: commentId,
                    receiverId: receiverId,
                    replyId: _replyId,
                    published: s.published,
                  },
                },
                refetchQueries: [
                  commentId ? FindDescendantsTree_F_Post_U_Document : null,
                ],
                update: (cache, { data: { createReplyForPost_U } }) => {
                  if (createReplyForPost_U.parentId) {
                    const modified = cache.modify({
                      id: `${createReplyForPost_U.__typename}:${
                        createReplyForPost_U.parentId ||
                        createReplyForPost_U.ownerId
                      }`,
                      fields: {
                        children(existing = [], { readField }) {
                          const new_value = cache.writeFragment({
                            data: createReplyForPost_U,
                            fragment: ReplyChildrenFragmentDoc,
                          })
                          return [...existing, new_value]
                        },
                      },
                    })
                  }

                  state.current = stateCopy
                  state.current.text.value = ''
                  reset.current = true
                  deleteAddToasts.notSuccessfulAddOperation()
                  window.setTimeout(() => {
                    if (_openReplies) _openReplies(true)
                  }, 500)
                },
              })
            }
          }
        }
        if (prop === 'operation_type') {
          const anyEntity =
            state.current.audio.entity ||
            state.current.video.entity ||
            state.current.image.entity
          const { entityType, operationType } = getOperationMetaData(new_val)
          console.log(new_val, !state.current[entityType]['entity'])
          if (!state.current[entityType]['entity']) {
            if (operationType === 'upload') {
              const formdata = new FormData()
              formdata.append('file', obj.file)
              formdata.append('receiverId', String(receiverId))
              if (!isRootReply) formdata.append('parentId', String(_replyId))
              if (anyEntity) {
                formdata.append('ownerId', String(replyId.current))
              }
              if (!replyId.current && isRootReply) {
                formdata.append(
                  'parentOfOwnerId',
                  String(commentId || _replyId)
                )
              }
              Protected_Instance.post(
                `${process.env.NEST_SERVER_URL}user/reply_f_post_u/${new_val}`,
                formdata,
                { headers: { 'Content-Type': 'multipart/form-data' } }
              )
                .then((res) => {
                  state.current[entityType]['entity'] = res.data
                  replyId.current = res.data.ownerId
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
              if (state.current.number_of_files === 1) {
                removeReply({
                  variables: {
                    input: replyId.current,
                  },
                  update: (cache, { data }) => {
                    const identity = cache.identify(data.deleteReplyForPost_U)
                    state.current[entityType]['entity'] = null
                    state.current[entityType]['local_url'] = null
                    replyId.current = null
                    cache.evict({ id: identity })
                    console.log('CACHE : ', cache)
                  },
                })
              } else if (state.current.number_of_files > 1) {
                Protected_Instance.delete(
                  `${
                    process.env.NEST_SERVER_URL
                  }user/${`${new_val}/${state.current[entityType]['entity']['file_name']}`}`,
                  { data: { ownerId: replyId.current } }
                )

                  .then((res) => {
                    if (operationType === 'delete')
                      state.current[entityType]['entity'] = null
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

  state = new Proxy<React.MutableRefObject<typeof replyFormInitialState>>(
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
        placeholder="Add your reply"
        mappingType="reply_f_post_u"
        avatar_url={avatar_url}
        reset={reset.current}
        state={state.current}
        containerCss={{ width: '80%' }}
      ></PublishForm>
    </>
  )
}
