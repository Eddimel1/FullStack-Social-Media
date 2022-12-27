import { ApolloLink, fromPromise } from '@apollo/client'
import { client } from '../../index'
import { REFRESH_TOKEN } from '../../GraphQl/User/Mutations/Auth/RefreshToken'
import { RetryLink } from '@apollo/client/link/retry'

import { getEnv } from '../../../envs/envHelper'
import { Protected_Instance } from '../../../src/Rest-Api/Axios/Instances/protected.instance'
import { onError } from '@apollo/client/link/error'
import {} from 'apollo-link'
export const retry_Link = new RetryLink()
// const _erroLink = onError(
//   ({ graphQLErrors, networkError, operation, forward }) =>{
//     let refreshed:boolean = false
//     const refresh = async () => {
//         return Protected_Instance.post(process.env.GRAPHQL_SERVER_URL!, {
//           operationName: 'refreshToken',
//           query: `mutation refreshToken{
//                       refreshToken{
//                         message
//                       }
//                     }`,
//           variables: {},
//         })
//       }
//       if (graphQLErrors) {
//         for (const err of graphQLErrors) {
//           console.log(err)
//           console.log(err.extensions.code)
//           switch (err.extensions.code) {
//             case 'UNAUTHENTICATED':
              
//               const response = await refresh()
//                 .then((res) => refreshed=true)
//                 .catch((e) => console.log(e))
//           }
          
//           return forward(operation)
//         }
//       }

//   }
    
// )

export const refreshTokenIf401 = async () => {
    
          const res = () => {
            return Protected_Instance.post(process.env.GRAPHQL_SERVER_URL, {
              operationName: 'refreshToken',
              query: `mutation refreshToken{
                          refreshToken{
                            message
                          }
                        }`,
              variables: {},
            })
          }
          const result = await res()
          console.log(result)
          return result
      
}

export const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          switch (err.extensions.code) {
            case 'UNAUTHENTICATED':
              // error code is set to UNAUTHENTICATED
              // when AuthenticationError thrown in resolver
  
              return fromPromise(
                refreshTokenIf401().catch(error => {
                  // Handle token refresh errors e.g clear stored tokens, redirect to login, ...
                  return;
                })
              ).filter(value => Boolean(value))
               .flatMap(accessToken => {
                
                // modify the operation context with a new token
               
  
                // retry the request, returning the new observable
                return forward(operation);
              });
          }
        }
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
        // if you would also like to retry automatically on
        // network errors, we recommend that you use
        // apollo-link-retry
      }
    }
  );
