import React from 'react'

import { gql, useMutation } from '@apollo/client'

const CREATE_CHAT = gql`
mutation createChat($chat : CreateChatInput!){
    createChat(createChat:$chat){
      id
    }
  }
`
export function CreateAccMutation() {
    const [createChatMutation, { data, loading, error }] = useMutation(CREATE_CHAT)
  return {
    createChatMutation,
    error,
    data,
    loading,
  }
}
