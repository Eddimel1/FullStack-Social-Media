import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateCommentForPost_U_MutationVariables = Types.Exact<{
  input: Types.CreateComment;
}>;


export type CreateCommentForPost_U_Mutation = { __typename?: 'Mutation', createCommentForPost_U: { __typename: 'CommentForPost_U', ownerId: number, id: string, text?: string | null, createdAt: any, audio?: { __typename?: 'Audio_F_Comment_F_Post_U', id: string, url: string } | null, image?: { __typename?: 'Image_F_Comment_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Comment_F_Post_U', id: string, url: string } | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null } } };


export const CreateCommentForPost_U_Document = gql`
    mutation CreateCommentForPost_U_($input: CreateComment!) {
  createCommentForPost_U(createCommentInput: $input) {
    __typename
    ownerId
    id
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
export type CreateCommentForPost_U_MutationFn = Apollo.MutationFunction<CreateCommentForPost_U_Mutation, CreateCommentForPost_U_MutationVariables>;

/**
 * __useCreateCommentForPost_U_Mutation__
 *
 * To run a mutation, you first call `useCreateCommentForPost_U_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentForPost_U_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentForPostUMutation, { data, loading, error }] = useCreateCommentForPost_U_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommentForPost_U_Mutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentForPost_U_Mutation, CreateCommentForPost_U_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentForPost_U_Mutation, CreateCommentForPost_U_MutationVariables>(CreateCommentForPost_U_Document, options);
      }
export type CreateCommentForPost_U_MutationHookResult = ReturnType<typeof useCreateCommentForPost_U_Mutation>;
export type CreateCommentForPost_U_MutationResult = Apollo.MutationResult<CreateCommentForPost_U_Mutation>;
export type CreateCommentForPost_U_MutationOptions = Apollo.BaseMutationOptions<CreateCommentForPost_U_Mutation, CreateCommentForPost_U_MutationVariables>;