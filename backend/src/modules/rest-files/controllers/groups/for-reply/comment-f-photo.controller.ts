import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { Context } from '@nestjs/graphql'
import { FileInterceptor } from '@nestjs/platform-express'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { NestJwtAuthGuard } from 'src/modules/auth/guards/nestj-auth-guard'
import { ReplyForPhotoService_G } from 'src/modules/upload-and-remove/groups/for-reply/services/for-photo.service'


@Public()
@UseGuards(NestJwtAuthGuard)
@Controller('group/reply_f_photo')
export class Reply_F_Photo_Controller_G {
  constructor(private readonly forReplyService: ReplyForPhotoService_G) {}

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
    const image = await this.forReplyService.uploadFile(
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
    const isDeleted = await this.forReplyService.removeFile(
      file_name,
      folder,
      'groups',
      groupId,
      ownerId,
    )
    return isDeleted
  }
}
