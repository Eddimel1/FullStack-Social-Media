import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import { ReplyChildrenFragmentDoc } from './ReplyChildren.fragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FindDescendantsTree_F_Post_U_QueryVariables = Types.Exact<{
  id: Types.Scalars['Float'];
  depth: Types.Scalars['Float'];
}>;


export type FindDescendantsTree_F_Post_U_Query = { __typename?: 'Query', findDescendantsTree_F_Post_U: Array<{ __typename: 'ReplyForPost_U', id: number, ownerId?: number | null, createdAt: any, text?: string | null, children?: Array<{ __typename: 'ReplyForPost_U', id: number, ownerId?: number | null, createdAt: any, text?: string | null, children?: Array<{ __typename: 'ReplyForPost_U', id: number, ownerId?: number | null, createdAt: any, text?: string | null, children?: Array<{ __typename: 'ReplyForPost_U', id: number, ownerId?: number | null, createdAt: any, text?: string | null, children?: Array<{ __typename: 'ReplyForPost_U', id: number, ownerId?: number | null, createdAt: any, text?: string | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null }, receiver: { __typename?: 'UserEntity', username: string, id: number }, image?: { __typename?: 'Image_F_Reply_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Reply_F_Post_U', id: string, url: string } | null, audio?: { __typename?: 'Audio_F_Reply_F_Post_U', id: string, url: string } | null }> | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null }, receiver: { __typename?: 'UserEntity', username: string, id: number }, image?: { __typename?: 'Image_F_Reply_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Reply_F_Post_U', id: string, url: string } | null, audio?: { __typename?: 'Audio_F_Reply_F_Post_U', id: string, url: string } | null }> | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null }, receiver: { __typename?: 'UserEntity', username: string, id: number }, image?: { __typename?: 'Image_F_Reply_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Reply_F_Post_U', id: string, url: string } | null, audio?: { __typename?: 'Audio_F_Reply_F_Post_U', id: string, url: string } | null }> | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null }, receiver: { __typename?: 'UserEntity', username: string, id: number }, image?: { __typename?: 'Image_F_Reply_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Reply_F_Post_U', id: string, url: string } | null, audio?: { __typename?: 'Audio_F_Reply_F_Post_U', id: string, url: string } | null }> | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null }, receiver: { __typename?: 'UserEntity', username: string, id: number }, image?: { __typename?: 'Image_F_Reply_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Reply_F_Post_U', id: string, url: string } | null, audio?: { __typename?: 'Audio_F_Reply_F_Post_U', id: string, url: string } | null }> };


export const FindDescendantsTree_F_Post_U_Document = gql`
    query FindDescendantsTree_F_Post_U_($id: Float!, $depth: Float!) {
  findDescendantsTree_F_Post_U(id: $id, depth: $depth) {
    ...ReplyChildren
    children {
      ...ReplyChildren
      children {
        ...ReplyChildren
      }
      children {
        ...ReplyChildren
        children {
          ...ReplyChildren
          children {
            ...ReplyChildren
          }
        }
      }
    }
  }
}
    ${ReplyChildrenFragmentDoc}`;

/**
 * __useFindDescendantsTree_F_Post_U_Query__
 *
 * To run a query within a React component, call `useFindDescendantsTree_F_Post_U_Query` and pass it any options that fit your needs.
 * When your component renders, `useFindDescendantsTree_F_Post_U_Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDescendantsTree_F_Post_U_Query({
 *   variables: {
 *      id: // value for 'id'
 *      depth: // value for 'depth'
 *   },
 * });
 */
export function useFindDescendantsTree_F_Post_U_Query(baseOptions: Apollo.QueryHookOptions<FindDescendantsTree_F_Post_U_Query, FindDescendantsTree_F_Post_U_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDescendantsTree_F_Post_U_Query, FindDescendantsTree_F_Post_U_QueryVariables>(FindDescendantsTree_F_Post_U_Document, options);
      }
export function useFindDescendantsTree_F_Post_U_LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDescendantsTree_F_Post_U_Query, FindDescendantsTree_F_Post_U_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDescendantsTree_F_Post_U_Query, FindDescendantsTree_F_Post_U_QueryVariables>(FindDescendantsTree_F_Post_U_Document, options);
        }
export type FindDescendantsTree_F_Post_U_QueryHookResult = ReturnType<typeof useFindDescendantsTree_F_Post_U_Query>;
export type FindDescendantsTree_F_Post_U_LazyQueryHookResult = ReturnType<typeof useFindDescendantsTree_F_Post_U_LazyQuery>;
export type FindDescendantsTree_F_Post_U_QueryResult = Apollo.QueryResult<FindDescendantsTree_F_Post_U_Query, FindDescendantsTree_F_Post_U_QueryVariables>;