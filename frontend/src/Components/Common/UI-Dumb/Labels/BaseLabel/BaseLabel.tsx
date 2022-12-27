import React, { FC, PropsWithChildren } from 'react'
import { labelStyles } from '../../../../../Global/Styles/label'
import { CSS_Props } from '../../../../../Global/Types/Props'
import classes from './BaseLabel.module.scss'
export const Label:FC<PropsWithChildren<CSS_Props&{underline_hover?:boolean}>> = ({children , css,underline_hover}) => {
  return (
    <div className={`${underline_hover ? `${classes.hover}` : ''}`}  style={{...labelStyles,...css}}>{children}</div>
  )
}
