import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { G_Cover_EN } from 'src/modules/rest-files/entities/groups/avatar-and-cover/group-cover.entity'
import { Repository } from 'typeorm'


@Injectable()
export class CoverService_G {
  constructor(
    @InjectRepository(G_Cover_EN)
    private readonly coverRepository_G: Repository<G_Cover_EN>,
  ) {}

  async insertImage(id: number, url: string, filename: string) {
    const image = new G_Cover_EN()
    image.file_name = filename
    image.url = url
    image.ownerId = id
    return await this.coverRepository_G.save(image)
  }
  async deleteImageById(id: number) {
    return await this.coverRepository_G.delete({ id })
  }
  async deleteImageByOwnerId(user_id: number, file_name: string) {
    const isSuccess = await this.coverRepository_G
      .createQueryBuilder('image')
      .delete()
      .where({ ownerId: user_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}
