import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type removePostMutationVariables = Types.Exact<{
  id: Types.Scalars['Float'];
}>;


export type removePostMutation = { __typename?: 'Mutation', removePost: { __typename: 'Post_U', id: string, ownerId: number } };


export const removePostDocument = gql`
    mutation removePost($id: Float!) {
  removePost(postId: $id) {
    id
    ownerId
    __typename
  }
}
    `;
export type removePostMutationFn = Apollo.MutationFunction<removePostMutation, removePostMutationVariables>;

/**
 * __useremovePostMutation__
 *
 * To run a mutation, you first call `useremovePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useremovePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePostMutation, { data, loading, error }] = useremovePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useremovePostMutation(baseOptions?: Apollo.MutationHookOptions<removePostMutation, removePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<removePostMutation, removePostMutationVariables>(removePostDocument, options);
      }
export type removePostMutationHookResult = ReturnType<typeof useremovePostMutation>;
export type removePostMutationResult = Apollo.MutationResult<removePostMutation>;
export type removePostMutationOptions = Apollo.BaseMutationOptions<removePostMutation, removePostMutationVariables>;