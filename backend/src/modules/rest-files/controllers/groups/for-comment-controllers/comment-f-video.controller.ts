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
import { CommentForVideoService_G } from 'src/modules/upload-and-remove/groups/for-comment/services/for-video.service'
import { CommentForVideoService_U } from 'src/modules/upload-and-remove/users/for-comment/services/for-video.service'

@Controller('group/comment_f_video')
export class Comment_F_Video_Controller_G {
  constructor(private readonly forCommentService: CommentForVideoService_G) {}
  @Public()
  @UseGuards(NestJwtAuthGuard)
  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Context() context,
  ) {
    const groupId = context.req.body.groupId
    const ownerId = context.req.body.ownerId
    const userId = context.req.user.id
    const parentOfOwnerId = context.req.body.parentOfOwnerId
    const image = await this.forCommentService.uploadFile(
      file,
      folder,
      'groups',
      groupId,
      ownerId,
      parentOfOwnerId,
      userId
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
