import {
  Controller,
  Delete,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { Context } from '@nestjs/graphql'
import { FileInterceptor } from '@nestjs/platform-express'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { NestJwtAuthGuard } from 'src/modules/auth/guards/nestj-auth-guard'
import { CommentForPhotoService_U } from 'src/modules/upload-and-remove/users/for-comment/services/for-photo.service'

@Public()
@UseGuards(NestJwtAuthGuard)
@Controller('user/comment_f_photo_u')
export class Comment_F_Photo_Controller_U {
  constructor(private readonly forCommentService: CommentForPhotoService_U) {}

  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Context() context,
    @Res() res,
  ) {
    const userId = context.req.user.id
    const ownerId = context.req.body.ownerId
    const parentOfOwnerId = context.req.body.parentOfOwnerId
    const image = await this.forCommentService.uploadFile(
      file,
      folder,
      'users',
      userId,
      ownerId,
      parentOfOwnerId,
      userId,
    )
    res.send(image)
  }

  @Delete('/delete/:folder/:file_name')
  async removeFile(
    @Param('file_name') file_name: string,
    @Param('folder') folder: any,
    @Context() context,
    @Res() res,
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
    res.send(isDeleted)
  }
}
