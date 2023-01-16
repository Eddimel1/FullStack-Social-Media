export enum FOLDERS_U {
  GALERY_IMAGES = "galery_images_u",
  GALERY_VIDEOS = "galery_videos_u",
  GALERY_AUDIOS = "galery_audios_u",
  IMAGE_F_POST = "image_f_post_u",
  VIDEO_F_POST = "video_f_post_u",
  AUDIO_F_POST = "audio_f_post_u",
  AVATAR = "avatar_u",
  COVER = "cover_u",
  IMAGE_F_COMMENT_F_PHOTO = "image_f_comment_f_photo_u",
  VIDEO_F_COMMENT_F_PHOTO = "video_f_comment_f_photo_u",
  AUDIO_F_COMMENT_F_PHOTO = "audio_f_comment_f_photo_u",
  IMAGE_F_COMMENT_F_POST = "image_f_comment_f_post_u",
  VIDEO_F_COMMENT_F_POST = "video_f_comment_f_post_u",
  AUDIO_F_COMMENT_F_POST = "audio_f_comment_f_post_u",
  IMAGE_F_COMMENT_F_VIDEO = "image_f_comment_f_video_u",
  VIDEO_F_COMMENT_F_VIDEO = "video_f_comment_f_video_u",
  AUDIO_F_COMMENT_F_VIDEO = "audio_f_comment_f_video_u",
  IMAGE_F_REPLY_F_PHOTO = "image_f_reply_f_photo_u",
  VIDEO_F_REPLY_F_PHOTO = "video_f_reply_f_photo_u",
  AUDIO_F_REPLY_F_PHOTO = "audio_f_reply_f_photo_u",
  IMAGE_F_REPLY_F_POST = "image_f_reply_f_post_u",
  VIDEO_F_REPLY_F_POST = "video_f_reply_f_post_u",
  AUDIO_F_REPLY_F_POST = "audio_f_reply_f_post_u",
  IMAGE_F_REPLY_F_VIDEO = "image_f_reply_f_video_u",
  VIDEO_F_REPLY_F_VIDEO = "video_f_reply_f_video_u",
  AUDIO_F_REPLY_F_VIDEO = "audio_f_reply_f_video_u",
}

export type folderT_U =
  | FOLDERS_U.GALERY_IMAGES
  | FOLDERS_U.GALERY_VIDEOS
  | FOLDERS_U.GALERY_AUDIOS
  | FOLDERS_U.IMAGE_F_POST
  | FOLDERS_U.VIDEO_F_POST
  | FOLDERS_U.AUDIO_F_POST
  | FOLDERS_U.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_U.AUDIO_F_COMMENT_F_POST
  | FOLDERS_U.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_U.IMAGE_F_COMMENT_F_PHOTO
  | FOLDERS_U.IMAGE_F_COMMENT_F_POST
  | FOLDERS_U.IMAGE_F_COMMENT_F_VIDEO
  | FOLDERS_U.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_U.VIDEO_F_COMMENT_F_POST
  | FOLDERS_U.VIDEO_F_COMMENT_F_VIDEO;

export type AvatarOrCover_U = FOLDERS_U.AVATAR | FOLDERS_U.COVER;

export type GaleryFoldersT_U =
  | FOLDERS_U.GALERY_IMAGES
  | FOLDERS_U.GALERY_VIDEOS
  | FOLDERS_U.GALERY_AUDIOS;

export type PostFoldersT_U =
  | FOLDERS_U.IMAGE_F_POST
  | FOLDERS_U.VIDEO_F_POST
  | FOLDERS_U.AUDIO_F_POST;

export type AllCommentFoldersT_U =
  | FOLDERS_U.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_U.AUDIO_F_COMMENT_F_POST
  | FOLDERS_U.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_U.IMAGE_F_COMMENT_F_PHOTO
  | FOLDERS_U.IMAGE_F_COMMENT_F_POST
  | FOLDERS_U.IMAGE_F_COMMENT_F_VIDEO
  | FOLDERS_U.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_U.VIDEO_F_COMMENT_F_POST
  | FOLDERS_U.VIDEO_F_COMMENT_F_VIDEO;

export type Comment_F_Photo_U =
  | FOLDERS_U.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_U.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_U.IMAGE_F_COMMENT_F_PHOTO;

export type Comment_F_Video_U =
  | FOLDERS_U.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_U.VIDEO_F_COMMENT_F_VIDEO
  | FOLDERS_U.IMAGE_F_COMMENT_F_VIDEO;

export type Comment_F_POST_U =
  | FOLDERS_U.AUDIO_F_COMMENT_F_POST
  | FOLDERS_U.VIDEO_F_COMMENT_F_POST
  | FOLDERS_U.IMAGE_F_COMMENT_F_POST;

export type Reply_F_Photo_U =
  | FOLDERS_U.AUDIO_F_REPLY_F_PHOTO
  | FOLDERS_U.VIDEO_F_REPLY_F_PHOTO
  | FOLDERS_U.IMAGE_F_REPLY_F_PHOTO;

export type Reply_F_Video_U =
  | FOLDERS_U.AUDIO_F_REPLY_F_VIDEO
  | FOLDERS_U.VIDEO_F_REPLY_F_VIDEO
  | FOLDERS_U.IMAGE_F_REPLY_F_VIDEO;

export type Reply_F_Post_U =
  | FOLDERS_U.AUDIO_F_REPLY_F_POST
  | FOLDERS_U.VIDEO_F_REPLY_F_POST
  | FOLDERS_U.IMAGE_F_REPLY_F_POST;

export type Folders_Union_U =
  | PostFoldersT_U
  | Comment_F_Photo_U
  | Comment_F_Video_U
  | Comment_F_POST_U
  | Reply_F_Photo_U
  | Reply_F_Video_U
  | Reply_F_Post_U;

export enum FOLDERS_G {
  GALERY_IMAGES = "galery_images_g",
  GALERY_VIDEOS = "galery_videos_g",
  GALERY_AUDIOS = "galery_audios_g",
  IMAGE_F_POST = "image_f_post_g",
  VIDEO_F_POST = "video_f_post_g",
  AUDIO_F_POST = "audio_f_post_g",
  AVATAR = "avatar_g",
  COVER = "cover_g",
  IMAGE_F_COMMENT_F_PHOTO = "image_f_comment_f_photo_g",
  VIDEO_F_COMMENT_F_PHOTO = "video_f_comment_f_photo_g",
  AUDIO_F_COMMENT_F_PHOTO = "audio_f_comment_f_photo_g",
  IMAGE_F_COMMENT_F_POST = "image_f_comment_f_post_g",
  VIDEO_F_COMMENT_F_POST = "video_f_comment_f_post_g",
  AUDIO_F_COMMENT_F_POST = "audio_f_comment_f_post_g",
  IMAGE_F_COMMENT_F_VIDEO = "image_f_comment_f_video_g",
  VIDEO_F_COMMENT_F_VIDEO = "video_f_comment_f_video_g",
  AUDIO_F_COMMENT_F_VIDEO = "audio_f_comment_f_video_g",
  IMAGE_F_REPLY_F_PHOTO = "image_f_reply_f_photo_g",
  VIDEO_F_REPLY_F_PHOTO = "video_f_reply_f_photo_g",
  AUDIO_F_REPLY_F_PHOTO = "audio_f_reply_f_photo_g",
  IMAGE_F_REPLY_F_POST = "image_f_reply_f_post_g",
  VIDEO_F_REPLY_F_POST = "video_f_reply_f_post_g",
  AUDIO_F_REPLY_F_POST = "audio_f_reply_f_post_g",
  IMAGE_F_REPLY_F_VIDEO = "image_f_reply_f_video_g",
  VIDEO_F_REPLY_F_VIDEO = "video_f_reply_f_video_g",
  AUDIO_F_REPLY_F_VIDEO = "audio_f_reply_f_video_g",
}

export type folderT_G =
  | FOLDERS_U.GALERY_IMAGES
  | FOLDERS_U.GALERY_VIDEOS
  | FOLDERS_U.GALERY_AUDIOS
  | FOLDERS_U.IMAGE_F_POST
  | FOLDERS_U.VIDEO_F_POST
  | FOLDERS_U.AUDIO_F_POST
  | FOLDERS_U.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_U.AUDIO_F_COMMENT_F_POST
  | FOLDERS_U.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_U.IMAGE_F_COMMENT_F_PHOTO
  | FOLDERS_U.IMAGE_F_COMMENT_F_POST
  | FOLDERS_U.IMAGE_F_COMMENT_F_VIDEO
  | FOLDERS_U.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_U.VIDEO_F_COMMENT_F_POST
  | FOLDERS_U.VIDEO_F_COMMENT_F_VIDEO;

export type AvatarOrCover_G = FOLDERS_U.AVATAR | FOLDERS_U.COVER;

export type GaleryFoldersT_G =
  | FOLDERS_U.GALERY_IMAGES
  | FOLDERS_U.GALERY_VIDEOS
  | FOLDERS_U.GALERY_AUDIOS;

export type PostFoldersT_G =
  | FOLDERS_U.IMAGE_F_POST
  | FOLDERS_U.VIDEO_F_POST
  | FOLDERS_U.AUDIO_F_POST;

export type AllCommentFoldersT_G =
  | FOLDERS_U.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_U.AUDIO_F_COMMENT_F_POST
  | FOLDERS_U.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_U.IMAGE_F_COMMENT_F_PHOTO
  | FOLDERS_U.IMAGE_F_COMMENT_F_POST
  | FOLDERS_U.IMAGE_F_COMMENT_F_VIDEO
  | FOLDERS_U.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_U.VIDEO_F_COMMENT_F_POST
  | FOLDERS_U.VIDEO_F_COMMENT_F_VIDEO;

export type Comment_F_Photo_G =
  | FOLDERS_U.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_U.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_U.IMAGE_F_COMMENT_F_PHOTO;

export type Comment_F_Video_G =
  | FOLDERS_U.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_U.VIDEO_F_COMMENT_F_VIDEO
  | FOLDERS_U.IMAGE_F_COMMENT_F_VIDEO;

export type Comment_F_POST_G =
  | FOLDERS_U.AUDIO_F_COMMENT_F_POST
  | FOLDERS_U.VIDEO_F_COMMENT_F_POST
  | FOLDERS_U.IMAGE_F_COMMENT_F_POST;

export type Reply_F_Photo_G =
  | FOLDERS_U.AUDIO_F_REPLY_F_PHOTO
  | FOLDERS_U.VIDEO_F_REPLY_F_PHOTO
  | FOLDERS_U.IMAGE_F_REPLY_F_PHOTO;

export type Reply_F_Video_G =
  | FOLDERS_U.AUDIO_F_REPLY_F_VIDEO
  | FOLDERS_U.VIDEO_F_REPLY_F_VIDEO
  | FOLDERS_U.IMAGE_F_REPLY_F_VIDEO;

export type Reply_F_Post_G =
  | FOLDERS_U.AUDIO_F_REPLY_F_POST
  | FOLDERS_U.VIDEO_F_REPLY_F_POST
  | FOLDERS_U.IMAGE_F_REPLY_F_POST;


  export type Folders_Union_G =
  | PostFoldersT_G
  | Comment_F_Photo_G
  | Comment_F_Video_G
  | Comment_F_POST_G
  | Reply_F_Photo_G
  | Reply_F_Video_G
  | Reply_F_Post_G;