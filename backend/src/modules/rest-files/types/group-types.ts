export enum FOLDERS_G {
  AVATAR = 'avatar_g',
  COVER = 'cover_g',
  GALERY_IMAGES = 'galery_images_g',
  GALERY_VIDEOS = 'galery_videos_g',
  GALERY_AUDIOS = 'galery_audios_g',
  IMAGE_F_POST = 'image_f_post_g',
  VIDEO_F_POST = 'video_f_post_g',
  AUDIO_F_POST = 'audio_f_post_g',
  IMAGE_F_COMMENT_F_PHOTO = 'image_f_comment_f_photo_g',
  VIDEO_F_COMMENT_F_PHOTO = 'video_f_comment_f_photo_g',
  AUDIO_F_COMMENT_F_PHOTO = 'audio_f_comment_f_photo_g',
  IMAGE_F_COMMENT_F_POST = 'image_f_comment_f_post_g',
  VIDEO_F_COMMENT_F_POST = 'video_f_comment_f_post_g',
  AUDIO_F_COMMENT_F_POST = 'audio_f_comment_f_post_g',
  IMAGE_F_COMMENT_F_VIDEO = 'image_f_comment_f_video_g',
  VIDEO_F_COMMENT_F_VIDEO = 'video_f_comment_f_video_g',
  AUDIO_F_COMMENT_F_VIDEO = 'audio_f_comment_f_video_g',
  IMAGE_F_REPLY_F_PHOTO = 'image_f_reply_f_photo_g',
  VIDEO_F_REPLY_F_PHOTO = 'video_f_reply_f_photo_g',
  AUDIO_F_REPLY_F_PHOTO = 'audio_f_reply_f_photo_g',
  IMAGE_F_REPLY_F_POST = 'image_f_reply_f_post_g',
  VIDEO_F_REPLY_F_POST = 'video_f_reply_f_post_g',
  AUDIO_F_REPLY_F_POST = 'audio_f_reply_f_post_g',
  IMAGE_F_REPLY_F_VIDEO = 'image_f_reply_f_video_g',
  VIDEO_F_REPLY_F_VIDEO = 'video_f_reply_f_video_g',
  AUDIO_F_REPLY_F_VIDEO = 'audio_f_reply_f_video_g',
}

export type foldersT_G =
  | FOLDERS_G.GALERY_IMAGES
  | FOLDERS_G.GALERY_VIDEOS
  | FOLDERS_G.GALERY_AUDIOS
  | FOLDERS_G.IMAGE_F_POST
  | FOLDERS_G.VIDEO_F_POST
  | FOLDERS_G.AUDIO_F_POST
  | FOLDERS_G.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_G.AUDIO_F_COMMENT_F_POST
  | FOLDERS_G.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_G.IMAGE_F_COMMENT_F_PHOTO
  | FOLDERS_G.IMAGE_F_COMMENT_F_POST
  | FOLDERS_G.IMAGE_F_COMMENT_F_VIDEO
  | FOLDERS_G.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_G.VIDEO_F_COMMENT_F_POST
  | FOLDERS_G.VIDEO_F_COMMENT_F_VIDEO

export type AvatarOrCover_G = FOLDERS_G.AVATAR | FOLDERS_G.COVER

export type GaleryFoldersT_G =
  | FOLDERS_G.GALERY_IMAGES
  | FOLDERS_G.GALERY_VIDEOS
  | FOLDERS_G.GALERY_AUDIOS

export type PostFoldersT_G =
  | FOLDERS_G.IMAGE_F_POST
  | FOLDERS_G.VIDEO_F_POST
  | FOLDERS_G.AUDIO_F_POST

export type AllCommentFoldersT_G =
  | FOLDERS_G.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_G.AUDIO_F_COMMENT_F_POST
  | FOLDERS_G.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_G.IMAGE_F_COMMENT_F_PHOTO
  | FOLDERS_G.IMAGE_F_COMMENT_F_POST
  | FOLDERS_G.IMAGE_F_COMMENT_F_VIDEO
  | FOLDERS_G.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_G.VIDEO_F_COMMENT_F_POST
  | FOLDERS_G.VIDEO_F_COMMENT_F_VIDEO

export type Comment_F_Photo_G =
  | FOLDERS_G.AUDIO_F_COMMENT_F_PHOTO
  | FOLDERS_G.VIDEO_F_COMMENT_F_PHOTO
  | FOLDERS_G.IMAGE_F_COMMENT_F_PHOTO

export type Comment_F_Video_G =
  | FOLDERS_G.AUDIO_F_COMMENT_F_VIDEO
  | FOLDERS_G.VIDEO_F_COMMENT_F_VIDEO
  | FOLDERS_G.IMAGE_F_COMMENT_F_VIDEO

export type Comment_F_POST_G =
  | FOLDERS_G.AUDIO_F_COMMENT_F_POST
  | FOLDERS_G.VIDEO_F_COMMENT_F_POST
  | FOLDERS_G.IMAGE_F_COMMENT_F_POST


  export type Reply_F_Photo_G =
  | FOLDERS_G.AUDIO_F_REPLY_F_PHOTO
  | FOLDERS_G.VIDEO_F_REPLY_F_PHOTO
  | FOLDERS_G.IMAGE_F_REPLY_F_PHOTO

export type Reply_F_Video_G =
  | FOLDERS_G.AUDIO_F_REPLY_F_VIDEO
  | FOLDERS_G.VIDEO_F_REPLY_F_VIDEO
  | FOLDERS_G.IMAGE_F_REPLY_F_VIDEO

export type Reply_F_Post_G =
  | FOLDERS_G.AUDIO_F_REPLY_F_POST
  | FOLDERS_G.VIDEO_F_REPLY_F_POST
  | FOLDERS_G.IMAGE_F_REPLY_F_POST
