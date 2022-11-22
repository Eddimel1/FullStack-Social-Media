import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from '../../Pages/Auth/Login/Login'
import { RefreshPassword } from '../../Pages/Auth/RefreshPassword/ForgotPassword'
import { Home } from '../../Pages/Home/Home'
import SignUp from '../../Pages/SignUp/SignUp'



export default function PublicRouter() {
  return (
   <Routes>
   <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/reset-password" element={<RefreshPassword />}></Route>
   </Routes>
  )
}