import React from 'react'
import { Post } from '../../../Components/Common/Functional/Posts/Post/Post'
import { PostForm } from '../../../Components/Common/Functional/Posts/PostForm/PostForm'
import { U_Avatar_En } from '../../../__generated__/types'
import { ProfilePostSectionFragment } from './__generated__/ProfilePostSection.fragment'


export type filteredPosts = Pick<ProfilePostSectionFragment,'posts'>
export const ProfilePostSection = ({user}:{user:ProfilePostSectionFragment & {avatar:U_Avatar_En}}) => {
    const _unPublishedPost =  {posts : user?.posts?.filter((post)=>!post.published)} 
    const publishedPosts = {posts : user?.posts?.filter((post)=>post.published)}
  return (
    <>
     <PostForm unPublishedPost={_unPublishedPost} avatar_url={user?.avatar?.url} ></PostForm>
          <Post publishedPosts={publishedPosts} avatar_url={user?.avatar?.url}></Post>
    </>
   
  )
}
