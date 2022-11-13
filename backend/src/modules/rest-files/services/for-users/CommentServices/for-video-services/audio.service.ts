import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Audio_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/audio-f-video.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForVideoEntity_U } from 'src/modules/comments/user/entities/comment-for-video.entity'

@Injectable()
export class Audio_F_Comment_F_Video_Service_U extends BaseFileCRUDService<
  Audio_F_Comment_F_Video_U,
  CommentForVideoEntity_U
> {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Video_U)
    protected repository: Repository<Audio_F_Comment_F_Video_U>,
    @InjectRepository(CommentForVideoEntity_U)
    protected parent_repository: Repository<CommentForVideoEntity_U>,
  ) {
    super(
      repository,
      Audio_F_Comment_F_Video_U,
      parent_repository,
      CommentForVideoEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
