import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Audio_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/audio_post.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { Post_U } from 'src/modules/posts/user/entities/post.entity'

@Injectable()
export class Audio_F_Post_Service_U extends BaseFileCRUDService<
  Audio_F_Post_U,
  Post_U
> {
  constructor(
    @InjectRepository(Audio_F_Post_U)
    protected repository: Repository<Audio_F_Post_U>,
    @InjectRepository(Post_U)
    protected parent_repository: Repository<Post_U>,
  ) {
    super(repository, Audio_F_Post_U, parent_repository, Post_U, {
      parentAutoCreate: true,
    })
  }
}
