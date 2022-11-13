import { U_Cover_EN } from './../../../entities/users/avatar-and-cover/user-cover.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'

@Injectable()
export class CoverService_U {
  constructor(
    @InjectRepository(U_Cover_EN)
    private readonly userCoverRepository: Repository<U_Cover_EN>,
  ) {}

  async insertImage(id: number, url: string, filename: string) {
    const image = new U_Cover_EN()
    image.file_name = filename
    image.url = url
    image.ownerId = id
    return await this.userCoverRepository.save(image)
  }
  async deleteImageById(id: number) {
    return await this.userCoverRepository.delete({ id })
  }
  async deleteImageByOwnerId(user_id: number, file_name: string) {
    const isSuccess = await this.userCoverRepository
      .createQueryBuilder('image')
      .delete()
      .where({ ownerId: user_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}
