import React from 'react'

import { gql, useSubscription } from '@apollo/client'

export const GET_FRESH_MESSAGE= gql`
subscription messageAdded {
    messageAdded{
        message
    }
  }
`
export function GetFreshMessageSub() {
    
    // const  { data, loading, error } = useSubscription(GET_FRESH_MESSAGE,{
    //     onSubscriptionData : () => console.log('recieved'),
    //     onSubscriptionComplete : () => console.log('connected to WebSocket Server')
    // })
    const  some = useSubscription(GET_FRESH_MESSAGE,{
        onSubscriptionData : () => console.log('recieved'),
        onSubscriptionComplete : () => console.log('connected to WebSocket Server')
    })
    
  return {
    some
  }
}