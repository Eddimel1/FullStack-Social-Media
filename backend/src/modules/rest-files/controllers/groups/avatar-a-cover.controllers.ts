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
import { ForCoverAndAvatar_G } from '../../../upload-and-remove/groups/for-avatar-and-cover/for-avatar-and-cover.service'

@Public()
@UseGuards(NestJwtAuthGuard)
@Controller('group')
export class AvatarAndCoverController_U {
  constructor(private readonly forCoverAndAvatar_G: ForCoverAndAvatar_G) {}

  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Context() context,
  ) {
    const groupId = context.req.body.groupId
    const image = await this.forCoverAndAvatar_G.uploadFile(
      file,
      folder,
      groupId,
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
    console.log(file_name, folder)
    const isDeleted = await this.forCoverAndAvatar_G.removeFile(
      groupId,
      folder,
      file_name,
    )
    return isDeleted
  }
}
