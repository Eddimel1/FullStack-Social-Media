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
import { ForPostService_U } from 'src/modules/upload-and-remove/users/for-post/for-post.service'

@Public()
@UseGuards(NestJwtAuthGuard)
@Controller('user/post')
export class PostFilesController_U {
  constructor(private readonly forPostService: ForPostService_U) {}

  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Context() context,
  ) {
    const userId = context.req.user.id
    const ownerId = context.req.body.ownerId
    const image = await this.forPostService.uploadFile(
      file,
      folder,
      'users',
      userId,
      ownerId,
      ownerId ? null : userId,
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
    const isDeleted = await this.forPostService.removeFile(
      file_name,
      folder,
      'users',
      userId,
      ownerId,
    )
    return isDeleted
  }
}
