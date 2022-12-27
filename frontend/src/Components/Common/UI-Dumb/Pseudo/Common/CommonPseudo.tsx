import React, { PropsWithChildren } from 'react'
import classes from './CommonPseudo.module.scss'

type _position = 'top_left' | 'top_right' | 'top_center' | 'bottom_left' | 'bottom_right' | 'bottom_center' | 
'top_left' | 'top_right' | 'top_center' | 'center_left' | 'center_right' | 'center_center'
type _props =  {
    position:_position
    children:React.ReactNode
}
export const CommonPseudo:React.FC<PropsWithChildren<_props>> = ({position,children}:_props) => {
  return (
    <div className={`${classes.pseudo} ${classes[position]}`}>{children}</div>
  )
}
