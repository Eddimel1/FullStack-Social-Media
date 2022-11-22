import React from 'react'

import { gql, useMutation } from '@apollo/client'

export const REFRESH_TOKEN = gql`
  mutation refreshToken{
    refreshToken {
      message
    }
  }
`
export function RefreshTokenMutation() {
    const [refreshTokenMutation, { data, loading, error }] = useMutation(REFRESH_TOKEN)
  return {
    refreshTokenMutation,
    error,
    data,
    loading,
  }
}
