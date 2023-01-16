import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetComments_F_Post_U_QueryVariables = Types.Exact<{
  id: Types.Scalars['Float'];
}>;


export type GetComments_F_Post_U_Query = { __typename?: 'Query', findAllCommentsForPost_U: { __typename?: 'FindAllComment_F_Post_U', portion: number, totalCount: number, items: Array<{ __typename?: 'CommentForPost_U', ownerId: number, id: string, text?: string | null, createdAt: any, audio?: { __typename?: 'Audio_F_Comment_F_Post_U', id: string, url: string } | null, image?: { __typename?: 'Image_F_Comment_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Comment_F_Post_U', url: string, id: string } | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null } }> } };


export const GetComments_F_Post_U_Document = gql`
    query GetComments_F_Post_U_($id: Float!) {
  findAllCommentsForPost_U(postId: $id) {
    items {
      audio {
        id
        url
      }
      ownerId
      id
      image {
        id
        url
      }
      video {
        url
        id
      }
      user {
        id
        username
        avatar {
          id
          url
        }
        username
      }
      text
      createdAt
    }
    portion
    totalCount
  }
}
    `;

/**
 * __useGetComments_F_Post_U_Query__
 *
 * To run a query within a React component, call `useGetComments_F_Post_U_Query` and pass it any options that fit your needs.
 * When your component renders, `useGetComments_F_Post_U_Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComments_F_Post_U_Query({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComments_F_Post_U_Query(baseOptions: Apollo.QueryHookOptions<GetComments_F_Post_U_Query, GetComments_F_Post_U_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComments_F_Post_U_Query, GetComments_F_Post_U_QueryVariables>(GetComments_F_Post_U_Document, options);
      }
export function useGetComments_F_Post_U_LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComments_F_Post_U_Query, GetComments_F_Post_U_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComments_F_Post_U_Query, GetComments_F_Post_U_QueryVariables>(GetComments_F_Post_U_Document, options);
        }
export type GetComments_F_Post_U_QueryHookResult = ReturnType<typeof useGetComments_F_Post_U_Query>;
export type GetComments_F_Post_U_LazyQueryHookResult = ReturnType<typeof useGetComments_F_Post_U_LazyQuery>;
export type GetComments_F_Post_U_QueryResult = Apollo.QueryResult<GetComments_F_Post_U_Query, GetComments_F_Post_U_QueryVariables>;