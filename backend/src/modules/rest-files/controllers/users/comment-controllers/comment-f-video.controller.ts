import {
  Controller,
  Delete,
  Param,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { Context } from '@nestjs/graphql'
import { FileInterceptor } from '@nestjs/platform-express'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { NestJwtAuthGuard } from 'src/modules/auth/guards/nestj-auth-guard'
import { CommentForVideoService_U } from 'src/modules/upload-and-remove/users/for-comment/services/for-video.service'

@Public()
@UseGuards(NestJwtAuthGuard)
@Controller('user/comment_f_video')
export class Comment_F_Video_Controller_U {
  constructor(private readonly forCommentService: CommentForVideoService_U) {}

  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Context() context,
  ) {
    const userId = context.req.user.id
    const ownerId = context.req.body.ownerId
    const image = await this.forCommentService.uploadFile(
      file,
      folder,
      'users',
      userId,
      ownerId,
    )
    return image
  }

  @Delete('/delete/:folder/:file_name')
  async removeFile(
    @Param('file_name') file_name: string,
    @Param('folder') folder: any,
    @Context() context,
  ) {
    const userId = context.req.user.id
    const ownerId = context.req.body.ownerId
    console.log(file_name, folder)
    const isDeleted = await this.forCommentService.removeFile(
      file_name,
      folder,
      'users',
      userId,
      ownerId,
    )
    return isDeleted
  }
}
