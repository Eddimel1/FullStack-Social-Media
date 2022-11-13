import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Audio_F_Comment_F_Photo_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/audio-f-photo.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForPhotoEntity_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'

@Injectable()
export class Audio_F_Comment_F_Photo_Service_U extends BaseFileCRUDService<
  Audio_F_Comment_F_Photo_U,
  CommentForPhotoEntity_U
> {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Photo_U)
    protected repository: Repository<Audio_F_Comment_F_Photo_U>,
    @InjectRepository(CommentForPhotoEntity_U)
    protected parent_repository: Repository<CommentForPhotoEntity_U>,
  ) {
    super(
      repository,
      Audio_F_Comment_F_Photo_U,
      parent_repository,
      CommentForPhotoEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
