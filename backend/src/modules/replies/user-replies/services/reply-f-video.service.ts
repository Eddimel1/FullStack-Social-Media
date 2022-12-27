import { Injectable } from '@nestjs/common'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { Base_Closure_Tree_Reply_Service } from 'src/generics/generic-services/base-closure-tree-reply.service'
import { DataSource, TreeRepository } from 'typeorm'

import { ReplyForVideo_U } from '../entities/reply-f-video.entity'

@Injectable()
export class ReplyForVideoService_DB_U extends Base_Closure_Tree_Reply_Service<ReplyForVideo_U> {
  constructor(
    @InjectRepository(ReplyForVideo_U)
    tree_repository: TreeRepository<ReplyForVideo_U>,
    @InjectDataSource()
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(ReplyForVideo_U, tree_repository, dataSource, typeOrmConfigService)
  }
}
