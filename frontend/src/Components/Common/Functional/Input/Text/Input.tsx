import React, { useRef, useState } from 'react'
import { InputError } from '../../../../../Components/Common/UI-Dumb/Errors/Input/Input'
import { inputStyles } from '../common/styles/styles'
import classes from './Input.module.scss'
import common from '../common/styles/common.module.scss'
import { labelStyles } from '../../../../../Global/Styles/label'
import { InputFallback } from '../../../UI-Dumb/Fallbacks/input'
import { BaseInputProps } from '../../../../../Global/Types/Props'

type _props = BaseInputProps & {required?:boolean,title?:boolean}
export const TextInput = ({ mutated_obj, prop, required = false,placeholder , css,label=true , title = true }: _props) => {
  const [change, setChange] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [started_writing, set_is_writing] = useState<boolean>(false)
  const _errorStyles: React.CSSProperties = {
    border: `${error ? '2px solid red' : 'none'}`,
  }
  const isRequired = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (change.length === 0 && started_writing) {
      setError('required field')
      mutated_obj['error'] = true
    }
  }
  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    set_is_writing(true)
    setError('')
    mutated_obj['error'] = false
    setChange(value)
    mutated_obj[prop] = value
  }
  
  return (
    <div className={common.container}>
     { label &&  <label style={{...labelStyles}} htmlFor={prop}>
        {title && prop}
      </label>}
      <input
      placeholder={placeholder}
        required={required}
        id={prop}
        className={classes.input}
        style={{ ..._errorStyles, ...inputStyles,...css }}
        onBlur={required ? isRequired : null}
        onChange={setValue}
        value={change}

      />
      {error ? (
        <InputError message={error}></InputError>
      ) : (
        <InputFallback></InputFallback>
      )}
    </div>
  )
}
