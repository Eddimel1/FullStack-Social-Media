import React, { PropsWithChildren } from 'react'
import classes from './NavBar.module.scss'

type _props = {
    children:React.ReactNode | React.ReactNode[]
    styles?: React.CSSProperties[] | {last?:React.CSSProperties,first?:React.CSSProperties}
    proportion?:string[]

}
const PROPORTION_DEFAULT = '1 1 1'


export const NavBarLayOut:React.FC<PropsWithChildren<_props>> = ({children,styles,proportion}:_props) => {
    
    if(children instanceof Array){
        return(
            <>
            <div className={classes.container}>
            {children.map((node,i)=>{
                    return <div className={classes.flexItem} key={i} style={{flex:proportion?.[i] || PROPORTION_DEFAULT,...styles?.[i]}}>{node}</div>
            })}
            </div>
            </>
        )
    }
       else {
        return   <div className={classes.container}>{children}</div>
       }
 
}
