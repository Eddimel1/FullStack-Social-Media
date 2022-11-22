import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, from} from '@apollo/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store'
import { httpLink } from './Apollo/Links/Request-Links'

const root = document.getElementById('root') as HTMLElement
import { onError } from "@apollo/client/link/error";
import { retry_Link, errorLink } from './Apollo/Links/Auth-Links'


// Log any GraphQL errors or network error that occurred


export const client = new ApolloClient({
    link: from([errorLink,httpLink]),
    cache: new InMemoryCache(),
})
ReactDOM.createRoot(root).render(
    <BrowserRouter>
    
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
 
  </BrowserRouter>
)
