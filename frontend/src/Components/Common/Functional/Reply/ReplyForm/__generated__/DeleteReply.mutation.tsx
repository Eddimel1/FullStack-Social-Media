import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type DeleteReply_F_Post_U_MutationVariables = Types.Exact<{
  input: Types.Scalars['Float'];
}>;


export type DeleteReply_F_Post_U_Mutation = { __typename?: 'Mutation', deleteReplyForPost_U: { __typename: 'ReplyForPost_U', id: number } };


export const DeleteReply_F_Post_U_Document = gql`
    mutation DeleteReply_F_Post_U_($input: Float!) {
  deleteReplyForPost_U(id: $input) {
    id
    __typename
  }
}
    `;
export type DeleteReply_F_Post_U_MutationFn = Apollo.MutationFunction<DeleteReply_F_Post_U_Mutation, DeleteReply_F_Post_U_MutationVariables>;

/**
 * __useDeleteReply_F_Post_U_Mutation__
 *
 * To run a mutation, you first call `useDeleteReply_F_Post_U_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReply_F_Post_U_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReplyFPostUMutation, { data, loading, error }] = useDeleteReply_F_Post_U_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteReply_F_Post_U_Mutation(baseOptions?: Apollo.MutationHookOptions<DeleteReply_F_Post_U_Mutation, DeleteReply_F_Post_U_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReply_F_Post_U_Mutation, DeleteReply_F_Post_U_MutationVariables>(DeleteReply_F_Post_U_Document, options);
      }
export type DeleteReply_F_Post_U_MutationHookResult = ReturnType<typeof useDeleteReply_F_Post_U_Mutation>;
export type DeleteReply_F_Post_U_MutationResult = Apollo.MutationResult<DeleteReply_F_Post_U_Mutation>;
export type DeleteReply_F_Post_U_MutationOptions = Apollo.BaseMutationOptions<DeleteReply_F_Post_U_Mutation, DeleteReply_F_Post_U_MutationVariables>;