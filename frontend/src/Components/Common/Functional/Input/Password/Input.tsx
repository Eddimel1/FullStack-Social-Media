import { InputError } from '../../../UI-Dumb/Errors/Input/Input'
import React, { useRef, useState } from 'react'
import isStrongPassword from 'validator/lib/isStrongPassword'
import classes from './Input.module.scss'
import common from '../common/styles/common.module.scss'
import { inputStyles } from '../common/styles/styles'
import { labelStyles } from '../../../../../Global/Styles/label'
import { InputFallback } from '../../../UI-Dumb/Fallbacks/input'

type _props = {
  mutated_obj: Record<any, any>
  prop: string,

}

export const PasswordInput = ({ mutated_obj, prop }: _props) => {
  const [change, setChange] = useState<string>('')
  const [error, setError] = useState<string>('')
  const _timeout = useRef<number | null>(null)
  const [started_writing, set_is_writing] = useState<boolean>(false)
  const _errorStyles: React.CSSProperties = {
    border: `${error ? '2px solid red' : 'none'}`,
  }
 
  const isRequired = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (started_writing && !change.length) {
      setError('required field')
      mutated_obj['error'] = true
    }
  }
  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(mutated_obj)
    const value = e.target.value
    const _isStrong = value.length < 7 ? value : isStrongPassword(value)
    setError('')
    mutated_obj['error'] = false
    setChange(value)
    mutated_obj[prop] = value
    if(change.length < 7) mutated_obj['error'] = true
    if (change.length > 1) set_is_writing(true)
    if (_timeout.current) {
      setError('')
      window.clearTimeout(_timeout.current)
    }
    if (!_isStrong && started_writing && change.length > 7) {
      _timeout.current = window.setTimeout(() => {
        setError(
          'Your password must be have at least 8 characters long , 1 uppercase character , 1 lowercase character and 1 number'
        )
        mutated_obj['error'] = true
      }, 400)
    }
  }

  return (
    <div className={common.container}>
        <label style={labelStyles} htmlFor={prop}>{prop}</label>
      <input
      
      id={prop}
        className={classes.input}
        style={{..._errorStyles,...inputStyles}}
        onBlur={isRequired}
        onChange={setPassword}
        value={change}
        type="password"
      />
      {error ? <InputError message={error}></InputError> : <InputFallback></InputFallback>}
    </div>
   
  )
}
