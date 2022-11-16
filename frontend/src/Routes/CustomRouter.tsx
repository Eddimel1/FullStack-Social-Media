import Page404 from '../Pages/404Page/Page404'
import React from 'react'
import AdminRouter from './AdminRouter'
import { roles } from './Types'
import UserRouter from './UserRouter'

type _props = {
    user_role:roles
}
export default function CustomRouter({user_role}:_props) {
  switch (user_role) {
    case 'admin':
        return <AdminRouter />

        case 'user':
            return <UserRouter />
    default:
        return <Page404 />
  }
}
