import React from 'react'

import { gql, useQuery } from '@apollo/client'

const GET_USER = gql`
query getOneUser ($id: Float!){
    getOneUser(id:$id){
      id
      username
    }
  }
`
export function GetUserQuery(id) {
    const  { data, loading, error } = useQuery(GET_USER,{variables:{id}})
  return {
    error,
    data,
    loading,
  }
}
