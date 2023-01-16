
type _operations = 'upload' | 'delete'
import {
 FOLDERS_U
} from '../../../../../../../shared/index'
import { Audio_F_Post_U, Audio_F_Comment_F_Post_U, Audio_F_Comment_F_Photo_U, Audio_F_Comment_F_Video_U, Audio_F_Reply_F_Video_U, Audio_F_Reply_F_Post_U, Audio_F_Reply_F_Photo_U, Video_F_Post_U, Image_F_Post_U, Image_F_Comment_F_Photo_U, Image_F_Comment_F_Post_U, Image_F_Comment_F_Video_U, Image_F_Reply_F_Post_U, Image_F_Reply_F_Video_U, Video_F_Comment_F_Photo_U, Video_F_Comment_F_Post_U, Video_F_Comment_F_Video_U, Video_F_Reply_F_Post_U, Video_F_Reply_F_Video_U } from '../../../../../__generated__/types'


type _audioFolderType<T> = T extends  Audio_F_Post_U ? FOLDERS_U.AUDIO_F_POST : T extends  Audio_F_Comment_F_Post_U ? FOLDERS_U.AUDIO_F_COMMENT_F_POST : 
T extends  Audio_F_Comment_F_Photo_U ? FOLDERS_U.AUDIO_F_COMMENT_F_PHOTO : T extends  Audio_F_Comment_F_Video_U ? FOLDERS_U.AUDIO_F_COMMENT_F_VIDEO :
T extends  Audio_F_Reply_F_Video_U ? FOLDERS_U.AUDIO_F_REPLY_F_VIDEO : T extends  Audio_F_Reply_F_Video_U ? FOLDERS_U.AUDIO_F_REPLY_F_PHOTO : 
T extends  Audio_F_Reply_F_Post_U ? FOLDERS_U.AUDIO_F_REPLY_F_POST : never

type _imageFolderType<T> = T extends  Image_F_Post_U ? FOLDERS_U.IMAGE_F_POST : T extends  Image_F_Comment_F_Post_U ? FOLDERS_U.IMAGE_F_COMMENT_F_POST : 
T extends  Image_F_Comment_F_Photo_U ? FOLDERS_U.IMAGE_F_COMMENT_F_PHOTO : T extends  Image_F_Comment_F_Video_U ? FOLDERS_U.IMAGE_F_COMMENT_F_VIDEO :
T extends  Image_F_Reply_F_Video_U ? FOLDERS_U.IMAGE_F_REPLY_F_VIDEO : T extends  Image_F_Reply_F_Video_U ? FOLDERS_U.IMAGE_F_REPLY_F_PHOTO : 
T extends  Image_F_Reply_F_Post_U ? FOLDERS_U.IMAGE_F_REPLY_F_POST : never

type _videoFolderType<T> = T extends  Video_F_Post_U ? FOLDERS_U.VIDEO_F_POST : T extends  Video_F_Comment_F_Post_U ? FOLDERS_U.VIDEO_F_COMMENT_F_POST : 
T extends  Video_F_Comment_F_Photo_U ? FOLDERS_U.VIDEO_F_COMMENT_F_PHOTO : T extends  Video_F_Comment_F_Video_U ? FOLDERS_U.VIDEO_F_COMMENT_F_VIDEO :
T extends  Video_F_Reply_F_Video_U ? FOLDERS_U.VIDEO_F_REPLY_F_VIDEO : T extends  Video_F_Reply_F_Video_U ? FOLDERS_U.VIDEO_F_REPLY_F_PHOTO : 
T extends  Video_F_Reply_F_Post_U ? FOLDERS_U.VIDEO_F_REPLY_F_POST : never
export type assetType<AudioT,VideoT,ImageT> = {
  audio: {
    local_url: string
    file: File | null
    error: string
    entity: Omit<AudioT, 'createdAt' | 'updatedAt' | 'owner'> | null
    operation_type: `${_operations}/${_audioFolderType<AudioT>}` | null
  }
  video: {
    local_url: string
    file: File | null
    error: string
    entity: Omit<VideoT, 'createdAt' | 'updatedAt' | 'owner'> | null
    operation_type: `${_operations}/${_videoFolderType<VideoT>}` | null
  }
  image: {
    local_url: string
    file: File | null
    error: string
    entity: Omit<ImageT, 'createdAt' | 'updatedAt' | 'owner'> | null
    operation_type: `${_operations}/${_imageFolderType<ImageT>}` | null
  }
}
export type assetsInitial<AudioT,VideoT,ImageT> = assetType<AudioT,VideoT,ImageT> & {
  text: { value: string; error: string; type: 'text' | null }
  selected: string
  emoji: boolean
  published: boolean
  subject: string
  privacy: string
  number_of_files: number
}

type _type = 'post' | 'comment' | 'reply'
export function getAssetsInitialState<AudioT,VideoT,ImageT>(type:_type){
    const obj = {
        text: { value: '', error: '', type: 'text' },
        image: {
          local_url: '',
          file: null,
          error: '',
          operation_type: null,
          entity: null,
        },
        audio: {
          local_url: '',
          file: null,
          error: '',
          operation_type: null,
          entity: null,
        },
        video: {
          local_url: '',
          file: null,
          error: '',
          operation_type: null,
          entity: null,
        },
        selected: '',
        emoji: false,
        published: false,
        privacy: 'public',
        subject: 'IT',
        number_of_files: 0,
      } 
      if(type === 'post') {
        return obj as assetsInitial<AudioT,VideoT,ImageT>
     }
      if(type === 'comment' || type === 'reply'){
            delete obj.privacy
            delete obj.subject
            return obj as Omit<assetsInitial<AudioT,VideoT,ImageT>,'privacy' | 'subject'>
      }
    
      
}
