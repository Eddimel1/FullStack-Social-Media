import React, { useRef, useState } from 'react'
import { EmailInput } from '../../../Components/Common/Functional/Input/Email-Input/Input'
import { CommonContainer } from '../../../Components/Common/UI-Dumb/Containers/Centred/CommonContainer'
import classes from './ForgotPassword.module.scss'
import { Public_Instance } from '../../../Rest-Api/Axios/Instances/public-instance'
import { Button } from '../../../Components/Common/UI-Dumb/Buttons/Common'
import { labelStyles } from '../../../Global/Styles/label'

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
    <CommonContainer css={{ width: '50%' }}>
      {!sended && (
        <>
          <div className={classes.title} style={labelStyles}>
            Please provide your email{' '}
          </div>
          <EmailInput
            css={{ width: '70%' }}
            mutated_obj={mutated_obj.current}
            prop="email"
          ></EmailInput>
          <Button
            disabled={sended}
            css={{ width: '100%' }}
            onClick={sendRequest}
          >
            Send Request
          </Button>
        </>
      )}
      {sended && (
        <div className={classes.successMessage}>Please , check your email</div>
      )}
    </CommonContainer>
  )
}
