import Login from '../Pages/Login/Login'
import { Home } from '../Pages/Home/Home'
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Chat from '../Components/User/Chat/Chat'
export default function UserRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Login />}></Route>
        <Route path='/profile/:id' element={<Login />}></Route>
        <Route path='/chat' element={<Chat />}></Route>

    </Routes>
  )
}
