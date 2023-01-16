import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateReply_F_Post_U_MutationVariables = Types.Exact<{
  input: Types.UpdateReply;
}>;


export type UpdateReply_F_Post_U_Mutation = { __typename?: 'Mutation', updateReplyForPost_U: { __typename: 'ReplyForPost_U', id: number, ownerId?: number | null, parentId?: number | null, createdAt: any, text?: string | null, children?: Array<{ __typename?: 'ReplyForPost_U', id: number }> | null, user: { __typename?: 'UserEntity', username: string, id: number, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null }, receiver: { __typename?: 'UserEntity', id: number, username: string }, image?: { __typename?: 'Image_F_Reply_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Reply_F_Post_U', id: string, url: string } | null, audio?: { __typename?: 'Audio_F_Reply_F_Post_U', id: string, url: string } | null } };


export const UpdateReply_F_Post_U_Document = gql`
    mutation UpdateReply_F_Post_U_($input: UpdateReply!) {
  updateReplyForPost_U(updateReply: $input) {
    id
    ownerId
    parentId
    children {
      id
    }
    user {
      username
      id
      avatar {
        id
        url
      }
    }
    receiver {
      id
      username
    }
    createdAt
    text
    __typename
    image {
      id
      url
    }
    video {
      id
      url
    }
    audio {
      id
      url
    }
  }
}
    `;
export type UpdateReply_F_Post_U_MutationFn = Apollo.MutationFunction<UpdateReply_F_Post_U_Mutation, UpdateReply_F_Post_U_MutationVariables>;

/**
 * __useUpdateReply_F_Post_U_Mutation__
 *
 * To run a mutation, you first call `useUpdateReply_F_Post_U_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReply_F_Post_U_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReplyFPostUMutation, { data, loading, error }] = useUpdateReply_F_Post_U_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReply_F_Post_U_Mutation(baseOptions?: Apollo.MutationHookOptions<UpdateReply_F_Post_U_Mutation, UpdateReply_F_Post_U_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReply_F_Post_U_Mutation, UpdateReply_F_Post_U_MutationVariables>(UpdateReply_F_Post_U_Document, options);
      }
export type UpdateReply_F_Post_U_MutationHookResult = ReturnType<typeof useUpdateReply_F_Post_U_Mutation>;
export type UpdateReply_F_Post_U_MutationResult = Apollo.MutationResult<UpdateReply_F_Post_U_Mutation>;
export type UpdateReply_F_Post_U_MutationOptions = Apollo.BaseMutationOptions<UpdateReply_F_Post_U_Mutation, UpdateReply_F_Post_U_MutationVariables>;