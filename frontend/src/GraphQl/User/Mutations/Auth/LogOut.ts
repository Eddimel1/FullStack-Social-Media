import { gql, useMutation } from '@apollo/client'
import { client } from '../../../..'
import { ClientMutationOptions_GQL } from '../../../../Global/Types/Graphql'

const LOG_OUT = gql`
  mutation logOut {
    logOut {
      message
    }
  }
`

export default function LogOutMutation() {
  const [logoutMutation, { data, loading, error }] = useMutation(LOG_OUT)
  return {
    logoutMutation,
    data,
    loading,
    error,
  }
}


export async function LogOutMutation_CL(options?: ClientMutationOptions_GQL){
    const result = await client.mutate({mutation:LOG_OUT,...options})
    return result
}