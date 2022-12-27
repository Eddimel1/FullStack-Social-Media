import * as Types from '../../../../__generated__/types';

import { gql } from '@apollo/client';
export type ProfileHeaderFragment = { __typename?: 'UserEntity', username: string, cover?: { __typename?: 'U_Cover_EN', id: string, createdAt: any, updatedAt: any, file_name: string, url: string } | null, avatar?: { __typename?: 'U_Avatar_EN', id: string, createdAt: any, updatedAt: any, file_name: string, url: string } | null };

export const ProfileHeaderFragmentDoc = gql`
    fragment ProfileHeader on UserEntity {
  username
  cover {
    id
    createdAt
    updatedAt
    file_name
    url
  }
  avatar {
    id
    createdAt
    updatedAt
    file_name
    url
  }
}
    `;