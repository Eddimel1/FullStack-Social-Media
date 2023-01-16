import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateCommentForPost_U_MutationVariables = Types.Exact<{
  input: Types.UpdateComment;
}>;


export type UpdateCommentForPost_U_Mutation = { __typename?: 'Mutation', updateCommentForPost_U: { __typename: 'CommentForPost_U', id: string, ownerId: number, text?: string | null, createdAt: any, audio?: { __typename?: 'Audio_F_Comment_F_Post_U', id: string, url: string } | null, image?: { __typename?: 'Image_F_Comment_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Comment_F_Post_U', id: string, url: string } | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null } } };


export const UpdateCommentForPost_U_Document = gql`
    mutation UpdateCommentForPost_U_($input: UpdateComment!) {
  updateCommentForPost_U(updateCommentInput: $input) {
    __typename
    id
    ownerId
    audio {
      id
      url
    }
    image {
      id
      url
    }
    video {
      id
      url
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
}
    `;
export type UpdateCommentForPost_U_MutationFn = Apollo.MutationFunction<UpdateCommentForPost_U_Mutation, UpdateCommentForPost_U_MutationVariables>;

/**
 * __useUpdateCommentForPost_U_Mutation__
 *
 * To run a mutation, you first call `useUpdateCommentForPost_U_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentForPost_U_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentForPostUMutation, { data, loading, error }] = useUpdateCommentForPost_U_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCommentForPost_U_Mutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentForPost_U_Mutation, UpdateCommentForPost_U_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentForPost_U_Mutation, UpdateCommentForPost_U_MutationVariables>(UpdateCommentForPost_U_Document, options);
      }
export type UpdateCommentForPost_U_MutationHookResult = ReturnType<typeof useUpdateCommentForPost_U_Mutation>;
export type UpdateCommentForPost_U_MutationResult = Apollo.MutationResult<UpdateCommentForPost_U_Mutation>;
export type UpdateCommentForPost_U_MutationOptions = Apollo.BaseMutationOptions<UpdateCommentForPost_U_Mutation, UpdateCommentForPost_U_MutationVariables>;