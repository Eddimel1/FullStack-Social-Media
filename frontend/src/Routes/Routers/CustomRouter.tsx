import Page404 from '../../Pages/404Page/Page404'
import { roles } from '../Types'
import AdminRouter from './AdminRouter'
import { UserRouter } from './UserRouter'
import React from 'react'
import PublicRouter from './PublicRouter'

type _props = {
  user_role: roles
}
export default function CustomRouter({ user_role }: _props) {
  switch (user_role) {
    case 'admin':
      return <AdminRouter />

    case 'user':
      return <UserRouter />
    default:
      return <PublicRouter />
  }
}
