import React from 'react'

import { gql, useMutation } from '@apollo/client'

const CREATE_ACC = gql`
  mutation create_acc($user: LoginUserInput!) {
    login(loginUserInput: $user) {
      username
      id
    }
  }
`
export function CreateAccMutation() {
    const [createAccMutation, { data, loading, error }] = useMutation(CREATE_ACC)
  return {
    createAccMutation,
    error,
    data,
    loading,
  }
}
