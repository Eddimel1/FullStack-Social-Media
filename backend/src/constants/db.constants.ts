export const RELATIONS = ['images', 'videos', 'audio', 'chats']
export enum USER_RELATIONS_W_GROUP {
  GROUP_SIDE = 'group_side',
  USER_SIDE = 'user_side',
  USER_SIDE_PRIVATE = 'user_side_private',
  SHARED_SIDE = 'shared_side',
}
export enum GROUP_RELATIONS_W_USER {
  GROUP_SIDE = 'group_side',
  USER_SIDE = 'user_side',
  GROUP_SIDE_PRIVATE = 'group_side_private',
  SHARED_SIDE = 'shared_side',
}
export const USER_RELATIONS_W_GROUP_ARRAY = [
  'group_side',
  'user_side',
  'user_side_private',
  'shared_side',
]
export const GROUP_RELATIONS_W_USER_ARRAY = [
  'group_side',
  'user_side',
  'group_side_private',
  'shared_side',
]
export const DEFAULT_PORTION = 10
