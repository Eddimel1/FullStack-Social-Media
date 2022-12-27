import React, { PropsWithChildren } from 'react'
import classes from './FlexLayout.module.scss'

type _props = {
    children:React.ReactNode | React.ReactNode[]
    direction?:"row" | "column"
    containerStyles?:React.CSSProperties
    styles?: React.CSSProperties | {last?:React.CSSProperties,first?:React.CSSProperties}
    proportion?:string[]

}
const PROPORTION_DEFAULT = '1 1 1'


export const FlexLayout:React.FC<PropsWithChildren<_props>> = ({children,styles,proportion,direction='row',containerStyles}:_props) => {
    
    if(children instanceof Array){
        return(
            
            <div className={classes.container} style={{flexDirection:direction,...containerStyles}}>
            {children.map((node,i)=>{
                    return <div className={classes.flexItem} key={i} style={{flex:proportion?.[i] || PROPORTION_DEFAULT,...styles?.[i]}}>{node}</div>
            })}
            </div>
            
        )
    }
       else {
        return  <div className={classes.container}>{children}</div>
       }
    
  
 
}