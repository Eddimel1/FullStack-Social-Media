import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { G_Avatar_EN } from 'src/modules/rest-files/entities/groups/avatar-and-cover/group-avatar.entity'
import { Repository } from 'typeorm'

@Injectable()
export class AvatarService_G {
  constructor(
    @InjectRepository(G_Avatar_EN)
    private readonly userAvatarRepository: Repository<G_Avatar_EN>,
  ) {}

  async insertImage(id: number, url: string, filename: string) {
    const image = new G_Avatar_EN()
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
