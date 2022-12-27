import { EllipsisOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import classes from './EllipsisOutlined.module.scss'
export const EllipsisOutlinedIcon = () => {
    const [anim,playAnim] = useState(false)
  return (
    <EllipsisOutlined onMouseLeave={()=>playAnim(false)} onMouseEnter={()=>playAnim(true)} className={`${classes.ellipsis} ${anim ? `${classes.onHover}` : classes.onLeave}`}></EllipsisOutlined>
  )
}
