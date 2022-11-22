import { CSS_Props } from '../../../../../Global/Types/Props'
import React, { PropsWithChildren } from 'react'
import classes from './Centred.module.scss'

export const Container:React.FC<PropsWithChildren<CSS_Props>> = ({children,css}) => {
  return (
    <div style={css} className={classes.container}>{children}</div>
  )
}
