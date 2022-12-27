import classes from './Feed.module.scss'
import React from 'react'
import { MainLoader } from '../../Components/Common/UI-Dumb/Loaders/main-loader'
import { NavBar } from '../../Components/Common/Bars/NavBar/NavBar'
import { LeftSideBar } from '../../Components/Common/Functional/Bars/SideBar/SideBar'
import { Post } from '../../Components/Common/Functional/Posts/Post/Post'
import { PostForm } from '../../Components/Common/Functional/Posts/PostForm/PostForm'
import { RightSideBar } from './RightSideBar/RightSideBar'
import { CommonContainer } from '../../Components/Common/UI-Dumb/Containers/Centred/CommonContainer'
import { _2SideBarLayout } from '../../Components/Common/Layouts/User/2SideBarLayout/2SideBarLayout'
import { PostFilter } from '../../Components/Common/Functional/Posts/PostFilter/PostFilter'

export const Feed = () => {
  return (
    <>
      <NavBar></NavBar>

      <_2SideBarLayout>
        <LeftSideBar></LeftSideBar>

        <CommonContainer
          css={{
            width: '80%',
            position: 'static',
            transform: 'translate(0,0)',
            margin: '120px auto',
          }}
        >
          <PostFilter></PostFilter>
          <Post></Post>
        </CommonContainer>

        <RightSideBar></RightSideBar>
      </_2SideBarLayout>
    </>
  )
}
