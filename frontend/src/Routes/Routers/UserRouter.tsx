import React from 'react'
import { Routes, Route } from "react-router-dom"
import { VideoPlayer } from "../../Components/Common/Functional/Video/VideoPlayer/VideoPlayer"
import Chat from "../../Components/Specific/User/Chat/Chat"
import Login from "../../Pages/Auth/Login/Login"
import { extendRouter } from "../utility/utility"
import testVideo from '../../../assets/test-video.mp4'
import { Profile } from '../../Pages/Profile/Profile'
import { Feed } from '../../Pages/Feed/Feed'
import { JuicySlider } from '../../Components/Common/Functional/Sliders/CommonSlider/CommonSlider'

 function _UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<Feed />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
      <Route path="/video" element={<VideoPlayer src={testVideo}></VideoPlayer>}></Route>
      <Route path="/slider" element={<JuicySlider container_css={{margin:'3rem auto' , width:'100%'}}></JuicySlider>}></Route>
    </Routes>
  )
}
export function UserRouter(){
    const routes =  extendRouter(_UserRouter,[])
    return(
        <>{routes.map((Route,i)=>{
            return <Route key={i}></Route>
        })}</>
    )
}