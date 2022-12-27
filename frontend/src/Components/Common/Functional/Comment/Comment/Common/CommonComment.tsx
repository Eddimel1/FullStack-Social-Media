import { LikeOutlined, FrownOutlined } from '@ant-design/icons'
import React from 'react'
import { Avatar } from '../../../../UI-Dumb/Graphics/Images/Avatar/Avatar'
import { Label } from '../../../../UI-Dumb/Labels/BaseLabel/BaseLabel'
import { CommonNavLink } from '../../../../UI-Dumb/Lib-Wrappers/NavLink/CommonNavLink/CommonNavLink'
import classes from './CommonComment.module.scss'

export const CommonComment = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.container}>
            <div className={classes.left}>
    <Avatar></Avatar>
            </div>
            <div className={classes.center}>
                <CommonNavLink to='./'>username</CommonNavLink>
            <div className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae, totam autem aliquid mollitia minus eaque. At, nam magni! Doloremque, repellendus obcaecati. Laboriosam suscipit error ab, magni mollitia quam sed? <span className={classes.showMore}>.... show more</span>
            </div>
            <div className={classes.meta_data}>
                <div className={classes.metaItem}>2 years ago</div>
                <div className={classes.metaItem}>reply</div>
                <div className={classes.metaItem}>share</div>
            </div>
            </div>
            <div className={classes.right}>
               
                    <div className={classes.complain}>
                       <FrownOutlined className={classes.icon}></FrownOutlined>
                    </div>
                    <div className={classes.likes}>
                    <LikeOutlined className={classes.icon}></LikeOutlined>
                    </div>
                
            </div>
        </div>
    </div>
  )
}
