import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForPhotoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'
import { Video_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-photo.entity'

@Injectable()
export class Video_F_Reply_F_Photo_Service_U extends BaseFileCRUDService<
  Video_F_Reply_F_Photo_U,
  ReplyForPhotoEntity_U
> {
  constructor(
    @InjectRepository(Video_F_Reply_F_Photo_U)
    protected repository: Repository<Video_F_Reply_F_Photo_U>,
    @InjectRepository(ReplyForPhotoEntity_U)
    protected parent_repository: Repository<ReplyForPhotoEntity_U>,
  ) {
    super(
      repository,
      Video_F_Reply_F_Photo_U,
      parent_repository,
      ReplyForPhotoEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
