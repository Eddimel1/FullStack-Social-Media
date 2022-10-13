export interface UsersRefreshTokenInput {
  id: number
  r_token_version?: number
  r_token?: string
}
export type relationsFilterT = 'images' | 'videos' | 'audio' | 'chats'
export const RELATIONS = ['images', 'videos', 'audio', 'chats']
