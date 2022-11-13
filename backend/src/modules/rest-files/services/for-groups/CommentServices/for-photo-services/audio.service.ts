import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Audio_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-photo.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForPhotoEntity_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'

@Injectable()
export class Audio_F_Comment_F_Photo_Service_G extends BaseFileCRUDService<
  Audio_F_Comment_F_Photo_G,
  CommentForPhotoEntity_G
> {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Photo_G)
    protected repository: Repository<Audio_F_Comment_F_Photo_G>,
    @InjectRepository(CommentForPhotoEntity_G)
    protected parent_repository: Repository<CommentForPhotoEntity_G>,
  ) {
    super(
      repository,
      Audio_F_Comment_F_Photo_G,
      parent_repository,
      CommentForPhotoEntity_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
