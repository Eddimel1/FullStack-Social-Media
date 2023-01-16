import React, { useEffect } from 'react'
import './main.scss'
import { useAppSelector } from './Redux/Store/hooks/GlobalHooks'
import CustomRouter from './Routes/Routers/CustomRouter'

export const App = () => {
    const state = useAppSelector((state) => state)
  let role = (state.reducer.auth?.user?.role) || null
  return <CustomRouter user_role={role}></CustomRouter>
}
