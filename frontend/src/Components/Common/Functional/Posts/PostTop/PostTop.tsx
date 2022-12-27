import React from 'react'
import { Avatar } from '../../../UI-Dumb/Graphics/Images/Avatar/Avatar'
import DefaultAvatar from '../../../../../../assets/DefaultAvatar.png'
import classes from './PostTop.module.scss'
import { EllipsisOutlinedIcon } from '../../../UI-Dumb/Lib-Wrappers/Icons/EllipsisOutlined/EllipsisOutlined'
import { CommonNavLink } from '../../../UI-Dumb/Lib-Wrappers/NavLink/CommonNavLink/CommonNavLink'
type _props = {
    username:string
    date : string
    avatar_url:string
}
export const PostTop = ({avatar_url,date,username}:_props) => {
  return (
    <div className={classes.top}>
        <div className={classes.top_right}>
        <Avatar src={avatar_url} alt='default avatar'></Avatar>      
        </div>
        <div className={classes.top_center}>
            <div className={classes.links}>
                <CommonNavLink to='./'>{username}</CommonNavLink>
              <CommonNavLink to='./'>{date}</CommonNavLink>
   
            </div>
           
        </div>
        <div className={classes.top_bottom}>
            <EllipsisOutlinedIcon></EllipsisOutlinedIcon>
        </div>
         
    </div>

    
  )
}
