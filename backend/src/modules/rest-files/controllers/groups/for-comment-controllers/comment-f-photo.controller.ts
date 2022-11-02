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
import { CommentForPhotoService_G } from 'src/modules/upload-and-remove/groups/for-comment/services/for-photo.service'
import { CommentForPhotoService_U } from 'src/modules/upload-and-remove/users/for-comment/services/for-photo.service'

@Public()
@UseGuards(NestJwtAuthGuard)
@Controller('group/comment_f_photo')
export class Comment_F_Photo_Controller_G {
  constructor(private readonly forCommentService: CommentForPhotoService_G) {}

  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Context() context,
  ) {
    const groupId = context.req.body.groupId
    const ownerId = context.req.body.ownerId
    const image = await this.forCommentService.uploadFile(
      file,
      folder,
      'groups',
      groupId,
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
    const groupId = context.req.body.groupId
    const ownerId = context.req.body.ownerId
    console.log(file_name, folder)
    const isDeleted = await this.forCommentService.removeFile(
      file_name,
      folder,
      'groups',
      groupId,
      ownerId,
    )
    return isDeleted
  }
}
