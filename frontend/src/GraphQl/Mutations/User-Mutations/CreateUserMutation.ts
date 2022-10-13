
import React from 'react'

import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`
mutation createUserMutation($user: CreateUserInput!){
    createUser(createUser:$user){
    id
    username
   
    }
  }
`

export function CreateUserMutation() {
    const [createUserMutation, { data, loading, error }] = useMutation(CREATE_USER)
  return {
    createUserMutation,
    error,
    data,
    loading,
  }
}