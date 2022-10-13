import { HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createUploadLink } from "apollo-upload-client";
import { createClient } from "graphql-ws";
import { ApolloLink } from '@apollo/client';

//get url from env
export const uploadLink = createUploadLink({ 
    
uri: "http://localhost:5000/graphql" })
export const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql',
    credentials:'include'
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': '*',
    //   }
  });
  
  export const wsLink = new GraphQLWsLink(
    createClient({
      url: 'ws://localhost:5000/graphql',
      retryAttempts:5,

    }),
  )
 

export const logContext = new ApolloLink((operation, forward) => {
 console.log(operation)
  return forward(operation);
})