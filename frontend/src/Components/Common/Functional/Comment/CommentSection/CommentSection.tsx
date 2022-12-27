import React from 'react'
import { CommonComment } from '../Comment/Common/CommonComment'
import { CommentForm } from '../Form/CommentForm'

export const CommentSection = () => {
  return (
    <>
      
      <div style={{ margin: '3rem 0' }}>
        <CommentForm ></CommentForm>
      </div>
    
      <CommonComment></CommonComment>
      <CommonComment></CommonComment>
      <CommonComment></CommonComment>
      
    </>
  )
}
