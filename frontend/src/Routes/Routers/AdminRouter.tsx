import AdminDashBoard from '../../Components/Specific/Admin/AdminDashBoard/AdminDashBoard'
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { UserRouter } from './UserRouter'
import { extendRouter } from '../utility/utility'
import PublicRouter from './PublicRouter'

export default function _AdminRouter() {
  return (
   <Routes>
   <Route path='/admin' element={<AdminDashBoard />}></Route>

   </Routes>
  )
}

export function AdminRouter(){
    const routes =  extendRouter(_AdminRouter,[])
    return(
        <>{routes}</>
    )
}
