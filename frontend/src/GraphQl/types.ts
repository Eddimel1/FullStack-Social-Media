import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Audio_F_Comment_F_Photo_G = {
  __typename?: 'Audio_F_Comment_F_Photo_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPhoto_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Comment_F_Photo_U = {
  __typename?: 'Audio_F_Comment_F_Photo_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPhoto_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Comment_F_Post_G = {
  __typename?: 'Audio_F_Comment_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPost_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Comment_F_Post_U = {
  __typename?: 'Audio_F_Comment_F_Post_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPost_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Comment_F_Video_G = {
  __typename?: 'Audio_F_Comment_F_Video_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForVideo_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Comment_F_Video_U = {
  __typename?: 'Audio_F_Comment_F_Video_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForVideo_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Post_G = {
  __typename?: 'Audio_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: Post_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Post_U = {
  __typename?: 'Audio_F_Post_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: Post_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Reply_F_Photo_G = {
  __typename?: 'Audio_F_Reply_F_Photo_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPhoto_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Audio_F_Reply_F_Post_G = {
  __typename?: 'Audio_F_Reply_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPost_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ChatEntity = {
  __typename?: 'ChatEntity';
  companion: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  messages: Array<MessageEntity>;
  owner: UserEntity;
  updatedAt: Scalars['DateTime'];
};

export type CommentForPhoto_G = {
  __typename?: 'CommentForPhoto_G';
  audio: Audio_F_Comment_F_Photo_G;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Comment_F_Photo_G;
  owner: Galery_Image_G;
  replies: ReplyForPhoto_G;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Comment_F_Photo_G;
};

export type CommentForPhoto_U = {
  __typename?: 'CommentForPhoto_U';
  audio: Audio_F_Comment_F_Photo_U;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Comment_F_Photo_U;
  owner: Galery_Image_U;
  replies: ReplyForPhoto_U;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Comment_F_Photo_U;
};

export type CommentForPost_G = {
  __typename?: 'CommentForPost_G';
  audio: Audio_F_Comment_F_Post_G;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Comment_F_Post_G;
  owner: Post_G;
  replies: ReplyForPost_G;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Comment_F_Post_G;
};

export type CommentForPost_U = {
  __typename?: 'CommentForPost_U';
  audio: Audio_F_Comment_F_Post_U;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Comment_F_Post_U;
  owner: Post_U;
  replies: ReplyForPost_U;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Comment_F_Post_U;
};

export type CommentForVideo_G = {
  __typename?: 'CommentForVideo_G';
  audio: Audio_F_Comment_F_Video_G;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Comment_F_Video_G;
  owner: Galery_Video_G;
  replies: ReplyForVideo_G;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Comment_F_Video_G;
};

export type CommentForVideo_U = {
  __typename?: 'CommentForVideo_U';
  audio: Audio_F_Comment_F_Video_U;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Comment_F_Video_U;
  owner: Galery_Video_U;
  replies: ReplyForVideo_U;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Comment_F_Video_U;
};

export type CreateChatInput = {
  companion: Scalars['Float'];
  owner: Scalars['Float'];
};

export type CreateComment = {
  ownerId: Scalars['Float'];
  text: Scalars['String'];
};

export type CreatedRequest_O = {
  __typename?: 'CreatedRequest_O';
  accepter_id: Scalars['Float'];
  isSuccess: Scalars['Boolean'];
  requester_id: Scalars['Float'];
};

export type CreateGroupInfo_I = {
  description: Scalars['String'];
  groupId: Scalars['Float'];
  status?: InputMaybe<Scalars['String']>;
};

export type CreateGroupInput = {
  category: Scalars['String'];
  name: Scalars['String'];
  slogan: Scalars['String'];
};

export type CreateMessageInput = {
  chat_id: Scalars['Float'];
  from: Scalars['Float'];
  message: Scalars['String'];
  to: Scalars['Float'];
};

export type CreatePost_F_Group_I = {
  ownerId: Scalars['Float'];
  text: Scalars['String'];
};

export type CreatePostInput = {
  text: Scalars['String'];
};

export type CreateRelationShip_G = {
  groupId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type CreateReply = {
  ownerId?: InputMaybe<Scalars['Float']>;
  replyId?: InputMaybe<Scalars['Float']>;
  text: Scalars['String'];
};

export type CreateRequest_G = {
  groupId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type CreateUserInfoInput = {
  country?: InputMaybe<Scalars['String']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
};

export type CreateUserInput = {
  birthDate: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  sex: Scalars['String'];
  username: Scalars['String'];
};

export type Delete_Message_W_Owner = {
  __typename?: 'Delete_Message_W_Owner';
  id: Scalars['Float'];
  isSuccess: Scalars['Boolean'];
  ownerId: Scalars['Float'];
  type: Scalars['String'];
};

export type Delete_Message_Wo_Owner = {
  __typename?: 'Delete_Message_WO_Owner';
  id: Scalars['Float'];
  isSuccess: Scalars['Boolean'];
  type: Scalars['String'];
};

export type DeleteRequest_O = {
  __typename?: 'DeleteRequest_O';
  groupId: Scalars['Float'];
  isSuccess: Scalars['Boolean'];
  userId: Scalars['Float'];
};

export type Find_All_F_Photo_G = {
  __typename?: 'find_all_F_Photo_G';
  ancestor_count: Scalars['Float'];
  ancestors: Array<ReplyForPhoto_G>;
  descendant_count: Scalars['Float'];
  descendants: Array<ReplyForPhoto_G>;
};

export type Find_All_F_Photo_U = {
  __typename?: 'find_all_F_Photo_U';
  ancestor_count: Scalars['Float'];
  ancestors: Array<ReplyForPhoto_U>;
  descendant_count: Scalars['Float'];
  descendants: Array<ReplyForPhoto_U>;
};

export type Find_All_F_Post_G = {
  __typename?: 'find_all_F_Post_G';
  ancestor_count: Scalars['Float'];
  ancestors: Array<ReplyForPost_G>;
  descendant_count: Scalars['Float'];
  descendants: Array<ReplyForPost_G>;
};

export type Find_All_F_Post_U = {
  __typename?: 'find_all_F_Post_U';
  ancestor_count: Scalars['Float'];
  ancestors: Array<ReplyForPost_U>;
  descendant_count: Scalars['Float'];
  descendants: Array<ReplyForPost_U>;
};

export type Find_All_F_Video_G = {
  __typename?: 'find_all_F_Video_G';
  ancestor_count: Scalars['Float'];
  ancestors: Array<ReplyForVideo_G>;
  descendant_count: Scalars['Float'];
  descendants: Array<ReplyForVideo_G>;
};

export type Find_All_F_Video_U = {
  __typename?: 'find_all_F_Video_U';
  ancestor_count: Scalars['Float'];
  ancestors: Array<ReplyForVideo_U>;
  descendant_count: Scalars['Float'];
  descendants: Array<ReplyForVideo_U>;
};

export type FindAllGroupPosts_O = {
  __typename?: 'FindAllGroupPosts_O';
  items: Array<Post_G>;
  portion: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type FindAllPosts_O = {
  __typename?: 'FindAllPosts_O';
  items: Array<Post_U>;
  portion: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type FindAndCountFriends_O = {
  __typename?: 'FindAndCountFriends_O';
  friends: Array<SanitizedUser>;
  totalCount: Scalars['Float'];
};

export type FindAndCountRequests_O = {
  __typename?: 'FindAndCountRequests_O';
  requests: Array<FriendRequest>;
  totalCount: Scalars['Float'];
};

export type FindOne_W_Owner_I = {
  id: Scalars['Float'];
  ownerId?: InputMaybe<Scalars['Float']>;
};

export type FindRelationShip_G = {
  groupId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type FindRequest_G = {
  groupId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type FriendRequest = {
  __typename?: 'FriendRequest';
  accepter: UserEntity;
  requester: UserEntity;
};

export type FriendShip = {
  __typename?: 'FriendShip';
  user1: UserEntity;
  user1_side: User1Side;
  user1_side_private: User1SidePrivate;
  user2: UserEntity;
  user2_side: User2Side;
  user2_side_private: User2SidePrivate;
  users_shared_side: UsersSharedSide;
};

export type G_Avatar_En = {
  __typename?: 'G_Avatar_EN';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: GroupEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type G_Cover_En = {
  __typename?: 'G_Cover_EN';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: GroupEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Galery_Audio_G = {
  __typename?: 'Galery_Audio_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: GroupEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Galery_Audio_U = {
  __typename?: 'Galery_Audio_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: UserEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Galery_Image_G = {
  __typename?: 'Galery_Image_G';
  comments: CommentForPhoto_G;
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: GroupEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Galery_Image_U = {
  __typename?: 'Galery_Image_U';
  comments: CommentForPhoto_U;
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: UserEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Galery_Video_G = {
  __typename?: 'Galery_Video_G';
  comments: CommentForVideo_G;
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: GroupEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Galery_Video_U = {
  __typename?: 'Galery_Video_U';
  comments: CommentForVideo_G;
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: UserEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type GetAllUser_O = {
  __typename?: 'getAllUser_O';
  totalCount: Scalars['Int'];
  users: Array<UserEntity>;
};

export type Group_User_Relation = {
  __typename?: 'Group_User_Relation';
  group: GroupEntity;
  group_side: GroupSide;
  group_side_private: GroupSidePrivate;
  shared_side: GroupUserSharedSide;
  user: UserEntity;
  user_side: UserSide_G;
  user_side_private: UserSidePrivate;
};

export type GroupEntity = {
  __typename?: 'GroupEntity';
  audio: Array<Galery_Audio_G>;
  avatar: G_Avatar_En;
  category: Scalars['String'];
  cover: G_Cover_En;
  createdAt: Scalars['DateTime'];
  group_info: GroupInfo;
  id: Scalars['Float'];
  images: Array<Galery_Image_G>;
  name: Scalars['String'];
  owner: UserEntity;
  posts: Array<Post_G>;
  slogan: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  videos: Array<Galery_Video_G>;
};

export type GroupInfo = {
  __typename?: 'GroupInfo';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Float'];
  owner: GroupEntity;
  ownerId: Scalars['Float'];
  status?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type GroupSide = {
  __typename?: 'GroupSide';
  blocked: Scalars['Boolean'];
  group_user_relation: Group_User_Relation;
  id: Scalars['Float'];
  role: Scalars['String'];
  warnings: Scalars['Float'];
};

export type GroupSidePrivate = {
  __typename?: 'GroupSidePrivate';
  ban_reason?: Maybe<Scalars['String']>;
  group_user_relation: Group_User_Relation;
  id: Scalars['Float'];
  user_characteristic?: Maybe<Scalars['String']>;
};

export type GroupUserRequest = {
  __typename?: 'GroupUserRequest';
  group: GroupEntity;
  group_as_what: Scalars['String'];
  user: UserEntity;
  user_as_what: Scalars['String'];
};

export type GroupUserSharedSide = {
  __typename?: 'GroupUserSharedSide';
  group_recommendation?: Maybe<Scalars['String']>;
  group_user_relation: Group_User_Relation;
  id: Scalars['Float'];
  user_recommendation?: Maybe<Scalars['String']>;
};

export type Image_F_Comment_F_Photo_G = {
  __typename?: 'Image_F_Comment_F_Photo_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPhoto_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Comment_F_Photo_U = {
  __typename?: 'Image_F_Comment_F_Photo_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPhoto_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Comment_F_Post_G = {
  __typename?: 'Image_F_Comment_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPost_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Comment_F_Post_U = {
  __typename?: 'Image_F_Comment_F_Post_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPost_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Comment_F_Video_G = {
  __typename?: 'Image_F_Comment_F_Video_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForVideo_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Comment_F_Video_U = {
  __typename?: 'Image_F_Comment_F_Video_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForVideo_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Post_G = {
  __typename?: 'Image_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: Post_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Post_U = {
  __typename?: 'Image_F_Post_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: Post_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Reply_F_Photo_G = {
  __typename?: 'Image_F_Reply_F_Photo_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPhoto_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Reply_F_Photo_U = {
  __typename?: 'Image_F_Reply_F_Photo_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPhoto_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Reply_F_Post_G = {
  __typename?: 'Image_F_Reply_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPost_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Reply_F_Post_U = {
  __typename?: 'Image_F_Reply_F_Post_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPost_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Reply_F_Video_G = {
  __typename?: 'Image_F_Reply_F_Video_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForVideo_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Image_F_Reply_F_Video_U = {
  __typename?: 'Image_F_Reply_F_Video_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForVideo_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type IsSuccess_G = {
  __typename?: 'isSuccess_G';
  groupId: Scalars['Float'];
  isSuccess: Scalars['Boolean'];
  userId: Scalars['Float'];
};

export type IsSuccess_O = {
  __typename?: 'IsSuccess_O';
  friendId: Scalars['Float'];
  isSuccess: Scalars['Boolean'];
};

export type IsSuccess_Reply = {
  __typename?: 'isSuccess_Reply';
  id: Scalars['Float'];
  isSuccess: Scalars['Boolean'];
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MessageEntity = {
  __typename?: 'MessageEntity';
  chat: ChatEntity;
  createdAt: Scalars['DateTime'];
  from: Scalars['Float'];
  id: Scalars['Float'];
  message: Scalars['String'];
  to: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type MessageT = {
  __typename?: 'messageT';
  message?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage: MessageEntity;
  createChat: ChatEntity;
  createCommentForPhoto_G: CommentForPhoto_G;
  createCommentForPhoto_U: CommentForPhoto_U;
  createCommentForPost_G: CommentForPost_G;
  createCommentForPost_U: CommentForPost_U;
  createCommentForVideo_G: CommentForVideo_G;
  createCommentForVideo_U: CommentForVideo_U;
  createFriendShip: SanitizedUser;
  createGroup: GroupEntity;
  createGroupInfo: GroupInfo;
  createGroupToUserRequest: GroupUserRequest;
  createGroupUserRelationship_G: Group_User_Relation;
  createGroupUserRelationship_U: Group_User_Relation;
  createPost: Post_U;
  createPostForGroup: Post_G;
  createReplyForPhoto_G: ReplyForPhoto_G;
  createReplyForPhoto_U: ReplyForPhoto_U;
  createReplyForPost_G: ReplyForPost_G;
  createReplyForPost_U: ReplyForPost_U;
  createReplyForVideo_G: ReplyForVideo_G;
  createReplyForVideo_U: ReplyForVideo_U;
  createRequest: CreatedRequest_O;
  createUser: UserEntity;
  createUserInfo: UserInfoEntity;
  createUserToGroupRequest: GroupUserRequest;
  declineAllRequests: FriendRequest;
  declineRequest: FriendRequest;
  deleteReplyForPhoto_G: IsSuccess_Reply;
  deleteReplyForPhoto_U: IsSuccess_Reply;
  deleteReplyForPost_G: IsSuccess_Reply;
  deleteReplyForPost_U: IsSuccess_Reply;
  deleteReplyForVideo_G: IsSuccess_Reply;
  deleteReplyForVideo_U: IsSuccess_Reply;
  destroyRelationship_G: IsSuccess_G;
  destroyRelationship_U: IsSuccess_G;
  login: UserEntity;
  logOut: MessageT;
  refreshToken: MessageT;
  removeCommentForPhoto_G: CommentForPhoto_G;
  removeCommentForPhoto_U: CommentForPhoto_U;
  removeCommentForPost_G: CommentForPost_G;
  removeCommentForPost_U: CommentForPost_U;
  removeCommentForVideo_G: CommentForVideo_G;
  removeCommentForVideo_U: CommentForVideo_U;
  removeFriend: IsSuccess_O;
  removeGroup: GroupEntity;
  removeGroupInfo: Delete_Message_Wo_Owner;
  removeMyRequest: FriendRequest;
  removePost: Delete_Message_W_Owner;
  removePostForGroup: Delete_Message_W_Owner;
  removeRequestToGroup: DeleteRequest_O;
  removeRequestToUser: DeleteRequest_O;
  removeUser: Scalars['Float'];
  updateCommentForPhoto_G: CommentForPhoto_G;
  updateCommentForPhoto_U: CommentForPhoto_U;
  updateCommentForPost_G: CommentForPost_G;
  updateCommentForPost_U: CommentForPost_U;
  updateCommentForVideo_G: CommentForVideo_G;
  updateCommentForVideo_U: CommentForVideo_U;
  updateGroupInfo: GroupInfo;
  updateGroupPrivateSide: UpdatePrivateGroupSide_O;
  updateGroupSide: UpdateGroupSide_O;
  updateMyPrivateSide: UserPrivateSide;
  updateMySide: UserSide;
  updateOneReplyForPhoto_G: ReplyForPhoto_G;
  updateOneReplyForPhoto_U: ReplyForPhoto_U;
  updateOneReplyForPost_G: ReplyForPost_G;
  updateOneReplyForPost_U: ReplyForPost_U;
  updateOneReplyForVideo_G: ReplyForVideo_G;
  updateOneReplyForVideo_U: ReplyForVideo_U;
  updateOwnedGroup: GroupEntity;
  updatePost: Post_U;
  updatePostForGroup: Post_G;
  updateSharedSide: UserSide;
  updateUserInfo: UserInfoEntity;
  updateUserPrivateSide: UpdatePrivateUserSide_O;
  updateUserSide: UpdateUserSide_O;
};


export type MutationAddMessageArgs = {
  createMessage: CreateMessageInput;
};


export type MutationCreateChatArgs = {
  createChat: CreateChatInput;
};


export type MutationCreateCommentForPhoto_GArgs = {
  createCommentInput: CreateComment;
};


export type MutationCreateCommentForPhoto_UArgs = {
  createCommentInput: CreateComment;
};


export type MutationCreateCommentForPost_GArgs = {
  createCommentInput: CreateComment;
};


export type MutationCreateCommentForPost_UArgs = {
  createCommentInput: CreateComment;
};


export type MutationCreateCommentForVideo_GArgs = {
  createCommentInput: CreateComment;
};


export type MutationCreateCommentForVideo_UArgs = {
  createCommentInput: CreateComment;
};


export type MutationCreateFriendShipArgs = {
  requester_id: Scalars['Float'];
};


export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};


export type MutationCreateGroupInfoArgs = {
  createGroupInfoInput: CreateGroupInfo_I;
};


export type MutationCreateGroupToUserRequestArgs = {
  createGroupToUserRequest: CreateRequest_G;
};


export type MutationCreateGroupUserRelationship_GArgs = {
  CreateRelationShip_G: CreateRelationShip_G;
};


export type MutationCreateGroupUserRelationship_UArgs = {
  groupId: Scalars['Float'];
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreatePostForGroupArgs = {
  createPostForGroup: CreatePost_F_Group_I;
};


export type MutationCreateReplyForPhoto_GArgs = {
  createReply: CreateReply;
};


export type MutationCreateReplyForPhoto_UArgs = {
  CreateReply: CreateReply;
};


export type MutationCreateReplyForPost_GArgs = {
  CreateReply: CreateReply;
};


export type MutationCreateReplyForPost_UArgs = {
  CreateReply: CreateReply;
};


export type MutationCreateReplyForVideo_GArgs = {
  CreateReply: CreateReply;
};


export type MutationCreateReplyForVideo_UArgs = {
  CreateReply: CreateReply;
};


export type MutationCreateRequestArgs = {
  accepter_id: Scalars['Float'];
};


export type MutationCreateUserArgs = {
  createUser: CreateUserInput;
};


export type MutationCreateUserInfoArgs = {
  createUserInfoInput: CreateUserInfoInput;
};


export type MutationCreateUserToGroupRequestArgs = {
  groupId: Scalars['Float'];
};


export type MutationDeclineRequestArgs = {
  accepter_id: Scalars['Float'];
};


export type MutationDeleteReplyForPhoto_GArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteReplyForPhoto_UArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteReplyForPost_GArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteReplyForPost_UArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteReplyForVideo_GArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteReplyForVideo_UArgs = {
  id: Scalars['Float'];
};


export type MutationDestroyRelationship_GArgs = {
  FindRelationShip_G: FindRelationShip_G;
};


export type MutationDestroyRelationship_UArgs = {
  groupId: Scalars['Float'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveCommentForPhoto_GArgs = {
  searchAllCommentForVideo: SearchComment;
};


export type MutationRemoveCommentForPhoto_UArgs = {
  searchAllCommentForVideo: SearchComment;
};


export type MutationRemoveCommentForPost_GArgs = {
  searchAllCommentForPost: SearchComment;
};


export type MutationRemoveCommentForPost_UArgs = {
  searchAllCommentForPost: SearchComment;
};


export type MutationRemoveCommentForVideo_GArgs = {
  searchAllCommentForVideo: SearchComment;
};


export type MutationRemoveCommentForVideo_UArgs = {
  searchAllCommentForVideo: SearchComment;
};


export type MutationRemoveFriendArgs = {
  friendId: Scalars['Float'];
};


export type MutationRemoveGroupArgs = {
  groupId: Scalars['Float'];
};


export type MutationRemoveGroupInfoArgs = {
  id: Scalars['Float'];
};


export type MutationRemoveMyRequestArgs = {
  accepter_id: Scalars['Float'];
};


export type MutationRemovePostArgs = {
  postId: Scalars['Float'];
};


export type MutationRemovePostForGroupArgs = {
  removeGroupPost: FindOne_W_Owner_I;
};


export type MutationRemoveRequestToGroupArgs = {
  groupId: Scalars['Float'];
};


export type MutationRemoveRequestToUserArgs = {
  findGroupToUserRequest: FindRequest_G;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateCommentForPhoto_GArgs = {
  updateCommentInput: UpdateComment;
};


export type MutationUpdateCommentForPhoto_UArgs = {
  updateCommentInput: UpdateComment;
};


export type MutationUpdateCommentForPost_GArgs = {
  updateCommentInput: UpdateComment;
};


export type MutationUpdateCommentForPost_UArgs = {
  updateCommentInput: UpdateComment;
};


export type MutationUpdateCommentForVideo_GArgs = {
  updateCommentInput: UpdateComment;
};


export type MutationUpdateCommentForVideo_UArgs = {
  updateCommentInput: UpdateComment;
};


export type MutationUpdateGroupInfoArgs = {
  updateGroupInfoInput: UpdateGroupInfo_I;
};


export type MutationUpdateGroupPrivateSideArgs = {
  updateGroupPrivateSide: UpdateRelationShip_G;
};


export type MutationUpdateGroupSideArgs = {
  UpdateRelationShip_G: UpdateRelationShip_G;
};


export type MutationUpdateMyPrivateSideArgs = {
  myPrivateSideUpdate: UpdatePrivateSide_I;
};


export type MutationUpdateMySideArgs = {
  mySideUpdate: UpdateSide_I;
};


export type MutationUpdateOneReplyForPhoto_GArgs = {
  updateReply: UpdateReply;
};


export type MutationUpdateOneReplyForPhoto_UArgs = {
  updateReply: UpdateReply;
};


export type MutationUpdateOneReplyForPost_GArgs = {
  updateReply: UpdateReply;
};


export type MutationUpdateOneReplyForPost_UArgs = {
  updateReply: UpdateReply;
};


export type MutationUpdateOneReplyForVideo_GArgs = {
  updateReply: UpdateReply;
};


export type MutationUpdateOneReplyForVideo_UArgs = {
  updateReply: UpdateReply;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdatePostForGroupArgs = {
  updatePostsForGroupInput: UpdatePostForGroup_I;
};


export type MutationUpdateSharedSideArgs = {
  sharedSideUpdate: UpdateSharedSide_I;
};


export type MutationUpdateUserInfoArgs = {
  updateUserInfoInput: UpdateUserInfoInput;
};


export type MutationUpdateUserPrivateSideArgs = {
  updateUserPrivateSide: UpdateRelationShip_U;
};


export type MutationUpdateUserSideArgs = {
  UpdateRelationShip_U: UpdateRelationShip_U;
};

export type Post_G = {
  __typename?: 'Post_G';
  audio: Audio_F_Post_G;
  comments: Array<CommentForPost_G>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Post_G;
  likes: Scalars['Float'];
  owner: GroupEntity;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Post_G;
};

export type Post_U = {
  __typename?: 'Post_U';
  audio: Audio_F_Post_U;
  comments: Array<CommentForPost_U>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Post_U;
  likes: Scalars['Float'];
  owner: UserEntity;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  video: Video_F_Post_U;
};

export type Query = {
  __typename?: 'Query';
  findAll_A_Count_RepliesForPhoto_G: Find_All_F_Video_G;
  findAll_A_Count_RepliesForPhoto_U: Find_All_F_Photo_U;
  findAll_A_Count_RepliesForPost_G: Find_All_F_Post_G;
  findAll_A_Count_RepliesForPost_U: Find_All_F_Post_U;
  findAll_A_Count_RepliesForVideo_U: Find_All_F_Video_U;
  findAllCommentsForPhoto_G: Array<CommentForPhoto_G>;
  findAllCommentsForPhoto_U: Array<CommentForPhoto_U>;
  findAllCommentsForPost_G: Array<CommentForPost_G>;
  findAllCommentsForPostEntity_U: Array<CommentForPost_U>;
  findAllCommentsForVideo_G: Array<CommentForVideo_G>;
  findAllCommentsForVideoEntity_U: Array<CommentForVideo_U>;
  findAllFriends: FindAndCountFriends_O;
  findAllGroupPosts: FindAllGroupPosts_O;
  findAllMyRequests: FindAndCountRequests_O;
  findAllOwnedGroups: Array<GroupEntity>;
  findAllPosts: FindAllPosts_O;
  findAllRelationshipsWithGroups: Array<Group_User_Relation>;
  findAllRelationshipsWithUsers: Array<Group_User_Relation>;
  findAllRequestsToGroup: Array<GroupUserRequest>;
  findAllRequestsToMe: FindAndCountRequests_O;
  findAllRequestsToUser: Array<GroupUserRequest>;
  findAncestorsTree_F_Photo_G: ReplyForPhoto_G;
  findAncestorsTree_F_Photo_U: ReplyForPhoto_U;
  findAncestorsTree_F_Post_G: ReplyForPost_G;
  findAncestorsTree_F_Post_U: ReplyForPost_U;
  findAncestorsTree_F_Video_G: ReplyForVideo_G;
  findAncestorsTree_F_Video_U: ReplyForVideo_U;
  findDescendantsTree_F_Photo_G: ReplyForPhoto_G;
  findDescendantsTree_F_Post_G: ReplyForPost_G;
  findDescendantsTree_F_Post_U: ReplyForPost_U;
  findDescendantsTree_F_Video_U: ReplyForVideo_U;
  findDescendantsTree_G: ReplyForVideo_G;
  findDescendantsTree_U: ReplyForPhoto_U;
  findOne: CommentForPhoto_G;
  findOneCommentForPhoto_U: CommentForPhoto_U;
  findOneCommentForPost_G: CommentForPost_G;
  findOneCommentForPost_U: CommentForPost_U;
  findOneCommentForVideo_G: CommentForVideo_G;
  findOneCommentForVideo_U: CommentForVideo_U;
  findOneFriend: SanitizedUser;
  findOneGroupInfo: GroupInfo;
  findOneGroupPost: Post_G;
  findOneMyRequest: FriendRequest;
  findOneOwnedGroup: GroupEntity;
  findOnePost: Post_U;
  findOneRelationshipWithGroup: Group_User_Relation;
  findOneRelationshipWithUser: Group_User_Relation;
  findOneRequestToGroup: GroupUserRequest;
  findOneRequestToMe: FriendRequest;
  findOneRequestToUser: GroupUserRequest;
  findOneUserInfo: UserInfoEntity;
  getAllUsers: GetAllUser_O;
  getOneUser: UserEntity;
  readMyFriendsSide: UserSide;
  readMyPrivateSide: UserPrivateSide;
  readMySide: UserSide;
  removeFriend: UsersSharedSide;
  returnAllChats: ChatEntity;
};


export type QueryFindAll_A_Count_RepliesForPhoto_GArgs = {
  id: Scalars['Float'];
};


export type QueryFindAll_A_Count_RepliesForPhoto_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindAll_A_Count_RepliesForPost_GArgs = {
  id: Scalars['Float'];
};


export type QueryFindAll_A_Count_RepliesForPost_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindAll_A_Count_RepliesForVideo_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindAllCommentsForPhoto_GArgs = {
  photoId: Scalars['Float'];
};


export type QueryFindAllCommentsForPhoto_UArgs = {
  photoId: Scalars['Float'];
};


export type QueryFindAllCommentsForPost_GArgs = {
  photoId: Scalars['Float'];
};


export type QueryFindAllCommentsForPostEntity_UArgs = {
  photoId: Scalars['Float'];
};


export type QueryFindAllCommentsForVideo_GArgs = {
  videoId: Scalars['Float'];
};


export type QueryFindAllCommentsForVideoEntity_UArgs = {
  photoId: Scalars['Float'];
};


export type QueryFindAllGroupPostsArgs = {
  groupId: Scalars['Float'];
};


export type QueryFindAllPostsArgs = {
  id?: InputMaybe<Scalars['Float']>;
};


export type QueryFindAllRelationshipsWithUsersArgs = {
  groupId: Scalars['Float'];
};


export type QueryFindAllRequestsToUserArgs = {
  groupId: Scalars['Float'];
};


export type QueryFindAncestorsTree_F_Photo_GArgs = {
  id: Scalars['Float'];
};


export type QueryFindAncestorsTree_F_Photo_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindAncestorsTree_F_Post_GArgs = {
  id: Scalars['Float'];
};


export type QueryFindAncestorsTree_F_Post_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindAncestorsTree_F_Video_GArgs = {
  id: Scalars['Float'];
};


export type QueryFindAncestorsTree_F_Video_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindDescendantsTree_F_Photo_GArgs = {
  id: Scalars['Float'];
};


export type QueryFindDescendantsTree_F_Post_GArgs = {
  id: Scalars['Float'];
};


export type QueryFindDescendantsTree_F_Post_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindDescendantsTree_F_Video_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindDescendantsTree_GArgs = {
  id: Scalars['Float'];
};


export type QueryFindDescendantsTree_UArgs = {
  id: Scalars['Float'];
};


export type QueryFindOneArgs = {
  searchAllCommentForVideo: SearchComment;
};


export type QueryFindOneCommentForPhoto_UArgs = {
  searchAllCommentForVideo: SearchComment;
};


export type QueryFindOneCommentForPost_GArgs = {
  searchAllCommentForPost: SearchComment;
};


export type QueryFindOneCommentForPost_UArgs = {
  searchAllCommentForPost: SearchComment;
};


export type QueryFindOneCommentForVideo_GArgs = {
  searchAllCommentForVideo: SearchComment;
};


export type QueryFindOneCommentForVideo_UArgs = {
  searchAllCommentForVideo: SearchComment;
};


export type QueryFindOneFriendArgs = {
  friendId: Scalars['Float'];
};


export type QueryFindOneGroupInfoArgs = {
  id: Scalars['Float'];
};


export type QueryFindOneGroupPostArgs = {
  findGroupPost: FindOne_W_Owner_I;
};


export type QueryFindOneMyRequestArgs = {
  accepter_id: Scalars['Float'];
};


export type QueryFindOneOwnedGroupArgs = {
  groupId: Scalars['Float'];
};


export type QueryFindOnePostArgs = {
  findPost: FindOne_W_Owner_I;
};


export type QueryFindOneRelationshipWithGroupArgs = {
  groupId: Scalars['Float'];
};


export type QueryFindOneRelationshipWithUserArgs = {
  FindRelationShip_G: FindRelationShip_G;
};


export type QueryFindOneRequestToGroupArgs = {
  groupId: Scalars['Float'];
};


export type QueryFindOneRequestToMeArgs = {
  accepter_id: Scalars['Float'];
};


export type QueryFindOneRequestToUserArgs = {
  findGroupToUserRequest: FindRequest_G;
};


export type QueryFindOneUserInfoArgs = {
  id?: InputMaybe<Scalars['Float']>;
};


export type QueryGetOneUserArgs = {
  id?: InputMaybe<Scalars['Float']>;
};


export type QueryReadMyFriendsSideArgs = {
  readMyFriendsSide: ReadSide_I;
};


export type QueryReadMyPrivateSideArgs = {
  readMyPrivateSide: ReadSide_I;
};


export type QueryReadMySideArgs = {
  readMySide: ReadSide_I;
};


export type QueryRemoveFriendArgs = {
  sideId: Scalars['Float'];
};

export type ReadSide_I = {
  friendId: Scalars['Float'];
  sideId: Scalars['Float'];
};

export type ReplyForPhoto_G = {
  __typename?: 'ReplyForPhoto_G';
  audio: Audio_F_Reply_F_Photo_G;
  children: Array<ReplyForPhoto_G>;
  comment?: Maybe<CommentForPhoto_G>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Reply_F_Photo_G;
  parent: ReplyForPhoto_G;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Reply_F_Photo_G;
};

export type ReplyForPhoto_U = {
  __typename?: 'ReplyForPhoto_U';
  children: Array<ReplyForPhoto_U>;
  comment?: Maybe<CommentForPhoto_U>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  image: Image_F_Reply_F_Photo_U;
  parent: ReplyForPhoto_U;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Reply_F_Photo_U;
};

export type ReplyForPost_G = {
  __typename?: 'ReplyForPost_G';
  audio: Audio_F_Reply_F_Post_G;
  children: Array<ReplyForPost_G>;
  comment?: Maybe<CommentForPost_G>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Image_F_Reply_F_Post_G;
  parent: ReplyForPost_G;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Reply_F_Post_G;
};

export type ReplyForPost_U = {
  __typename?: 'ReplyForPost_U';
  children: Array<ReplyForPost_U>;
  comment?: Maybe<CommentForPost_U>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  image: Image_F_Reply_F_Post_U;
  parent: ReplyForPost_U;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Reply_F_Post_U;
};

export type ReplyForVideo_G = {
  __typename?: 'ReplyForVideo_G';
  children: Array<ReplyForVideo_G>;
  comment?: Maybe<CommentForVideo_G>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  image: Image_F_Reply_F_Video_G;
  parent: ReplyForVideo_G;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Reply_F_Video_G;
};

export type ReplyForVideo_U = {
  __typename?: 'ReplyForVideo_U';
  children: Array<ReplyForVideo_U>;
  comment?: Maybe<CommentForVideo_U>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  image: Image_F_Reply_F_Video_U;
  parent: ReplyForVideo_U;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  video: Video_F_Reply_F_Video_U;
};

export type SanitizedUser = {
  __typename?: 'SanitizedUser';
  audio: Array<Galery_Audio_U>;
  avatar?: Maybe<U_Avatar_En>;
  birthDate: Scalars['String'];
  chats: Array<ChatEntity>;
  commentForPhotoEntity_G: Array<CommentForPhoto_G>;
  commentForPhotoEntity_U: Array<CommentForPhoto_U>;
  commentForPostEntity_G: Array<CommentForPost_G>;
  commentForPostEntity_U: Array<CommentForPost_U>;
  commentForVideoEntity_G: Array<CommentForVideo_G>;
  commentForVideoEntity_U: Array<CommentForVideo_U>;
  confirmed: Scalars['Boolean'];
  country: Scalars['String'];
  cover?: Maybe<U_Cover_En>;
  createdAt: Scalars['DateTime'];
  friends: Array<UserEntity>;
  group_posts: Array<Post_G>;
  id: Scalars['Float'];
  images: Array<Galery_Image_U>;
  info: UserInfoEntity;
  owned_groups: Array<GroupEntity>;
  posts: Array<Post_U>;
  replyForPhotoEntity_G: Array<ReplyForPhoto_G>;
  replyForPhotoEntity_U: Array<ReplyForPhoto_U>;
  replyForPostEntity_G: Array<ReplyForPost_G>;
  replyForPostEntity_U: Array<ReplyForPost_U>;
  replyForVideoEntity_G: Array<ReplyForVideo_G>;
  replyForVideoEntity_U: Array<ReplyForVideo_U>;
  role: Scalars['String'];
  sex: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  videos: Array<Galery_Video_U>;
};

export type SearchComment = {
  commentId: Scalars['Float'];
  ownerId: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  findAll: Scalars['String'];
  findOne: Scalars['String'];
  messageAdded: MessageEntity;
  remove: Scalars['String'];
  update: Scalars['String'];
};

export type U_Avatar_En = {
  __typename?: 'U_Avatar_EN';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: UserEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type U_Cover_En = {
  __typename?: 'U_Cover_EN';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: UserEntity;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type UpdateComment = {
  commentId: Scalars['Float'];
  ownerId: Scalars['Float'];
  text: Scalars['String'];
};

export type UpdateGroupInfo_I = {
  description?: InputMaybe<Scalars['String']>;
  groupId: Scalars['Float'];
  status?: InputMaybe<Scalars['String']>;
};

export type UpdateGroupSide_O = {
  __typename?: 'UpdateGroupSide_O';
  blocked: Scalars['Boolean'];
  role: Scalars['String'];
  warnings: Scalars['Float'];
};

export type UpdateGroupUserSharedSide_O = {
  __typename?: 'UpdateGroupUserSharedSide_O';
  group_recommendation?: Maybe<Scalars['String']>;
  user_recommendation?: Maybe<Scalars['String']>;
};

export type UpdatePostForGroup_I = {
  findOne: FindOne_W_Owner_I;
  text: Scalars['String'];
};

export type UpdatePostInput = {
  postId: Scalars['Float'];
  text: Scalars['String'];
};

export type UpdatePrivateGroupSide_O = {
  __typename?: 'UpdatePrivateGroupSide_O';
  ban_reason: Scalars['String'];
  user_characteristic: Scalars['String'];
};

export type UpdatePrivateSide_I = {
  friendId: Scalars['Float'];
  sideId: Scalars['Float'];
  update_input: UpdateUsersPrivateSide;
};

export type UpdatePrivateUserSide_O = {
  __typename?: 'UpdatePrivateUserSide_O';
  favorite?: Maybe<Scalars['Boolean']>;
  group_characteristic?: Maybe<Scalars['String']>;
};

export type UpdateRelationShip_G = {
  groupId: Scalars['Float'];
  update: UpdateT;
  userId: Scalars['Float'];
};

export type UpdateRelationShip_U = {
  groupId: Scalars['Float'];
  update: UpdateT;
};

export type UpdateReply = {
  replyId: Scalars['Float'];
  text: Scalars['String'];
};

export type UpdateSharedSide_I = {
  sideId: Scalars['Float'];
  update_input: UpdateUserSide;
};

export type UpdateSide_I = {
  friendId: Scalars['Float'];
  sideId: Scalars['Float'];
  update_input: UpdateUserSide;
};

export type UpdateT = {
  blocked: Scalars['Boolean'];
  role: Scalars['String'];
};

export type UpdateUserInfoInput = {
  country?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserSide = {
  proposal?: InputMaybe<Scalars['String']>;
  wish?: InputMaybe<Scalars['String']>;
};

export type UpdateUserSide_O = {
  __typename?: 'UpdateUserSide_O';
  activity: Scalars['Float'];
  rating: Scalars['Float'];
  wish?: Maybe<Scalars['String']>;
};

export type UpdateUsersPrivateSide = {
  characteristic?: InputMaybe<Scalars['String']>;
  relation?: InputMaybe<Scalars['String']>;
};

export type User1Side = {
  __typename?: 'User1Side';
  friendShip: FriendShip;
  id: Scalars['Float'];
  proposal?: Maybe<Scalars['String']>;
  wish?: Maybe<Scalars['String']>;
};

export type User1SidePrivate = {
  __typename?: 'User1SidePrivate';
  characteristic?: Maybe<Scalars['String']>;
  friendShip: FriendShip;
  id: Scalars['Float'];
  relation?: Maybe<Scalars['String']>;
};

export type User2Side = {
  __typename?: 'User2Side';
  friendShip: FriendShip;
  id: Scalars['Float'];
  proposal?: Maybe<Scalars['String']>;
  wish?: Maybe<Scalars['String']>;
};

export type User2SidePrivate = {
  __typename?: 'User2SidePrivate';
  characteristic?: Maybe<Scalars['String']>;
  friendShip: FriendShip;
  id: Scalars['Float'];
  relation?: Maybe<Scalars['String']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  audio: Array<Galery_Audio_U>;
  avatar?: Maybe<U_Avatar_En>;
  birthDate: Scalars['String'];
  chats: Array<ChatEntity>;
  commentForPhotoEntity_G: Array<CommentForPhoto_G>;
  commentForPhotoEntity_U: Array<CommentForPhoto_U>;
  commentForPostEntity_G: Array<CommentForPost_G>;
  commentForPostEntity_U: Array<CommentForPost_U>;
  commentForVideoEntity_G: Array<CommentForVideo_G>;
  commentForVideoEntity_U: Array<CommentForVideo_U>;
  confirmed: Scalars['Boolean'];
  country: Scalars['String'];
  cover?: Maybe<U_Cover_En>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  friends: Array<UserEntity>;
  group_posts: Array<Post_G>;
  id: Scalars['Float'];
  images: Array<Galery_Image_U>;
  info: UserInfoEntity;
  owned_groups: Array<GroupEntity>;
  posts: Array<Post_U>;
  replyForPhotoEntity_G: Array<ReplyForPhoto_G>;
  replyForPhotoEntity_U: Array<ReplyForPhoto_U>;
  replyForPostEntity_G: Array<ReplyForPost_G>;
  replyForPostEntity_U: Array<ReplyForPost_U>;
  replyForVideoEntity_G: Array<ReplyForVideo_G>;
  replyForVideoEntity_U: Array<ReplyForVideo_U>;
  role: Scalars['String'];
  sex: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  videos: Array<Galery_Video_U>;
};

export type UserInfoEntity = {
  __typename?: 'UserInfoEntity';
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  first_name: Scalars['String'];
  id: Scalars['Float'];
  last_name: Scalars['String'];
  owner: UserEntity;
  updatedAt: Scalars['DateTime'];
};

export type UserPrivateSide = {
  __typename?: 'UserPrivateSide';
  characteristic?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  relation?: Maybe<Scalars['String']>;
};

export type UserSide = {
  __typename?: 'UserSide';
  id: Scalars['Float'];
  proposal?: Maybe<Scalars['String']>;
  wish?: Maybe<Scalars['String']>;
};

export type UserSide_G = {
  __typename?: 'UserSide_G';
  activity: Scalars['Float'];
  group_user_relation: Group_User_Relation;
  id: Scalars['Float'];
  rating: Scalars['Float'];
  wish?: Maybe<Scalars['String']>;
};

export type UserSidePrivate = {
  __typename?: 'UserSidePrivate';
  favorite: Scalars['Boolean'];
  group_characteristic?: Maybe<Scalars['String']>;
  group_user_relation: Group_User_Relation;
  id: Scalars['Float'];
};

export type UsersSharedSide = {
  __typename?: 'UsersSharedSide';
  friendShip: FriendShip;
  id: Scalars['Float'];
  proposal?: Maybe<Scalars['String']>;
  wish?: Maybe<Scalars['String']>;
};

export type Video_F_Comment_F_Photo_G = {
  __typename?: 'Video_F_Comment_F_Photo_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPhoto_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Comment_F_Photo_U = {
  __typename?: 'Video_F_Comment_F_Photo_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPhoto_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Comment_F_Post_G = {
  __typename?: 'Video_F_Comment_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPost_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Comment_F_Post_U = {
  __typename?: 'Video_F_Comment_F_Post_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForPost_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Comment_F_Video_G = {
  __typename?: 'Video_F_Comment_F_Video_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForVideo_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Comment_F_Video_U = {
  __typename?: 'Video_F_Comment_F_Video_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: CommentForVideo_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Post_G = {
  __typename?: 'Video_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: Post_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Post_U = {
  __typename?: 'Video_F_Post_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: Post_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Reply_F_Photo_G = {
  __typename?: 'Video_F_Reply_F_Photo_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPhoto_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Reply_F_Photo_U = {
  __typename?: 'Video_F_Reply_F_Photo_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPhoto_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Reply_F_Post_G = {
  __typename?: 'Video_F_Reply_F_Post_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPost_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Reply_F_Post_U = {
  __typename?: 'Video_F_Reply_F_Post_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForPost_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Reply_F_Video_G = {
  __typename?: 'Video_F_Reply_F_Video_G';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForVideo_G;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Video_F_Reply_F_Video_U = {
  __typename?: 'Video_F_Reply_F_Video_U';
  createdAt: Scalars['DateTime'];
  file_name: Scalars['String'];
  id: Scalars['ID'];
  owner: ReplyForVideo_U;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type GetUserProfileQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Float']>;
}>;


/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
