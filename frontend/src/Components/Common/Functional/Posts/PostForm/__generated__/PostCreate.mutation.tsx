import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type createPostMutationVariables = Types.Exact<{
  input: Types.CreatePostInput;
}>;


export type createPostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post_U', updatedAt: any, createdAt: any, likes: number, id: string, published?: boolean | null, subject?: string | null, ownerId: number, text?: string | null, audio?: { __typename?: 'Audio_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, video?: { __typename?: 'Video_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, image?: { __typename?: 'Image_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, owner: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string, file_name: string } | null } } };


export const createPostDocument = gql`
    mutation createPost($input: CreatePostInput!) {
  createPost(createPostInput: $input) {
    updatedAt
    createdAt
    likes
    id
    published
    subject
    ownerId
    audio {
      id
      url
      file_name
      ownerId
    }
    video {
      id
      url
      file_name
      ownerId
    }
    text
    image {
      id
      url
      file_name
      ownerId
    }
    likes
    owner {
      id
      username
      avatar {
        id
        url
        file_name
      }
    }
  }
}
    `;
export type createPostMutationFn = Apollo.MutationFunction<createPostMutation, createPostMutationVariables>;

/**
 * __usecreatePostMutation__
 *
 * To run a mutation, you first call `usecreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usecreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = usecreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usecreatePostMutation(baseOptions?: Apollo.MutationHookOptions<createPostMutation, createPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<createPostMutation, createPostMutationVariables>(createPostDocument, options);
      }
export type createPostMutationHookResult = ReturnType<typeof usecreatePostMutation>;
export type createPostMutationResult = Apollo.MutationResult<createPostMutation>;
export type createPostMutationOptions = Apollo.BaseMutationOptions<createPostMutation, createPostMutationVariables>;