import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { SignUp } from '../../Pages/Auth/CreateUser/CreateUser'
import Login from '../../Pages/Auth/Login/Login'
import { RefreshPassword } from '../../Pages/Auth/RefreshPassword/ForgotPassword'





export default function PublicRouter() {
  return (
   <Routes>
   <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/reset-password" element={<RefreshPassword />}></Route>
   </Routes>
  )
}