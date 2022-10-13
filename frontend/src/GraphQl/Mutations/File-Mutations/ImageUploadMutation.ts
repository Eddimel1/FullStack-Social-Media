
import React from 'react'

import { gql, useMutation } from '@apollo/client'

const UPLOAD_IMAGE = gql`
mutation uploadImageMutation($file: Upload!){
    uploadImage(file:$files){
    url
    }
  }
`
export function UploadImageMutation() {
    const [uploadImageMutation, { data, loading, error }] = useMutation(UPLOAD_IMAGE)
  return {
    uploadImageMutation,
    error,
    data,
    loading,
  }
}
