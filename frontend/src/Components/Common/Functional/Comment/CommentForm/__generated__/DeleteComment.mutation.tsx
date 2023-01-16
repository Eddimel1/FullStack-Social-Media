import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RemoveCommentForPost_U_MutationVariables = Types.Exact<{
  input: Types.SearchComment;
}>;


export type RemoveCommentForPost_U_Mutation = { __typename?: 'Mutation', removeCommentForPost_U: { __typename: 'CommentForPost_U', id: string, ownerId: number } };


export const RemoveCommentForPost_U_Document = gql`
    mutation RemoveCommentForPost_U_($input: SearchComment!) {
  removeCommentForPost_U(searchAllCommentForPost: $input) {
    __typename
    id
    ownerId
  }
}
    `;
export type RemoveCommentForPost_U_MutationFn = Apollo.MutationFunction<RemoveCommentForPost_U_Mutation, RemoveCommentForPost_U_MutationVariables>;

/**
 * __useRemoveCommentForPost_U_Mutation__
 *
 * To run a mutation, you first call `useRemoveCommentForPost_U_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCommentForPost_U_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCommentForPostUMutation, { data, loading, error }] = useRemoveCommentForPost_U_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveCommentForPost_U_Mutation(baseOptions?: Apollo.MutationHookOptions<RemoveCommentForPost_U_Mutation, RemoveCommentForPost_U_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCommentForPost_U_Mutation, RemoveCommentForPost_U_MutationVariables>(RemoveCommentForPost_U_Document, options);
      }
export type RemoveCommentForPost_U_MutationHookResult = ReturnType<typeof useRemoveCommentForPost_U_Mutation>;
export type RemoveCommentForPost_U_MutationResult = Apollo.MutationResult<RemoveCommentForPost_U_Mutation>;
export type RemoveCommentForPost_U_MutationOptions = Apollo.BaseMutationOptions<RemoveCommentForPost_U_Mutation, RemoveCommentForPost_U_MutationVariables>;