
import React, { useRef, useState } from 'react'
import { InputError } from '../../../UI-Dumb/Errors/Input/Input'
import { inputStyles } from '../common/styles/styles'
import common from '../common/styles/common.module.scss'
import classes from './Input.module.scss'
import { labelStyles } from '../../../../../Global/Styles/label'

type _props = {
    mutated_obj :Record<any,any>,
    prop:string,
    value_to_validate:string
}
export const ConfirmPassword = ({mutated_obj,prop,value_to_validate}:_props) => {
    const [change , setChange] = useState<string>('')
    const [error, setError] = useState<string>('')
    const _timeout = useRef<number | null>(null)
    const [started_writing,set_is_writing] = useState<boolean>(false)
    const _areTheSame  = change === value_to_validate
    const _errorStyles:React.CSSProperties = {
        border:`${!_areTheSame && started_writing ? '2px solid red' : '2px solid black'}`
    }
    console.log('VALIDATE : ' ,value_to_validate , 'CHANGE : ' , change)
    const isRequired = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(started_writing && !change.length ){
            console.log(change)
            setError('required field')
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
            },500)
            
            
        }
            mutated_obj[prop] = value
            if(change.length > 1) set_is_writing(true)
        if(_timeout.current){
            setError('')
            window.clearTimeout(_timeout.current)
        }

        
         
           
    }
  return (
    <div className={common.container}>
        <label style={labelStyles} htmlFor={prop}>{prop}</label>
   <input id={prop} className={classes.input}  style={{..._errorStyles,...inputStyles}} onBlur={isRequired} onChange={setPassword} value={change} type="password"/>
   {!_areTheSame ? <InputError message={error}></InputError> : null}
   
    </div>
    
  )
}

