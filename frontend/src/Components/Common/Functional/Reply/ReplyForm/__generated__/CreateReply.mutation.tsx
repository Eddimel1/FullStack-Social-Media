import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateReply_F_Post_U_MutationVariables = Types.Exact<{
  input: Types.CreateReply;
}>;


export type CreateReply_F_Post_U_Mutation = { __typename?: 'Mutation', createReplyForPost_U: { __typename: 'ReplyForPost_U', id: number, ownerId?: number | null, parentId?: number | null, createdAt: any, text?: string | null, children?: Array<{ __typename?: 'ReplyForPost_U', id: number }> | null, user: { __typename?: 'UserEntity', username: string, id: number, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null }, receiver: { __typename?: 'UserEntity', id: number, username: string }, image?: { __typename?: 'Image_F_Reply_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Reply_F_Post_U', id: string, url: string } | null, audio?: { __typename?: 'Audio_F_Reply_F_Post_U', id: string, url: string } | null } };


export const CreateReply_F_Post_U_Document = gql`
    mutation CreateReply_F_Post_U_($input: CreateReply!) {
  createReplyForPost_U(CreateReply: $input) {
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
export type CreateReply_F_Post_U_MutationFn = Apollo.MutationFunction<CreateReply_F_Post_U_Mutation, CreateReply_F_Post_U_MutationVariables>;

/**
 * __useCreateReply_F_Post_U_Mutation__
 *
 * To run a mutation, you first call `useCreateReply_F_Post_U_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReply_F_Post_U_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReplyFPostUMutation, { data, loading, error }] = useCreateReply_F_Post_U_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReply_F_Post_U_Mutation(baseOptions?: Apollo.MutationHookOptions<CreateReply_F_Post_U_Mutation, CreateReply_F_Post_U_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReply_F_Post_U_Mutation, CreateReply_F_Post_U_MutationVariables>(CreateReply_F_Post_U_Document, options);
      }
export type CreateReply_F_Post_U_MutationHookResult = ReturnType<typeof useCreateReply_F_Post_U_Mutation>;
export type CreateReply_F_Post_U_MutationResult = Apollo.MutationResult<CreateReply_F_Post_U_Mutation>;
export type CreateReply_F_Post_U_MutationOptions = Apollo.BaseMutationOptions<CreateReply_F_Post_U_Mutation, CreateReply_F_Post_U_MutationVariables>;