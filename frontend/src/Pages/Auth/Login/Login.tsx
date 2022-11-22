import React from 'react'
import { useRef } from 'react'
import { getEnv } from '../../../../envs/envHelper'
import classes from './Login.module.scss'

import { EmailInput } from '../../../Components/Common/Functional/Input/Email-Input/Input'
import { PasswordInput } from '../../../Components/Common/Functional/Input/Password/Input'
import { CreateUserMutation } from '../../../GraphQl/User/Mutations/User/CreateUser'
import { Container } from '../../../Components/Common/UI-Dumb/Containers/Centred/Centred'
import { NavLink } from 'react-router-dom'
import { LogInMutation } from '../../../GraphQl/User/Mutations/Auth/LogIn'
import { TextInput } from '../../../Components/Common/Functional/Input/Text/Input'
import { buttonStyles } from '../../../Global/Styles/button'

export default function Login() {
  const { loginMutation, data, error, loading } = LogInMutation()
  console.log(process.env.BASE_URL)
  const form = useRef({ password: '', username: '' })
  console.log(form.current)
  console.log(data)
  //log in by username instead of email
  return (
    <div>
      <Container
        css={{ width: '50%'}}
      >
        <div className={classes.container}>
        <TextInput
          mutated_obj={form.current}
          prop="username"
          required={true}
        ></TextInput>
        <PasswordInput
          confirm={true}
          mutated_obj={form.current}
          prop="password"
        ></PasswordInput>
        </div>
        
        <div className={classes.bottomContainer}>
          <div className={classes.buttons}>
            <NavLink className={classes.signUp} style={buttonStyles} to="/signup">
              SignUp
            </NavLink>
            <NavLink
              onClick={() =>
                loginMutation({
                  variables: {
                    input: {
                      username: form.current.username,
                      password: form.current.password,
                    },
                  },
                })
              }
              className={classes.logIn} style={buttonStyles}
              to="/signup"
            >
              Login
            </NavLink>
          </div>
          <a
            style={{ color: 'black' }}
            href={`${process.env.BASE_URL}reset-password`}
          >
            forgot password?
          </a>
        </div>
      </Container>
    </div>
  )
}
