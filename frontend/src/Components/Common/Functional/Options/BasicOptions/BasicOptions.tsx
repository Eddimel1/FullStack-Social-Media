import React, { useState } from 'react'
import { BaseInputProps } from '../../../../../Global/Types/Props'
import classes from './BasicOptions.module.scss'

type _props = BaseInputProps &{
options:{values:string[],label_message:string , required?:boolean}
}
export const BasicOptions = ({mutated_obj,prop,options}:_props) => {

    const [change , setChange] = useState<string>('man')
    const changeHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setChange(e.target.value)
        mutated_obj[prop] = e.target.value

    }
    
  return (
    <>
    <div className={classes.container}>
    <label className={classes._label} htmlFor='_select'>{options.label_message}</label>
    <select className={classes._select} value={change} onChange={changeHandler} id={'_select'} required={options.required}>
        {options.values.map((value,i)=>{
            return (
            <option  value={value}>
                {value}
            </option>)
        })}
    </select>
    </div>
   
    </>
   
  )
}
