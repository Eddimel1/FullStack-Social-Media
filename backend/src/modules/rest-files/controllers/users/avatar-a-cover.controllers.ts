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
import { ForCoverAndAvatar_U } from '../../../upload-and-remove/users/for-avatar-and-cover/for-avatar-and-cover.service'

@Public()
@UseGuards(NestJwtAuthGuard)
@Controller('user')
export class AvatarAndCoverController_U {
  constructor(private readonly forCoverAndAvatar_U: ForCoverAndAvatar_U) {}

  @Post('/upload/:folder')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('folder') folder,
    @Context() context,
    @Res()res
  ) {
    const userId = context.req.user.id
    const image = await this.forCoverAndAvatar_U.uploadFile(
      file,
      folder,
      userId,
    )
     res.send(image)
  }

  @Delete('/delete/:folder/:file_name')
  async removeFile(
    @Param('file_name') file_name: string,
    @Param('folder') folder: any,
    @Context() context,
    @Res()res
  ) {
    const userId = context.req.user.id
    console.log(file_name, folder)
    const isDeleted = await this.forCoverAndAvatar_U.removeFile(
        userId,
      folder,
      file_name,
    )
    res.send(isDeleted)
  }
}
