import React, { PropsWithChildren, useState } from 'react'
import classes from './Avatar.module.scss'
import DefaultAvatar from 'assets/DefaultAvatar.png'
type _props = React.HTMLAttributes<HTMLImageElement> &{
    alt?:string,
    src?:string,
    width?:number,
    height?:number
    css?:React.CSSProperties

}

export const Avatar:React.FC<PropsWithChildren<_props>> = ({alt='default Avatar',src=DefaultAvatar,height=50,width=50,css,children,...atr}:_props) => {
    const [anim , playAnim] = useState(false)
  return (
    <div className={classes.imgContainer} > {children}
  <img style={{...css}} onMouseLeave={()=>playAnim(false)} onMouseEnter={()=>playAnim(true)} {...atr}  src={src || DefaultAvatar} alt={alt} className={`${classes.avatar} ${anim ? `${classes.onHover}` : classes.onLeave}`} width={width} height={height}></img>
    </div>
  
  )
}
