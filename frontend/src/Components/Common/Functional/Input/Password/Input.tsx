import { InputError } from '../../../UI-Dumb/Errors/Input/Input'
import React, { useRef, useState } from 'react'
import isStrongPassword from 'validator/lib/isStrongPassword'
import classes from './Input.module.scss'
import common from '../common/styles/common.module.scss'
import { ConfirmPassword } from '../Confirm-Password/Input'
import { inputStyles } from '../common/styles/styles'
import { labelStyles } from '../../../../../Global/Styles/label'

type _props = {
  mutated_obj: Record<any, any>
  prop: string,
  confirm?:boolean
}
export const PasswordInput = ({ mutated_obj, prop,confirm }: _props) => {
  const [change, setChange] = useState<string>('')
  const [error, setError] = useState<string>('')
  const _timeout = useRef<number | null>(null)
  const [started_writing, set_is_writing] = useState<boolean>(false)
  const _errorStyles: React.CSSProperties = {
    border: `${error ? '2px solid red' : '2px solid black'}`,
  }
  const isRequired = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (started_writing && !change.length) {
      console.log(change)
      setError('required field')
    }
  }
  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const _isStrong = value.length < 7 ? value : isStrongPassword(value)
    setError('')
    setChange(value)
    mutated_obj[prop] = value
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
      {error ? <InputError message={error}></InputError> : null}
      {confirm ? <ConfirmPassword mutated_obj={mutated_obj} prop='confirm' value_to_validate={change}></ConfirmPassword> : null}
    </div>
   
  )
}
