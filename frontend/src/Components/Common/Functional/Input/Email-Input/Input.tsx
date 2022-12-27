import { InputError } from '../../../../../Components/Common/UI-Dumb/Errors/Input/Input';
import React, { useRef, useState } from 'react'

import isEmail from 'validator/lib/isEmail';

import classes from './Input.module.scss'
import common from '../common/styles/common.module.scss'
import { inputStyles } from '../common/styles/styles';
import { labelStyles } from '../../../../../Global/Styles/label';
import { InputFallback } from '../../../UI-Dumb/Fallbacks/input';
import { BaseInputProps } from '../../../../../Global/Types/Props';

export const EmailInput = ({mutated_obj,prop,css}:BaseInputProps) => {
    const [change , setChange] = useState<string>('')
    const [error, setError] = useState<string>('')
    const _timeout = useRef<number | null>(null)
    const [started_writing,set_is_writing] = useState<boolean>(false)
    const _errorStyles:React.CSSProperties = {
        border:`${error ? '2px solid red' : 'none'}`
    }
    const isRequired = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(started_writing && !change.length ){
            console.log(change)
            setError('required field')
            mutated_obj['error'] = true
        }
    }
    const setEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const _isEmail = value.length < 7 ? value :  isEmail(value)
        setError('')
        mutated_obj['error'] = false
        setChange(value)
            mutated_obj[prop] = value
            if(change.length > 1) set_is_writing(true)
        if(_timeout.current){
            setError('')
            window.clearTimeout(_timeout.current)}
            if(!_isEmail && started_writing && change.length > 7){
                _timeout.current = window.setTimeout(() => {
                    setError('please provide valid email')
                    mutated_obj['error'] = true
                },400)  
            }
    }
  return (
    <div className={common.container}>
        <label style={labelStyles} htmlFor={prop}>{prop}</label>
   <input id={prop} className={classes.input}  style={{..._errorStyles,...inputStyles ,...css}} onBlur={isRequired} onChange={setEmail} value={change} type="email"/>
   {error ? <InputError message={error}></InputError> : <InputFallback></InputFallback>}
    </div>
    
  )
}
