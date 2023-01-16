import React, { useState } from 'react'
import { cache } from 'webpack'
import { client } from '../../../../..'
import { CommentForPost_U } from '../../../../../__generated__/types'
import { CommonComment } from '../Comment/CommonComment'
import { CommentForm } from '../CommentForm/CommentForm'
import { Comments } from './Comments'
import { GetComments_F_Post_U_Document, GetComments_F_Post_U_Query, useGetComments_F_Post_U_Query } from './__generated__/GetComments.query'

type _props = {
  postId: number
  isShow:boolean
  state:any
}

export type commentT_U = Pick<GetComments_F_Post_U_Query,'findAllCommentsForPost_U'>['findAllCommentsForPost_U']['items'][0]

export const CommentSection = React.memo(({ postId,state,isShow}: _props) => {

  const { data, loading, error } = useGetComments_F_Post_U_Query({
    variables: { id: postId },
  })
  return (
    <>

      <div style={{ margin: '3rem 0' }}>
        <CommentForm
        _state={state}
          postId={postId}
        ></CommentForm>
      </div>

     {isShow && data?.findAllCommentsForPost_U && <Comments data={data} loading={loading}></Comments>}
    </>
  )
})
