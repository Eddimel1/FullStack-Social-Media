export enum FOLDERS {
  IMAGES = 'images',
  VIDEOS = 'videos',
  AUDIO = 'audio',
  POST_IMAGE = 'post_image',
  POST_VIDEO = 'post_video',
  POST_AUDIO = 'post_audio',
  COMMENT_IMAGE = 'comment_image',
  COMMENT_VIDEO = 'comment_video',
  COMMENT_AUDIO = 'comment_audio',
}

export type folderT =
  | FOLDERS.IMAGES
  | FOLDERS.VIDEOS
  | FOLDERS.AUDIO
  | FOLDERS.POST_IMAGE
  | FOLDERS.POST_VIDEO
  | FOLDERS.POST_AUDIO
  | FOLDERS.COMMENT_IMAGE
  | FOLDERS.COMMENT_VIDEO
  | FOLDERS.COMMENT_AUDIO
