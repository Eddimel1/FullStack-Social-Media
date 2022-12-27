import * as Types from '../../../../__generated__/types';

import { gql } from '@apollo/client';
export type ProfilePostSectionFragment = { __typename?: 'UserEntity', posts: Array<{ __typename?: 'Post_U', id: string, ownerId: number, text?: string | null, likes: number, createdAt: any, updatedAt: any, published?: boolean | null, privacy?: string | null, subject?: string | null, owner: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string, file_name: string } | null }, audio?: { __typename?: 'Audio_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, video?: { __typename?: 'Video_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, image?: { __typename?: 'Image_F_Post_U', id: string, url: string, file_name: string, ownerId: number } | null, comments?: Array<{ __typename?: 'CommentForPost_U', id: string }> | null }> };

export const ProfilePostSectionFragmentDoc = gql`
    fragment ProfilePostSection on UserEntity {
  posts {
    id
    ownerId
    owner {
      id
      username
      avatar {
        id
        url
        file_name
      }
    }
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
    image {
      id
      url
      file_name
      ownerId
    }
    comments {
      id
    }
    text
    likes
    createdAt
    updatedAt
    published
    privacy
    subject
  }
}
    `;