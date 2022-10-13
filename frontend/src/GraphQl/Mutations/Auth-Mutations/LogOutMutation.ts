import { gql, useMutation } from '@apollo/client'
import React from 'react'

const LOG_OUT = gql`
  mutation {
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
