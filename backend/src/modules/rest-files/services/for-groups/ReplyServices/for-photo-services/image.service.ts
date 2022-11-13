import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForPhotoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'
import { Image_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-reply-f.entity'

@Injectable()
export class Image_F_Reply_F_Photo_Service_G extends BaseFileCRUDService<
  Image_F_Reply_F_Photo_G,
  ReplyForPhotoEntity_G
> {
  constructor(
    @InjectRepository(Image_F_Reply_F_Photo_G)
    protected repository: Repository<Image_F_Reply_F_Photo_G>,
    @InjectRepository(ReplyForPhotoEntity_G)
    protected parent_repository: Repository<ReplyForPhotoEntity_G>,
  ) {
    super(
      repository,
      Image_F_Reply_F_Photo_G,
      parent_repository,
      ReplyForPhotoEntity_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
