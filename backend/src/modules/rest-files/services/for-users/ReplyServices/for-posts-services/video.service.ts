import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForVideo_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'

import { ReplyForPost_U } from '../../../../../replies/user-replies/entities/reply-f-post.entity'
import { Video_F_Reply_F_Post_U } from '../../../../entities/users/entities-for-replies/video-f-post.entity'

@Injectable()
export class Video_F_Reply_F_Post_Service_U extends BaseFileCRUDService<
  Video_F_Reply_F_Post_U,
  ReplyForPost_U
> {
  constructor(
    @InjectRepository(Video_F_Reply_F_Post_U)
    protected repository: Repository<Video_F_Reply_F_Post_U>,
    @InjectRepository(ReplyForPost_U)
    protected parent_repository: Repository<ReplyForPost_U>,
  ) {
    super(
      repository,
      Video_F_Reply_F_Post_U,
      parent_repository,
      ReplyForVideo_U,
      {
        parentAutoCreate: true,
        userRelation: true,
        receiverRelation: true,
        treeRelation:true
      },
    )
  }
}
