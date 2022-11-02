import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Base_Upload_Remove_Service } from 'src/generic-services/base-upload.service'
import { Audio_F_Comment_F_Photo_Service_U } from 'src/modules/rest-files/services/for-users/CommentServices/for-photo-services/audio.service'
import { Image_F_Comment_F_Photo_Service_U } from 'src/modules/rest-files/services/for-users/CommentServices/for-photo-services/image.service'
import { Video_F_Comment_F_Photo_Service_U } from 'src/modules/rest-files/services/for-users/CommentServices/for-photo-services/video.service'
import { Comment_F_Photo_U } from 'src/modules/rest-files/types/user-types'

const storageP = '../../storage'

@Injectable()
export class CommentForPhotoService_U extends Base_Upload_Remove_Service<
  Image_F_Comment_F_Photo_Service_U,
  Video_F_Comment_F_Photo_Service_U,
  Audio_F_Comment_F_Photo_Service_U,
  Comment_F_Photo_U
> {
  constructor(
    private readonly galeryImageService_U: Image_F_Comment_F_Photo_Service_U,
    private readonly galeryVideoService_U: Video_F_Comment_F_Photo_Service_U,
    private readonly galeryAudioService_U: Audio_F_Comment_F_Photo_Service_U,
    configService: ConfigService,
  ) {
    super(configService, storageP)
  }

  async _invokeAppropriateService_Up(
    id: number,
    folder: string,
    file_name: string,
    url: string,
  ) {
    console.log('FOLDER : ', folder)
    const relation = folder as Comment_F_Photo_U
    switch (relation) {
      case 'image_f_comment_f_photo_u': {
        return await this.galeryImageService_U.insertOne(
          id,
          url,
          file_name,
          'image_f_comment_f_photo_u',
        )
      }
      case 'video_f_comment_f_photo_u': {
        return await this.galeryVideoService_U.insertOne(
          id,
          url,
          file_name,
          'video_f_comment_f_photo_u',
        )
      }
      case 'audio_f_comment_f_photo_u': {
        return await this.galeryAudioService_U.insertOne(
          id,
          url,
          file_name,
          'audio_f_comment_f_photo_u',
        )
      }

      default:
        throw new Error('was provided  not existing relation')
    }
  }
  async _invokeAppropriateService_Del(
    id: number,
    folder: string,
    file_name: string,
  ) {
    const relation = folder as Comment_F_Photo_U
    switch (relation) {
      case 'image_f_comment_f_photo_u': {
        return await this.galeryImageService_U.deleteOneByOwnerId(
          id,
          file_name,
          'image_f_comment_f_photo_u',
        )
      }
      case 'video_f_comment_f_photo_u': {
        return await this.galeryVideoService_U.deleteOneByOwnerId(
          id,
          file_name,
          'video_f_comment_f_photo_u',
        )
      }
      case 'audio_f_comment_f_photo_u': {
        return await this.galeryAudioService_U.deleteOneByOwnerId(
          id,
          file_name,
          'audio_f_comment_f_photo_u',
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}

// const storageP = '../../../../storage'
// @Injectable()
// export class CommentForPhotoService_U {
//   constructor(
//     private readonly imageCommentService: Image_F_Comment_F_Photo_Service_U,
//     private readonly videoCommentService: Video_F_Comment_F_Photo_Service_U,
//     private readonly audioCommentService: Audio_F_Comment_F_Photo_Service_U,
//     private readonly configService: ConfigService,
//   ) {}
//   async uploadFile(
//     file: Express.Multer.File,
//     folder: FOR_PHOTO_T,
//     id: number,
//   ): Promise<
//     | Audio_F_Comment_F_Photo_U
//     | Video_F_Comment_F_Photo_U
//     | Image_F_Comment_F_Photo_U
//   > {
//     const path1 = path.join(__dirname, `${storageP}/${id}`)
//     const path2 = path.join(__dirname, `${storageP}/${id}/${folder}`)
//     const fileName = file.originalname

//     await ensureDir(path1, (err) => console.log(err))
//     await ensureDir(path2, (err) => console.log(err))

//     const filePath = `${id}/${folder}/${fileName}`
//     await writeFile(`storage/${id}/${folder}/${fileName}`, file.buffer)

//     const url = `${this.configService.get('BASE_URL')}/${filePath}`

//     return await this.invokeAppropriateServiceU(id, folder, fileName, url)
//   }

//   async removeFile(id: number, folder: string, file_name: string) {
//     const _path = path.join(
//       __dirname,
//       `${storageP}/${id}/${folder}/${file_name}`,
//     )
//     const exists = await pathExists(_path)
//     if (exists) {
//       remove(_path, (err) => console.log('was not removed'))
//       this.invokeAppropriateServiceD(id, folder, file_name)
//     }

//     return exists
//   }

//   async invokeAppropriateServiceU(
//     id: number,
//     folder: string,
//     file_name: string,
//     url: string,
//   ) {
//     const relation = folder as FOR_PHOTO_T
//     switch (relation) {
//       case 'image_f_comment_f_photo': {
//         return await this.imageCommentService.insertImage(id, url, file_name)
//       }
//       case 'video_f_comment_f_photo': {
//         return await this.videoCommentService.insertVideo(id, url, file_name)
//       }
//       case 'audio_f_comment_f_photo': {
//         return await this.audioCommentService.insertAudio(id, url, file_name)
//       }

//       default:
//         throw new Error('was provided no existing relation')
//     }
//   }
//   async invokeAppropriateServiceD(
//     id: number,
//     folder: string,
//     file_name: string,
//   ) {
//     const relation = folder as FOR_PHOTO_T
//     switch (relation) {
//       case 'image_f_comment_f_photo': {
//         return await this.imageCommentService.deleteImageByOwnerId(
//           id,
//           file_name,
//         )
//       }
//       case 'video_f_comment_f_photo': {
//         return await this.videoCommentService.deleteVideoByOwnerId(
//           id,
//           file_name,
//         )
//       }
//       case 'audio_f_comment_f_photo': {
//         return await this.audioCommentService.deleteAudioByOwnerId(
//           id,
//           file_name,
//         )
//       }

//       default:
//         throw new Error('was provided no existing relation')
//     }
//   }
// }
