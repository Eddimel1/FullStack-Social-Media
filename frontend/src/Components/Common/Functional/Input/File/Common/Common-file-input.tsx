import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { randomString } from '../../../../../../Global/utility/crypto'
import classes from './Common-file-input.module.scss'
type _props = {
    mutated_obj? :any,
    prop?:string,
    maxSize?:number
    attr?:React.HTMLAttributes<HTMLInputElement>
    done?:any
    children_type?:'icon' | 'text'
    operation_type?:string,
    updateCb?: (file:File,operation_type:string)=>void
}
export const CommonFileInput:React.FC<PropsWithChildren<_props>> = ({mutated_obj,prop,maxSize=1000000,children,done,updateCb,children_type='icon',operation_type,...atr}) => {
    const hiddenRef = useRef()
    const random_id = useRef(randomString(10,'a'))
    const onFileChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        e.stopPropagation()
        try {
            const file = e.target.files[0]
            const url = URL.createObjectURL(file)
                if(mutated_obj && mutated_obj[prop]){
                    mutated_obj[prop]['file'] = file
                    mutated_obj[prop]['local_url'] = url
                    if('operation_type' in mutated_obj[prop]){mutated_obj[prop]['operation_type'] = operation_type}
                    done && done((prev)=>{!prev})
                }
                else if(updateCb) updateCb(file,operation_type)
        }
        catch(e){
            console.log(e)
        }
      
    }
  return (
    <>
       <label className={`${children_type === 'text' ? `${classes.item}` : `${classes.label}`}`} htmlFor={prop || random_id.current}>{children}</label>
    <input {...atr}  onChange={onFileChange} ref={hiddenRef} id={prop || random_id.current} type='file' style={{display:'none'}}>

    </input>
    </>
 
  )
}
