import React from 'react'
import { CommonComment } from '../Comment/CommonComment'

type _props = {
    data:any
    loading:boolean
}
export const Comments = ({data,loading}:_props) => {
    console.log('COMMENTS : ' , data?.findAllCommentsForPost_U)
  return (
    <>
      { data?.findAllCommentsForPost_U?.items?.map((item)=>{
        return <CommonComment key={item.id} comment={item}></CommonComment>
      })}
    </>
  
  )
}
