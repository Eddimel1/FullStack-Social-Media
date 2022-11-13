import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForPhotoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'
import { Video_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-photo.entity'

@Injectable()
export class Video_F_Reply_F_Photo_Service_G extends BaseFileCRUDService<
  Video_F_Reply_F_Photo_G,
  ReplyForPhotoEntity_G
> {
  constructor(
    @InjectRepository(Video_F_Reply_F_Photo_G)
    protected repository: Repository<Video_F_Reply_F_Photo_G>,
    @InjectRepository(ReplyForPhotoEntity_G)
    protected parent_repository: Repository<ReplyForPhotoEntity_G>,
  ) {
    super(
      repository,
      Video_F_Reply_F_Photo_G,
      parent_repository,
      ReplyForPhotoEntity_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
