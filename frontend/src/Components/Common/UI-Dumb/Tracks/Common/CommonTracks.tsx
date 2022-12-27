import React, { PropsWithChildren } from 'react'
import classes from './CommonTrack.module.scss'
type _props = {
    css?:React.CSSProperties
}
export const CommonTrack:React.FC<PropsWithChildren<_props>> = ({css,children}) => {
  return (
    <div className={classes.track} style={{...css}}>{children}</div>
  )
}
