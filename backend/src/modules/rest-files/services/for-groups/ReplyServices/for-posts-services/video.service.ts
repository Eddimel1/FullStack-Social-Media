import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForPostEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'
import { Video_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-post.entity'

@Injectable()
export class Video_F_Reply_F_Post_Service_G extends BaseFileCRUDService<
  Video_F_Reply_F_Post_G,
  ReplyForPostEntity_G
> {
  constructor(
    @InjectRepository(Video_F_Reply_F_Post_G)
    protected repository: Repository<Video_F_Reply_F_Post_G>,
    @InjectRepository(ReplyForPostEntity_G)
    protected parent_repository: Repository<ReplyForPostEntity_G>,
  ) {
    super(
      repository,
      Video_F_Reply_F_Post_G,
      parent_repository,
      ReplyForPostEntity_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
