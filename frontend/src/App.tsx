import React from 'react'
import './main.scss'
import CustomRouter from './Routes/Routers/CustomRouter'


export const App = () => {
  return (
    <CustomRouter user_role='user'></CustomRouter>
  )
}
