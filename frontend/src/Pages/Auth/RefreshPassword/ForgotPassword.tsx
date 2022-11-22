import React, { useRef, useState } from 'react'
import { EmailInput } from '../../../Components/Common/Functional/Input/Email-Input/Input'
import { Container } from '../../../Components/Common/UI-Dumb/Containers/Centred/Centred'
import classes from './ForgotPassword.module.scss'
import { Public_Instance } from '../../../Rest-Api/Axios/Instances/public-instance'

export const RefreshPassword = () => {
  const mutated_obj = useRef<{ email: string }>({ email: '' })
  const [sended, setIsSended] = useState<boolean>(false)
  const sendRequest = async () => {
    const res = await Public_Instance.post('reset/password/request', {
      email: mutated_obj.current.email,
    })
    if (res.data.sended) {
      setIsSended(true)
    }
  }

  return (
    <Container css={{ width: '50%' }}>
      {!sended && (
        <>
          <div className={classes.title}>Please provide your email </div>
          <EmailInput
            mutated_obj={mutated_obj.current}
            prop="email"
          ></EmailInput>
          <button onClick={sendRequest}>Send</button>
        </>
      )}
      {sended && (
        <div className={classes.successMessage}>Please , check your email</div>
      )}
    </Container>
  )
}
