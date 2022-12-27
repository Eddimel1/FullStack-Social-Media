import React from 'react'
import { ApolloCache, DefaultContext, gql, OperationVariables, useMutation } from '@apollo/client'
import { client } from '../../../..'
import { ClientMutationOptions_GQL, HookMutationOptions_GQL } from '../../../../Global/Types/Graphql'

const LOG_IN = gql`
  mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      username
      id
      role
      
    }
  }
`
export function LogInMutation_H(options?: HookMutationOptions_GQL) {
  const [loginMutation,{ error, data, loading }] = useMutation(LOG_IN,{...options})

  return {
    loginMutation,
    _error:error,
    _data:data,
    _loading:loading,
  }
}

export async function LogInMutation_CL(options?: ClientMutationOptions_GQL){
        const result = await client.mutate({mutation:LOG_IN,...options})
        return result
}
