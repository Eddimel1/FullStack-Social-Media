import React from 'react'

import { gql, useMutation} from '@apollo/client'

const LOG_IN = gql`
  mutation login($user: LoginUserInput!) {
    login(loginUserInput: $user) {
      username
      id
    }
  }
`
export function LogInMutation() {
  const [loginMutation,{ error, data, loading }] = useMutation(LOG_IN)
  return {
    loginMutation,
    error,
    data,
    loading,
  }
}
