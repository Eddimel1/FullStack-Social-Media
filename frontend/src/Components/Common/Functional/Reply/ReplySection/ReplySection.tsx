import React, { useRef, useState } from 'react'
import { MainLoader } from '../../../UI-Dumb/Loaders/main-loader'
import { Reply } from '../Replies/Reply'
import { useFindDescendantsTree_F_Post_U_Query } from './__generated__/GetReplies.query'
type _props = {
  commentId: number
}
const initialState = {
    force: false,
    nullData: false,
    selectedForm: null,
  }
  export type replySectionState = React.MutableRefObject<typeof initialState>
export const ReplySection = ({ commentId }: _props) => {
  const depth = useRef(5)
  //create Replies Component , its will be render only when data arrives
  const [_, force] = useState(false)
  let { data, loading, refetch } = useFindDescendantsTree_F_Post_U_Query({
    variables: { id: commentId, depth: 5 },
  })
  const [open, setOpen] = useState(true)
  const handlers = {
    get(target, key) {
        if (typeof target[key] === 'object' && target[key] !== null) {
          return new Proxy(target[key], handlers)
        } else {
          return target[key]
        }
      },
    set(obj, prop, new_val) {
      if (prop === 'force') {
        obj[prop] = new_val
        force((prev) => !prev)
        return true
      }
      if (prop === 'nullData') {
        console.log('in nullData')
        obj[prop] = new_val
        setOpen(false)
        return true
      }
      if (prop === 'selectedForm') {
        obj[prop] = new_val
        force((prev) => !prev)
        return true
      }
    },
  }
  let state = useRef(initialState)
  state = new Proxy<replySectionState>(
    state,
    handlers
  )
  return (
    <>
      {data &&
        data.findDescendantsTree_F_Post_U &&
        !loading &&
        open &&
        data.findDescendantsTree_F_Post_U.map((reply, i) => {
          return (
            <Reply
              key={reply.id}
              state={state}
              depth={depth.current}
              loadMore={refetch}
              reply={reply}
            ></Reply>
          )
        })}
      {loading && <MainLoader css={{ margin: '0 auto' }}></MainLoader>}
    </>
  )
}
