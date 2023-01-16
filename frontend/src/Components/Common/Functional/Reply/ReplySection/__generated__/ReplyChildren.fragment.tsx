import * as Types from '../../../../../../__generated__/types';

import { gql } from '@apollo/client';
export type ReplyChildrenFragment = { __typename: 'ReplyForPost_U', id: number, ownerId?: number | null, createdAt: any, text?: string | null, user: { __typename?: 'UserEntity', id: number, username: string, avatar?: { __typename?: 'U_Avatar_EN', id: string, url: string } | null }, receiver: { __typename?: 'UserEntity', username: string, id: number }, image?: { __typename?: 'Image_F_Reply_F_Post_U', id: string, url: string } | null, video?: { __typename?: 'Video_F_Reply_F_Post_U', id: string, url: string } | null, audio?: { __typename?: 'Audio_F_Reply_F_Post_U', id: string, url: string } | null };

export const ReplyChildrenFragmentDoc = gql`
    fragment ReplyChildren on ReplyForPost_U {
  id
  ownerId
  user {
    id
    username
    id
    avatar {
      id
      url
    }
  }
  receiver {
    username
    id
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
    `;