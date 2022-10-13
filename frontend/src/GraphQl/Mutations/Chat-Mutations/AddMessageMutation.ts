import React from 'react'

import { gql, useMutation } from '@apollo/client'

const CREATE_MESSAGE = gql`
mutation addMessage($message:CreateMessageInput!){
    addMessage(createMessage:$message){
      message
    }
  }
`
export function AddMessageMutation() {
    const [AddMessageMutation, { data, loading, error }] = useMutation(CREATE_MESSAGE)
  return {
    AddMessageMutation,
    error,
    data,
    loading,
  }
}
