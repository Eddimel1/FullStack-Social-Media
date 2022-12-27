import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type updatePostMutationVariables = Types.Exact<{
  input: Types.UpdatePostInput;
}>;


export type updatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post_U', createdAt: any, updatedAt: any, likes: number, id: string, published?: boolean | null, subject?: string | null, ownerId: number, text?: string | null, audio?: { __typename?: 'Audio_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, video?: { __typename?: 'Video_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, image?: { __typename?: 'Image_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, owner: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string, file_name: string } | null } } };


export const updatePostDocument = gql`
    mutation updatePost($input: UpdatePostInput!) {
  updatePost(updatePostInput: $input) {
    createdAt
    updatedAt
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
export type updatePostMutationFn = Apollo.MutationFunction<updatePostMutation, updatePostMutationVariables>;

/**
 * __useupdatePostMutation__
 *
 * To run a mutation, you first call `useupdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useupdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useupdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useupdatePostMutation(baseOptions?: Apollo.MutationHookOptions<updatePostMutation, updatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<updatePostMutation, updatePostMutationVariables>(updatePostDocument, options);
      }
export type updatePostMutationHookResult = ReturnType<typeof useupdatePostMutation>;
export type updatePostMutationResult = Apollo.MutationResult<updatePostMutation>;
export type updatePostMutationOptions = Apollo.BaseMutationOptions<updatePostMutation, updatePostMutationVariables>;