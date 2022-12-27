import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Image_F_Comment_F_Photo_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/image-f-photo.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForPhoto_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'

@Injectable()
export class Image_F_Comment_F_Photo_Service_U extends BaseFileCRUDService<
  Image_F_Comment_F_Photo_U,
  CommentForPhoto_U
> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Photo_U)
    protected repository: Repository<Image_F_Comment_F_Photo_U>,
    @InjectRepository(CommentForPhoto_U)
    protected parent_repository: Repository<CommentForPhoto_U>,
  ) {
    super(
      repository,
      Image_F_Comment_F_Photo_U,
      parent_repository,
      CommentForPhoto_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
