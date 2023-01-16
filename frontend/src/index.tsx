import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor } from './Redux/Store/Store'
import store from './Redux/Store/Store'
import { httpLink } from './Apollo/Links/Request-Links'
import { retry_Link, errorLink } from './Apollo/Links/Auth-Links'
import { PersistGate } from 'redux-persist/integration/react'
import { MainLoader } from './Components/Common/UI-Dumb/Loaders/main-loader'
import { mergeDeepArray } from '@apollo/client/utilities'
const root = document.getElementById('root') as HTMLElement
// Log any GraphQL errors or network error that occurred
export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      ReplyForPost_U: {
        fields: {
          children: {
            merge(existing=[], incoming) {
                console.log('EXISTING : ' ,existing , 'INCOMING : ' , incoming)
               return [...existing,...incoming]
              },
             read(existing,{canRead}){
                return existing
                ? existing.filter(canRead)
                : [];
             }
          },
        },
      },
    },
  }),
})

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate
        loading={
          <div
            style={{
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              background: 'black',
            }}
          >
            <MainLoader
              css={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
            ></MainLoader>
          </div>
        }
        persistor={persistor}
      ></PersistGate>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </BrowserRouter>
)
