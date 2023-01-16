import React, { FC, PropsWithChildren } from "react"
import { NavBar } from "../../../Bars/NavBar/NavBar"
import { LeftSideBar } from "../../../Functional/Bars/SideBar/SideBar"
import { Post } from "../../../Functional/Posts/Post/Post"
import { PostForm } from "../../../Functional/Posts/PostForm/PostForm"
import { _1SideBarLayout } from "../../User/1SideBarLayout/1SideBarLayout"


type _props = {
    left:React.ReactNode,
    right:React.ReactNode,
    top?:React.ReactNode
}
export const LeftSideBarLayout:FC<PropsWithChildren<_props>> = ({left,right,top}:_props) => {

  return (
    <>
      <NavBar></NavBar>
        <div style={{display:'flex'}}>
            <div
            style={{flex:'1'}}>
       <LeftSideBar></LeftSideBar>
            </div>
        <div style={{flex:'10'}}>
        <div style={{margin:'10rem 10rem'}}>
        {top && top}
        <div style={{display:'flex',marginTop:'5rem'}}
        >
          <div style={{flex:'2'}}>
          {left && left}
          </div>
          <div style={{alignSelf:'flex-start' ,flex:'1'}}>{right}</div>
        </div>
        </div>
        </div>
       
        </div>
        
     
     
     
    </>
  )
}