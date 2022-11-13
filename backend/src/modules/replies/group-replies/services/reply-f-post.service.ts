import { Injectable } from '@nestjs/common'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { Base_Closure_Tree_Reply_Service } from 'src/generics/generic-services/base-closure-tree-reply.service'
import { DataSource, TreeRepository } from 'typeorm'

import { ReplyForPostEntity_G } from '../entities/reply-f-post.entity'

@Injectable()
export class ReplyForPostService_DB_G extends Base_Closure_Tree_Reply_Service<ReplyForPostEntity_G> {
  constructor(
    @InjectRepository(ReplyForPostEntity_G)
    tree_repository: TreeRepository<ReplyForPostEntity_G>,
    @InjectDataSource()
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(
      ReplyForPostEntity_G,
      tree_repository,
      dataSource,
      typeOrmConfigService,
    )
  }
}
