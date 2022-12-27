import { useEffect, useState } from 'react'
import { useRef } from 'react'
import classes from './Login.module.scss'
import { PasswordInput } from '../../../Components/Common/Functional/Input/Password/Input'
import { CommonContainer } from '../../../Components/Common/UI-Dumb/Containers/Centred/CommonContainer'
import { NavLink, useNavigate } from 'react-router-dom'
import { LogInMutation_H } from '../../../GraphQl/User/Mutations/Auth/LogIn'
import { TextInput } from '../../../Components/Common/Functional/Input/Text/Input'
import { CommonPad } from '../../../Components/Common/UI-Dumb/pads/form'
import { MainLoader } from '../../../Components/Common/UI-Dumb/Loaders/main-loader'
import { Label } from '../../../Components/Common/UI-Dumb/Labels/BaseLabel/BaseLabel'
import { useAppDispatch } from '../../../Redux/Store/Store'
import { login_TH } from '../../../Redux/Thunks/Auth/LogIn'
import { authState } from '../../../Redux/Selectors/selectors'
import { Button } from '../../../Components/Common/UI-Dumb/Buttons/Common'

export default function Login() {
  const { loginMutation, _data, _error, _loading } = LogInMutation_H()
  const [redirecting, setIsRedirecting] = useState<boolean>(false)
  const [fetch, setFetch] = useState<boolean>(false)
  const navigation = useNavigate()
  const dispatch = useAppDispatch()
  const _authState = authState()
  const form = useRef({ password: '', username: '' })
  useEffect(() => {
    if (fetch) {
      dispatch(
        login_TH({
          variables: {
            input: {
              username: form.current.username,
              password: form.current.password,
            },
          },
        })
      )
      console.log(_authState)
      setIsRedirecting(true)
      setTimeout(() => {
        navigation('/')
      }, 2000)
    }
  }, [fetch, setFetch])
  return (
    <div>
      <CommonContainer
        css={{
          width: '50%', padding:'0.5rem',borderRadius:'10px',
          border: `${_data && !_error ? '2px solid green' : '2px solid black'}`,
          boxShadow: `${_data && !_error ? '0px 0px 5px green' : 'none'}`,
        }}
      >
        {_authState.loading || (redirecting && <CommonPad></CommonPad>)}
        <div className={classes.container}>
          <TextInput
            mutated_obj={form.current}
            prop="username"
            required={true}
          ></TextInput>
          <div style={{marginTop:'1rem'}}>
          <PasswordInput
            mutated_obj={form.current}
            prop="password"
          ></PasswordInput>

          </div>
          
        </div>

        <div className={classes.bottomContainer}>
          <div className={classes.buttons}>
            <Button color='light_blue'>
            <NavLink
              to="/signup"
            >
              SignUp
            </NavLink>
            </Button>
            
            <Button css={{marginLeft:'0.3rem'}} color='pink'
              onClick={() => setFetch(true)}
            >
              Login
            </Button>
          </div>
          <Label  css={{ margin: '0 0 1rem 1rem' }}>
            <a  href={`${process.env.BASE_URL}reset-password`}>
              forgot password?
            </a>
          </Label>
        </div>
      </CommonContainer>
      {_loading || redirecting ? (
        <MainLoader
          css={{ position: 'absolute', top: '25%', right: '10%' }}
        ></MainLoader>
      ) : null}
    </div>
  )
}
