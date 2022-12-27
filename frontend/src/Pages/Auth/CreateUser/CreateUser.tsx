import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ConfirmPassword } from '../../../Components/Common/Functional/Input/Confirm-Password/Input'
import { EmailInput } from '../../../Components/Common/Functional/Input/Email-Input/Input'
import { PasswordInput } from '../../../Components/Common/Functional/Input/Password/Input'
import { TextInput } from '../../../Components/Common/Functional/Input/Text/Input'
import { BasicOptions } from '../../../Components/Common/Functional/Options/BasicOptions/BasicOptions'
import { Button } from '../../../Components/Common/UI-Dumb/Buttons/Common'
import { CommonContainer } from '../../../Components/Common/UI-Dumb/Containers/Centred/CommonContainer'
import { DatePicker } from '../../../Components/Common/UI-Dumb/Inputs/Date-Picker'
import { MainLoader } from '../../../Components/Common/UI-Dumb/Loaders/main-loader'
import { CommonPad } from '../../../Components/Common/UI-Dumb/pads/form'
import { CreateUserMutation } from '../../../GraphQl/User/Mutations/User/CreateUser'
import classes from './CreateUser.module.scss'

type _initial = {
  error: boolean
  errors: string[]
  username: string
  email: string
  password: ''
  confirm_password: string
  birthDate: string
  country: string
  sex: 'man' | 'woman'
}
const _initial: _initial = {
  error: false,
  errors: [],
  username: '',
  email: '',
  password: '',
  confirm_password: '',
  birthDate: '',
  country: '',
  sex: 'man',
}

export const SignUp = () => {
  const { createUserMutation, _data, _loading, _error } = CreateUserMutation()
  const [redirecting, setRedirecting] = useState<boolean>(false)
  const navigation = useNavigate()
  const _set_handler = (obj: Record<any, any>, prop: string, new_val: any) => {
    if (prop === 'error') {
      console.log(prop)
      setError(new_val)
      obj[prop] = new_val
      return true
    } else if (prop !== 'error') {
      console.log(prop)
      obj[prop] = new_val
      return true
    }
  }
  useEffect(() => {
    if (_data && !_error && !_loading) {
      setRedirecting(true)
      setTimeout(() => {
        navigation('/login')
      }, 3500)
    }
  }, [_data])
  const _proxy = new Proxy<_initial>(_initial, { set: _set_handler })
  const form = useRef<_initial>(_proxy)
  const [error, setError] = useState<boolean>(false)
  console.log(error)
  return (
    <>
      {!redirecting && (
        <CommonContainer css={{ width: '30%' }}>
          {_loading && <CommonPad></CommonPad>}
          <TextInput
            mutated_obj={form.current}
            prop="username"
            required
          ></TextInput>
          <EmailInput mutated_obj={form.current} prop="email"></EmailInput>
          <PasswordInput
            mutated_obj={form.current}
            prop="password"
          ></PasswordInput>
          <ConfirmPassword
            mutated_obj={form.current}
            prop="confirm_password"
            value_to_validate={form.current.password}
          ></ConfirmPassword>
          <TextInput
            required
            mutated_obj={form.current}
            prop="country"
          ></TextInput>

          <div className={classes.bottom}>
            <BasicOptions
              mutated_obj={form.current}
              prop="birthDate"
              options={{
                label_message: 'Choose your sex',
                values: ['man', 'woman'],
                required: true,
              }}
            ></BasicOptions>
            <DatePicker
              mutated_obj={form.current}
              prop="birthDate"
            ></DatePicker>
            <Button
              css={{ marginTop: '2rem', height: '30px' }}
              disabled={error}
              onClick={() => {
                const { confirm_password, error, errors, ...rest } =
                  form.current
                createUserMutation({ variables: { input: { ...rest } } })
              }}
              options={{ '--hover_color': 'grey' }}
            >
              <span style={{ marginLeft: '1rem' }}>Create Account</span>
            </Button>
          </div>
        </CommonContainer>
      )}

      {_loading ? (
        <MainLoader
          css={{ position: 'absolute', top: '25%', right: '10%' }}
        ></MainLoader>
      ) : null}
      {redirecting && (
        <div className={classes.successMessage}>
          Account is created successfully , You are going to be redirected to
          the log in page...
        </div>
      )}
    </>
  )
}
