import { Injectable } from '@nestjs/common'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm'
import { DataSource, TreeRepository } from 'typeorm'

import { ReplyForPhotoEntity_G } from '../entities/reply-f-photo.entity'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'

import { Base_Closure_Tree_Reply_Service } from 'src/generics/generic-services/base-closure-tree-reply.service'

@Injectable()
export class ReplyForPhotoService_DB_G extends Base_Closure_Tree_Reply_Service<ReplyForPhotoEntity_G> {
  constructor(
    @InjectRepository(ReplyForPhotoEntity_G)
    tree_repository: TreeRepository<ReplyForPhotoEntity_G>,
    @InjectDataSource()
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(
      ReplyForPhotoEntity_G,
      tree_repository,
      dataSource,
      typeOrmConfigService,
    )
  }
}
