export enum RELATIONS_U {
  IMAGES = 'galery_images_u',
  AUDIO = 'galery_audios_u',
  VIDEOS = 'galery_videos_u',
  CHATS = 'chats_u',
  POSTS = 'posts_u',
  USERINFO = 'info_u',
  GROUPS = 'groups',
  AVATAR = 'avatar_u',
  COVER = 'cover_u',
}
export enum COMMENT_RELATIONS_U {
  AUDIO = 'audio_f_comment_u',
  VIDEO = 'video_f_comment_u',
  IMAGE = 'image_f_comment_u',
}

export enum COMMENTS_U {
  FOR_IMAGE = 'comments_f_galery_image_u',
  FOR_POST = 'comments_f_post_u',
  FOR_VIDEO = 'comments_f_galery_video_u',
}
export enum POST_RELATIONS_U {
  COMMENTS = 'comments_f_post_u',
  AUDIO = 'audio_f_post_u',
  VIDEO = 'video_f_post_u',
  IMAGE = 'image_f_post_u',
}

export enum CHAT_RELATIONS_U {
  MESSAGES = 'messages',
}

//------------------------//GROUPS

export enum RELATIONS_G {
  IMAGES = 'galery_images_g',
  AUDIO = 'galery_audios_g',
  VIDEOS = 'galery_videos_g',
  POSTS = 'posts_g',
  GROUP_INFO = 'info_g',
  AVATAR = 'avatar_g',
  COVER = 'cover_g',
}
export enum COMMENT_RELATIONS_G {
  COMMENTS_F_POST = 'comments_f_post_g',
  COMMENTS_F_VIDEO = 'comments_f_galery_video_g',
  COMMENTS_F_PHOTO = 'comments_f_galery_image_g',
}

export enum COMMENTS_G {
  FOR_IMAGE = 'comments_f_galery_image_g',
  FOR_POST = 'comments_f_post_g',
  FOR_VIDEO = 'comments_f_galery_video_g',
}
export enum POST_RELATIONS_G {
  COMMENTS = 'comments_f_post_g',
  AUDIO = 'audio_f_post_g',
  VIDEO = 'video_f_post_g',
  IMAGE = 'image_f_post_g',
}

export type rating = 0 | 1 | 2 | 3 | 4 | 5
