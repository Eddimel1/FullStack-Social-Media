
import React, { useRef, useState } from 'react'
import { InputError } from '../../../UI-Dumb/Errors/Input/Input'
import { inputStyles } from '../common/styles/styles'
import common from '../common/styles/common.module.scss'
import classes from './Input.module.scss'
import { labelStyles } from '../../../../../Global/Styles/label'
import {InputFallback } from '../../../UI-Dumb/Fallbacks/input'
import { BaseInputProps } from '../../../../../Global/Types/Props'

type _props = BaseInputProps &{
    value_to_validate:string,
    confirmPasswordCss?:React.CSSProperties
}
export const ConfirmPassword = ({mutated_obj,prop,value_to_validate,confirmPasswordCss}:_props) => {
    const [change , setChange] = useState<string>('')
    const [error, setError] = useState<string>('')
    const _timeout = useRef<number | null>(null)
    const [started_writing,set_is_writing] = useState<boolean>(false)
    const _areTheSame  = change === value_to_validate
    const _errorStyles:React.CSSProperties = {
        border:`${!_areTheSame && started_writing ? '2px solid red' : 'none'}`
    }
    console.log('VALIDATE : ' ,value_to_validate , 'CHANGE : ' , change)
    const isRequired = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(started_writing && !change.length ){
            console.log(change)
            setError('required field')
            mutated_obj['error'] = true
        }
    }
    const setPassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setError('')
        setChange(value)
        if(!_areTheSame){
            console.log(value_to_validate , change)
            window.setTimeout(()=>{
                setError('Passwords do not match')
                mutated_obj['error'] = true
            },500)
 
        }
            mutated_obj[prop] = value
            if(change.length > 1) set_is_writing(true)
        if(_timeout.current){
            setError('')
            mutated_obj['error'] = false
            window.clearTimeout(_timeout.current)
        }   
    }
  return (
    <div className={common.container}>
        <label style={labelStyles} htmlFor={prop}>{prop}</label>
   <input id={prop} className={classes.input}  style={{..._errorStyles,...inputStyles,...confirmPasswordCss}} onBlur={isRequired} onChange={setPassword} value={change} type="password"/>
   {!_areTheSame ? <InputError message={error}></InputError> : <InputFallback></InputFallback>}
   
    </div>
    
  )
}

