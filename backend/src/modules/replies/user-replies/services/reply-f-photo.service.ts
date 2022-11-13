import { Injectable } from '@nestjs/common'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { Base_Closure_Tree_Reply_Service } from 'src/generics/generic-services/base-closure-tree-reply.service'
import { DataSource, TreeRepository } from 'typeorm'

import { ReplyForPhotoEntity_U } from '../entities/reply-f-photo.entity'

@Injectable()
export class ReplyForPhotoService_DB_U extends Base_Closure_Tree_Reply_Service<ReplyForPhotoEntity_U> {
  constructor(
    @InjectRepository(ReplyForPhotoEntity_U)
    tree_repository: TreeRepository<ReplyForPhotoEntity_U>,
    @InjectDataSource()
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(
      ReplyForPhotoEntity_U,
      tree_repository,
      dataSource,
      typeOrmConfigService,
    )
  }
}
