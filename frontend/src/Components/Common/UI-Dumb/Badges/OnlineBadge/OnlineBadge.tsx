import React from 'react'
import { CommonPseudo } from '../../Pseudo/Common/CommonPseudo'
import classes from './OnlineBadge.module.scss'
type _props = {
    isOnline : boolean
}
export const OnlineBadge = ({isOnline}:_props) => {
  return (
    <CommonPseudo position='bottom_left'>
<div style={{backgroundColor:`${isOnline ? 'green' : 'red'}`}} className={classes.badge}></div>
    </CommonPseudo>
    
  )
}
