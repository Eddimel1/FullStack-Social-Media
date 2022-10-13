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
import { FileInterceptor } from '@nestjs/platform-express'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { NestJwtAuthGuard } from 'src/modules/auth/guards/nestj-auth-guard'

import { ForPostService } from 'src/modules/upload-and-remove/for-post/for-post.service'

@Controller('post')
export class PostFilesController {
  constructor(private readonly forPostService: ForPostService) {}
  @Public()
  @UseGuards(NestJwtAuthGuard)
  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Req() req,
  ) {
    const id = req.user.id
    const image = await this.forPostService.uploadFile(file, folder, id)
    return image
  }

  @Delete('/delete/:folder/:file_name')
  async removeFile(
    @Param('file_name') file_name: string,
    @Param('folder') folder: string,
    @Req() req,
  ) {
    const user_id = req.user.id
    console.log(file_name, folder)
    const isDeleted = await this.forPostService.removeFile(
      user_id,
      folder,
      file_name,
    )
    return isDeleted
  }
}
