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
  const [error,setError] = useState()
  const [fetch, setFetch] = useState<boolean>(false)
  const [_,force]= useState(false)
  const navigation = useNavigate()
  const dispatch = useAppDispatch()
  const [loading , setLoading] = useState(false)
  const _authState = authState()

  const initialState = { 
    password: '', username: '' ,error:false}
  
  let handlers = {
    get(target, key) {
        
          return target[key]
        
      },
    set(obj,prop,val){
        console.log(prop)
        if(prop === 'error'){
            console.log('rerender')
                obj[prop] = val
                force((prev)=>!prev)
                return true
        }
        return true
    }
 
}

let form= useRef(initialState)
   form = new Proxy<React.MutableRefObject<typeof initialState>>(
    form,
    handlers
  )
 console.log(form)
  useEffect(() => {
    if (fetch) {
       setLoading(true)
      dispatch(
        login_TH({
          variables: {
            input: {
              username: form.current.username,
              password: form.current.password,
            },
          },
        })
      ).then((res)=>{
        if(res.payload){
              setLoading(false)
        }
        else {
            console.log(res)
            setError(res.error.message)
            setLoading(false)
        }
      })
      console.log(_authState)
     
    }
  }, [fetch, setFetch])
  return (
    <div>
      <CommonContainer
        css={{
          width: '50%', padding:'0.5rem',borderRadius:'10px',
        }}
      >
        <div className={classes.error}>{error && error}</div>
        {(loading && <CommonPad></CommonPad>)}
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
            <Button  color='light_blue'>
            <NavLink
              to="/signup"
            >
              SignUp
            </NavLink>
            </Button>
            
            <Button 
            //not working perfectly
            // disabled={form.current.error} 
            css={{marginLeft:'0.3rem'}} color='pink'
              onClick={() => {setFetch((prev)=>!prev);console.log('clicked')}}
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
      {loading ? (
        <MainLoader
          css={{ position: 'absolute', top: '25%', right: '10%' }}
        ></MainLoader>
      ) : null}
    </div>
  )
}
