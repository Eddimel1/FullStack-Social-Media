import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Audio_F_Comment_F_Post_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/audio-f-post.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForPost_U } from 'src/modules/comments/user/entities/comment-for-post.entity'

@Injectable()
export class Audio_F_Comment_F_Post_Service_U extends BaseFileCRUDService<
  Audio_F_Comment_F_Post_U,
  CommentForPost_U
> {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Post_U)
    protected repository: Repository<Audio_F_Comment_F_Post_U>,
    @InjectRepository(CommentForPost_U)
    protected parent_repository: Repository<CommentForPost_U>,
  ) {
    super(
      repository,
      Audio_F_Comment_F_Post_U,
      parent_repository,
      CommentForPost_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
