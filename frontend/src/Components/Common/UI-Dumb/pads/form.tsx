import React, { PropsWithChildren } from 'react'
import classes from './form.module.scss'
type _props = React.HTMLAttributes<HTMLImageElement> &{
    css?:React.CSSProperties

}
export const CommonPad:React.FC<PropsWithChildren<_props>> = ({children,css,...attr}) => {
  return (
    <div {...attr}  style={{...css}} className={classes.pad}>{children}</div>
  )
}
