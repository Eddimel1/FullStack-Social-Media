import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForPostEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'
import { Image_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-post.entity'

@Injectable()
export class Image_F_Reply_F_Post_Service_U extends BaseFileCRUDService<
  Image_F_Reply_F_Post_U,
  ReplyForPostEntity_U
> {
  constructor(
    @InjectRepository(Image_F_Reply_F_Post_U)
    protected repository: Repository<Image_F_Reply_F_Post_U>,
    @InjectRepository(ReplyForPostEntity_U)
    protected parent_repository: Repository<ReplyForPostEntity_U>,
  ) {
    super(
      repository,
      Image_F_Reply_F_Post_U,
      parent_repository,
      ReplyForPostEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
