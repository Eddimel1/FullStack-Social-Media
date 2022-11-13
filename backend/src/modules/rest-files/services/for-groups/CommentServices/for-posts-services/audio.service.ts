import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { Audio_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-post.entity'
import { CommentForPostEntity_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'

@Injectable()
export class Audio_F_Comment_F_Post_Service_G extends BaseFileCRUDService<
  Audio_F_Comment_F_Post_G,
  CommentForPostEntity_G
> {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Post_G)
    protected repository: Repository<Audio_F_Comment_F_Post_G>,
    @InjectRepository(CommentForPostEntity_G)
    protected parent_repository: Repository<CommentForPostEntity_G>,
  ) {
    super(
      repository,
      Audio_F_Comment_F_Post_G,
      parent_repository,
      CommentForPostEntity_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
