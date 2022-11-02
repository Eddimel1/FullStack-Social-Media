import { U_Avatar_EN } from './../../../entities/users/avatar-and-cover/user-avatar.entity';

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service';



@Injectable()
export class AvatarService_U {
  constructor(
    @InjectRepository(U_Avatar_EN)
    private readonly userAvatarRepository: Repository<U_Avatar_EN>,
  ) {}

  async insertImage(id: number, url: string, filename: string) {
    const image = new U_Avatar_EN()
    image.file_name = filename
    image.url = url
    image.ownerId = id
    return await this.userAvatarRepository.save(image)
  }
  async deleteImageById(id: number) {
    return await this.userAvatarRepository.delete({ id })
  }
  async deleteImageByOwnerId(user_id: number, file_name: string) {
    const isSuccess = await this.userAvatarRepository
      .createQueryBuilder('image')
      .delete()
      .where({ ownerId: user_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}
