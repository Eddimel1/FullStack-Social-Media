import AdminDashBoard from '../Components/Specific/Admin/AdminDashBoard/AdminDashBoard'
import React from 'react'
import { Routes, Route} from 'react-router-dom'

export default function AdminRouter() {
  return (
   <Routes>
   <Route path='/admin' element={<AdminDashBoard />}></Route>

   </Routes>
  )
}
