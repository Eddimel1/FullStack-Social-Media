import { FOLDERS_G, FOLDERS_U } from '../../../../../../../shared/index'
export type mapFiletypesT =
  | 'post_u'
  | 'comment_f_post_u'
  | 'comment_f_photo_u'
  | 'comment_f_video_u'
  | 'reply_f_photo_u'
  | 'reply_f_post_u'
  | 'reply_f_video_u'
  | 'post_g'
  | 'comment_f_post_g'
  | 'comment_f_photo_g'
  | 'comment_f_video_g'
  | 'reply_f_photo_g'
  | 'reply_f_post_g'
  | 'reply_f_video_g'
export const getFoldersFromType = ({
  type,
  mainEntity = 'user',
}: {
  type: mapFiletypesT
  mainEntity?: 'group' | 'user'
}) => {
  if (mainEntity === 'user') {
    switch (type) {
      case 'post_u':
        return {
          image: FOLDERS_U.IMAGE_F_POST,
          video: FOLDERS_U.VIDEO_F_POST,
          audio: FOLDERS_U.AUDIO_F_POST,
        }
      case 'comment_f_post_u':
        return {
          image: FOLDERS_U.IMAGE_F_COMMENT_F_POST,
          video: FOLDERS_U.VIDEO_F_COMMENT_F_POST,
          audio: FOLDERS_U.AUDIO_F_COMMENT_F_POST,
        }
      case 'comment_f_photo_u':
        return {
          image: FOLDERS_U.IMAGE_F_COMMENT_F_PHOTO,
          video: FOLDERS_U.VIDEO_F_COMMENT_F_PHOTO,
          audio: FOLDERS_U.AUDIO_F_COMMENT_F_PHOTO,
        }
      case 'comment_f_video_u':
        return {
          image: FOLDERS_U.IMAGE_F_COMMENT_F_VIDEO,
          video: FOLDERS_U.VIDEO_F_COMMENT_F_VIDEO,
          audio: FOLDERS_U.AUDIO_F_COMMENT_F_VIDEO,
        }
      case 'reply_f_photo_u':
        return {
          image: FOLDERS_U.IMAGE_F_REPLY_F_PHOTO,
          video: FOLDERS_U.VIDEO_F_REPLY_F_PHOTO,
          audio: FOLDERS_U.AUDIO_F_REPLY_F_PHOTO,
        }
      case 'reply_f_video_u':
        return {
          image: FOLDERS_U.IMAGE_F_REPLY_F_VIDEO,
          video: FOLDERS_U.VIDEO_F_REPLY_F_VIDEO,
          audio: FOLDERS_U.AUDIO_F_REPLY_F_VIDEO,
        }
      case 'reply_f_post_u':
        return {
          image: FOLDERS_U.IMAGE_F_REPLY_F_POST,
          video: FOLDERS_U.VIDEO_F_REPLY_F_POST,
          audio: FOLDERS_U.AUDIO_F_REPLY_F_POST,
        }
    }
  } else if (mainEntity === 'group') {
    switch (type) {
      case 'post_g':
        return {
          image: FOLDERS_G.IMAGE_F_POST,
          video: FOLDERS_G.VIDEO_F_POST,
          audio: FOLDERS_G.AUDIO_F_POST,
        }
      case 'comment_f_post_g':
        return {
          image: FOLDERS_G.IMAGE_F_COMMENT_F_POST,
          video: FOLDERS_G.VIDEO_F_COMMENT_F_POST,
          audio: FOLDERS_G.AUDIO_F_COMMENT_F_POST,
        }
      case 'comment_f_photo_g':
        return {
          image: FOLDERS_G.IMAGE_F_COMMENT_F_PHOTO,
          video: FOLDERS_G.VIDEO_F_COMMENT_F_PHOTO,
          audio: FOLDERS_G.AUDIO_F_COMMENT_F_PHOTO,
        }
      case 'comment_f_video_g':
        return {
          image: FOLDERS_G.IMAGE_F_COMMENT_F_VIDEO,
          video: FOLDERS_G.VIDEO_F_COMMENT_F_VIDEO,
          audio: FOLDERS_G.AUDIO_F_COMMENT_F_VIDEO,
        }
      case 'reply_f_photo_g':
        return {
          image: FOLDERS_G.IMAGE_F_REPLY_F_PHOTO,
          video: FOLDERS_G.VIDEO_F_REPLY_F_PHOTO,
          audio: FOLDERS_G.AUDIO_F_REPLY_F_PHOTO,
        }
      case 'reply_f_video_g':
        return {
          image: FOLDERS_G.IMAGE_F_REPLY_F_VIDEO,
          video: FOLDERS_G.VIDEO_F_REPLY_F_VIDEO,
          audio: FOLDERS_G.AUDIO_F_REPLY_F_VIDEO,
        }
      case 'reply_f_post_g':
        return {
          image: FOLDERS_U.IMAGE_F_REPLY_F_POST,
          video: FOLDERS_G.VIDEO_F_REPLY_F_POST,
          audio: FOLDERS_G.AUDIO_F_REPLY_F_POST,
        }
    }
  }
}
