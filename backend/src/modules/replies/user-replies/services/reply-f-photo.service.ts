import { Injectable } from '@nestjs/common'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { Base_Closure_Tree_Reply_Service } from 'src/generics/generic-services/base-closure-tree-reply.service'
import { DataSource, TreeRepository } from 'typeorm'

import { ReplyForPhoto_U } from '../entities/reply-f-photo.entity'

@Injectable()
export class ReplyForPhotoService_DB_U extends Base_Closure_Tree_Reply_Service<ReplyForPhoto_U> {
  constructor(
    @InjectRepository(ReplyForPhoto_U)
    tree_repository: TreeRepository<ReplyForPhoto_U>,
    @InjectDataSource()
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(ReplyForPhoto_U, tree_repository, dataSource, typeOrmConfigService)
  }
}
