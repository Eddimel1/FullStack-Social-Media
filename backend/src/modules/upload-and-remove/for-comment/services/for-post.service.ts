import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ensureDir, writeFile, pathExists, remove } from 'fs-extra'
import * as path from 'path'
import { Audio_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/audio-f-post.entity'
import { Image_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/image-f-post.entity'
import { Video_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/video-f-post'
import { AudioCommentService_F_P } from 'src/modules/rest-files/services/CommentServices/for-posts-services/audio.service'
import { ImageCommentService_F_P } from 'src/modules/rest-files/services/CommentServices/for-posts-services/image.service'
import { VideoCommentService_F_P } from 'src/modules/rest-files/services/CommentServices/for-posts-services/video.service'
import { FOR_POST_T } from '../../shared-types/file-system'



const storageP = '../../../../storage'
@Injectable()
export class CommentForPostService_U {
  constructor(
    private readonly imageCommentService: ImageCommentService_F_P,
    private readonly videoCommentService: VideoCommentService_F_P,
    private readonly audioCommentService: AudioCommentService_F_P,
    private readonly configService: ConfigService,
  ) {}
  async uploadFile(
    file: Express.Multer.File,
    folder: FOR_POST_T,
    id: number,
  ): Promise<
    Image_F_Comment_F_Post | Video_F_Comment_F_Post | Audio_F_Comment_F_Post
  > {
    const path1 = path.join(__dirname, `${storageP}/${id}`)
    const path2 = path.join(__dirname, `${storageP}/${id}/${folder}`)
    const fileName = file.originalname

    await ensureDir(path1, (err) => console.log(err))
    await ensureDir(path2, (err) => console.log(err))

    const filePath = `${id}/${folder}/${fileName}`
    await writeFile(`storage/${id}/${folder}/${fileName}`, file.buffer)

    const url = `${this.configService.get('BASE_URL')}/${filePath}`

    return await this.invokeAppropriateServiceU(id, folder, fileName, url)
  }

  async removeFile(id: number, folder: string, file_name: string) {
    const _path = path.join(
      __dirname,
      `${storageP}/${id}/${folder}/${file_name}`,
    )
    const exists = await pathExists(_path)
    if (exists) {
      remove(_path, (err) => console.log('was not removed'))
      this.invokeAppropriateServiceD(id, folder, file_name)
    }

    return exists
  }

  async invokeAppropriateServiceU(
    id: number,
    folder: string,
    file_name: string,
    url: string,
  ) {
    const relation = folder as FOR_POST_T
    switch (relation) {
      case 'image_f_comment_f_post': {
        return await this.imageCommentService.insertImage(id, url, file_name)
      }
      case 'video_f_comment_f_post': {
        return await this.videoCommentService.insertVideo(id, url, file_name)
      }
      case 'audio_f_comment_f_post': {
        return await this.audioCommentService.insertAudio(id, url, file_name)
      }

      default:
        throw new Error('was provided  not existing relation')
    }
  }
  async invokeAppropriateServiceD(
    id: number,
    folder: string,
    file_name: string,
  ) {
    const relation = folder as FOR_POST_T
    switch (relation) {
      case 'image_f_comment_f_post': {
        return await this.imageCommentService.deleteImageByOwnerId(
          id,
          file_name,
        )
      }
      case 'video_f_comment_f_post': {
        return await this.videoCommentService.deleteVideoByOwnerId(
          id,
          file_name,
        )
      }
      case 'audio_f_comment_f_post': {
        return await this.audioCommentService.deleteAudioByOwnerId(
          id,
          file_name,
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
