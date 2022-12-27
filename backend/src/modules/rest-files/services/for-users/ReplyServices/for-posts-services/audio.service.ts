import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForPost_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'
import { Audio_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-post.entity'

@Injectable()
export class Audio_F_Reply_F_Post_Service_U extends BaseFileCRUDService<
  Audio_F_Reply_F_Post_U,
  ReplyForPost_U
> {
  constructor(
    @InjectRepository(Audio_F_Reply_F_Post_U)
    protected repository: Repository<Audio_F_Reply_F_Post_U>,
    @InjectRepository(ReplyForPost_U)
    protected parent_repository: Repository<ReplyForPost_U>,
  ) {
    super(
      repository,
      Audio_F_Reply_F_Post_U,
      parent_repository,
      ReplyForPost_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
