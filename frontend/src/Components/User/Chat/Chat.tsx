import { GetFreshMessageSub, GET_FRESH_MESSAGE } from '../../../GraphQl/Subscriptions/getMessageSubscription'
import React from 'react'
import { useSubscription } from '@apollo/client'

export default function Chat() {
    const some = GetFreshMessageSub()
    console.log(some)
  return (
    <div>Chat</div>
  )
}
