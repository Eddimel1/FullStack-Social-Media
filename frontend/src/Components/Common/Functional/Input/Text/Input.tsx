import React, { useRef, useState } from 'react'
import { InputError } from '../../../../../Components/Common/UI-Dumb/Errors/Input/Input'
import { inputStyles } from '../common/styles/styles'
import classes from './Input.module.scss'
import common from '../common/styles/common.module.scss'
import { labelStyles } from '../../../../../Global/Styles/label'

type _props = {
  mutated_obj: Record<any, any>
  prop: string
  required?: boolean
}
export const  TextInput = ({ mutated_obj, prop, required = false }: _props) => {
  const [change, setChange] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [started_writing, set_is_writing] = useState<boolean>(false)
  const _errorStyles: React.CSSProperties = {
    border: `${error ? '2px solid red' : '2px solid black'}`,
  }
  const isRequired = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (change.length === 0 && started_writing) {
      setError('required field')
    }
  }
  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_is_writing(true)
    setError('')
    const value = e.target.value
    setChange(value)
    mutated_obj[prop] = value
  }
  return (
    <div className={common.container}>
      <label style={labelStyles} htmlFor={prop}>{prop}</label>
      <input
        required={required}
        id={prop}
        className={classes.input}
        style={{..._errorStyles,...inputStyles}}
        onBlur={required ? isRequired : null}
        onChange={setValue}
        value={change}
        type="text"
      />
      {error ? <InputError message={error}></InputError> : null}
    </div>
  )
}
