import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import { ProfileHeaderFragmentDoc } from '../ProfileHeader/__generated__/ProfileHeader.fragment';
import { ProfilePostSectionFragmentDoc } from '../ProfilePostSection/__generated__/ProfilePostSection.fragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type getUserProfileQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Float']>;
}>;


export type getUserProfileQuery = { __typename?: 'Query', getOneUser: { __typename?: 'getOneUser_O', user: { __typename?: 'UserEntity', username: string, cover?: { __typename?: 'U_Cover_EN', id: string, createdAt: any, updatedAt: any, file_name: string, url: string } | null, avatar?: { __typename?: 'U_Avatar_EN', id: string, createdAt: any, updatedAt: any, file_name: string, url: string } | null, posts: Array<{ __typename?: 'Post_U', id: string, ownerId: number, text?: string | null, likes: number, createdAt: any, updatedAt: any, published?: boolean | null, privacy?: string | null, subject?: string | null, owner: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string, file_name: string } | null }, audio?: { __typename?: 'Audio_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, video?: { __typename?: 'Video_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, image?: { __typename?: 'Image_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, comments?: Array<{ __typename?: 'CommentForPost_U', id: string }> | null }> } } };


export const getUserProfileDocument = gql`
    query getUserProfile($id: Float) {
  getOneUser(id: $id) {
    user {
      ...ProfileHeader
      ...ProfilePostSection
    }
  }
}
    ${ProfileHeaderFragmentDoc}
${ProfilePostSectionFragmentDoc}`;

/**
 * __usegetUserProfileQuery__
 *
 * To run a query within a React component, call `usegetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `usegetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usegetUserProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usegetUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<getUserProfileQuery, getUserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<getUserProfileQuery, getUserProfileQueryVariables>(getUserProfileDocument, options);
      }
export function usegetUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<getUserProfileQuery, getUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<getUserProfileQuery, getUserProfileQueryVariables>(getUserProfileDocument, options);
        }
export type getUserProfileQueryHookResult = ReturnType<typeof usegetUserProfileQuery>;
export type getUserProfileLazyQueryHookResult = ReturnType<typeof usegetUserProfileLazyQuery>;
export type getUserProfileQueryResult = Apollo.QueryResult<getUserProfileQuery, getUserProfileQueryVariables>;