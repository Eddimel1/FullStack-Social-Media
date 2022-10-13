
import React from 'react'

import { gql, useMutation } from '@apollo/client'

const UPDATE_POST = gql`
mutation  updatePostMutation($updateData: UpdatePostInput!){
    updatePost(updatePostInput:$updateData){
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