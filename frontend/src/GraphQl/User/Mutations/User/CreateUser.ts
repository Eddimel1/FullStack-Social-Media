
import React from 'react'

import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`
mutation createUserMutation($input: CreateUserInput!){
    createUser(createUser:$input){
    id
    username
   
    }
  }
`

export function CreateUserMutation() {
    const [createUserMutation, { data, loading, error }] = useMutation(CREATE_USER)
  return {
    createUserMutation,
    _error:error,
    _data : data,
    _loading : loading,
  }
}