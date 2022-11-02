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
import { ForGaleryService_U } from 'src/modules/upload-and-remove/users/for-galery/for-galery.service'

@Public()
@UseGuards(NestJwtAuthGuard)
@Controller('user/galery')
export class GaleryFilesController_U {
  constructor(private readonly forGaleryService: ForGaleryService_U) {}

  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Context() context,
  ) {
    const userId = context.req.user.id
    const ownerId = context.req.body.ownerId
    const image = await this.forGaleryService.uploadFile(
      file,
      folder,
      'users',
      userId,
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
    const isDeleted = await this.forGaleryService.removeFile(
      file_name,
      folder,
      'users',
      userId,
    )
    return isDeleted
  }
}
