import Login from '../../Pages/Auth/Login/Login'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Chat from '../../Components/Specific/User/Chat/Chat'
import { extendRouter } from '../utility/utility'
import PublicRouter from './PublicRouter'

 function _UserRouter() {
  return (
    <Routes>
      <Route path="/profile/:id" element={<Login />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
    </Routes>
  )
}
export function UserRouter(){
    const routes =  extendRouter(_UserRouter,[PublicRouter])
    return(
        <>{routes}</>
    )
}