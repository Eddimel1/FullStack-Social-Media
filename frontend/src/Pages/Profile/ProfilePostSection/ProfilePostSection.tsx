import React from 'react'
import { Post } from '../../../Components/Common/Functional/Posts/Post/Post'
import { PostForm } from '../../../Components/Common/Functional/Posts/PostForm/PostForm'
import { authState } from '../../../Redux/Selectors/selectors'
import { U_Avatar_En } from '../../../__generated__/types'
import { ProfilePostSectionFragment } from './__generated__/ProfilePostSection.fragment'


export type filteredPosts = Pick<ProfilePostSectionFragment,'posts'>
export const ProfilePostSection = React.memo(({user}:{user:ProfilePostSectionFragment & {avatar:U_Avatar_En}}) => {
    const _unPublishedPost =  {posts : user?.posts?.filter((post)=>!post.published)} 
    const publishedPosts = {posts : user?.posts?.filter((post)=>post.published)}
    const _avatar_url = authState().user.avatar?.url
console.log('RERENDER!!!!!')
  return (
    <>

     {_unPublishedPost && <PostForm unPublishedPost={_unPublishedPost} ></PostForm>}
          {publishedPosts && <Post publishedPosts={publishedPosts} avatar_url={_avatar_url}></Post>}
         
    </>
   
  )
})