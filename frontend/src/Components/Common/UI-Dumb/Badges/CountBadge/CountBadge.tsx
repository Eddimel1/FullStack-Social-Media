import React from 'react'
import { CommonPseudo } from '../../Pseudo/Common/CommonPseudo'
import classes from './CountBadge.module.scss'
type _props = {
    count : number
    color?:string
    css?:React.CSSProperties
}
export const CountBadge = ({count,color='black',css}:_props) => {
  return (
    <CommonPseudo position='bottom_left'>
<div style={{backgroundColor:`${color}`,...css}} className={classes.badge}><div className={classes.count}>
    {count}
    </div></div>
    </CommonPseudo>
    
  )
}
