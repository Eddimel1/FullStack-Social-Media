
import React from 'react'

import { gql, useMutation } from '@apollo/client'

const UPDATE_POST = gql`
mutation  updatePostMutation($input: UpdatePostInput!){
    updatePost(updatePostInput:$input){
    id
    text
    likes
    }
  }
`

export function UpdatePostMutation() {
    const [updatePostMutation, { data, loading, error }] = useMutation(UPDATE_POST)
  return {
    updatePostMutation,
    error,
    data,
    loading,
  }
}
