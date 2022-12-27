import React, { useEffect } from 'react'
import classes from './main-loader.module.scss'
type _props = {
    css?:React.CSSProperties
}
export const MainLoader = ({css} : _props) => {

  return (
   <div style={css} className={classes.loader}></div>
  )
}
