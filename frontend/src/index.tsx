import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, from  } from '@apollo/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store'

import { uploadLink, wsLink, httpLink, logContext ,  } from './Apollo-Links/Request-Links'
const root = document.getElementById('root') as HTMLElement


const client = new ApolloClient({
    link: from([logContext ,  httpLink]) ,
    cache: new InMemoryCache(),
    

  })
ReactDOM.createRoot(root).render(
    <BrowserRouter>
    
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
 
  </BrowserRouter>
)
