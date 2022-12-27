import { CSS_Props } from '../../../../../Global/Types/Props'
import React, { PropsWithChildren } from 'react'
import classes from './CommonContainer.module.scss'

export const CommonContainer:React.FC<PropsWithChildren<CSS_Props>> = ({children,css}) => {
  return (
    <div style={css} className={classes.container}>{children}</div>
  )
}
