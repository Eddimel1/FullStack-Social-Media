import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { USER_RELATIONS } from 'src/GlobalTypes/db.types'
import { ImageEntity } from '../../entities/galery-entities/image.entity'

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}

  async insertImage(id: number, url: string, filename: string) {
    const image = new ImageEntity()
    image.file_name = filename
    image.url = url
    image.ownerId = id
    return await this.imageRepository.save(image)
  }
  async deleteImageById(id: number) {
    return await this.imageRepository.delete({ id })
  }
  async deleteImageByOwnerId(user_id: number, file_name: string) {
    const isSuccess = await this.imageRepository
      .createQueryBuilder(USER_RELATIONS.IMAGES)
      .delete()
      .where({ ownerId: user_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}
