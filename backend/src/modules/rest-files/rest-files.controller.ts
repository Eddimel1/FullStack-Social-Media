// import { UserService } from '../user/services/user.service'
// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   UseInterceptors,
//   UploadedFile,
//   UseGuards,
//   Req,
// } from '@nestjs/common'
// import { CreateRestFileDto } from './dto/create-rest-file.dto'
// import { UpdateRestFileDto } from './dto/update-rest-file.dto'
// import { FileInterceptor } from '@nestjs/platform-express/multer'
// import { Public } from '../auth/decorators/public-decorator'
// import { NestJwtAuthGuard } from '../auth/guards/nestj-auth-guard'
// import { ImageService } from './services/GaleryServices/image.service'


// @Controller()
// export class RestFilesController {
//   constructor(
//     private readonly imageService: ImageService,
//   ) {}
//   //different folderTypes = images , post_images , comment_images
//   @Public()
//   @UseGuards(NestJwtAuthGuard)
//   @Post('/upload/:folder')
//   @UseInterceptors(FileInterceptor('file'))
//   async create(
//     @UploadedFile() file: Express.Multer.File,
//     @Param('folder') folder,
//     @Req() req,
//   ) {
//     const id = req.user.id
//     const image = await this.restFilesService.uploadFile(file, folder, id)
//     return image
//   }

//   @Delete('/delete/:folder/:file_name')
//   async removeFile(
//     @Param('file_name') file_name: string,
//     @Param('folder') folder: string,
//     @Req() req,
//   ) {
//     const user_id = req.user.id
//     console.log(file_name, folder)
//     const isDeleted = await this.restFilesService.removeFile(
//       user_id,
//       folder,
//       file_name,
//     )
//     const isSuccess = await this.imageService.deleteImageByOwnerId(
//       user_id,
//       file_name,
//     )
//   }
//   @Delete('/delete_me')
//   async deleteUser(@Req() req) {
//     const user_id = req.user.id
//     const id = this.restFilesService.deleteUser(user_id)
//     console.log(id)
//     return id
//   }
// }
