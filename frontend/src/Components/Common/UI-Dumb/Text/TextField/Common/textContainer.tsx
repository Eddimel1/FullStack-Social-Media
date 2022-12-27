import React, { PropsWithChildren } from 'react'
import classes from './TextContainer.module.scss'
type _props = {
    css?:React.CSSProperties
}
export const CommonTextContainer:React.FC<PropsWithChildren<_props>> = ({children,css}) => {
  return (
    <div className={classes.wrapper} style={{...css}}>
        <div className={classes.container}> 
        {children}
        </div>
    
</div>
  )
}
