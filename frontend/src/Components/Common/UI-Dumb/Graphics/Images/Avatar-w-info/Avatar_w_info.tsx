import React, { PropsWithChildren } from 'react'
import { CommonNavLink } from '../../../Lib-Wrappers/NavLink/CommonNavLink/CommonNavLink'
import { Avatar } from '../Avatar/Avatar'
import classes from './Avatar_w_info.module.scss'
type _props = {
    children:React.ReactNode
    user_id:string,
    direction?:'row' | 'column'
    src?:string
}
export const Avatar_w_info:React.FC<PropsWithChildren<_props>> = ({user_id,src,children,direction = 'column'}:_props) => {
    const isRow = direction === 'row' 
  return (
    <div className={classes.friendWrapper}>
    <CommonNavLink  to={'/'}>
        <div className={`${classes.friendContainer} ${isRow ? `${classes.row}` : `${classes.column}`}`}>
<div className={`${isRow ? `${classes.info_row}` : `${classes.info_column}`}`}>{children}</div>
<Avatar src={src} css={{marginTop:'1rem'}} className={classes.avatar} width={80} height={80}></Avatar>
        </div>
    
    </CommonNavLink>
    </div>
  )
}
