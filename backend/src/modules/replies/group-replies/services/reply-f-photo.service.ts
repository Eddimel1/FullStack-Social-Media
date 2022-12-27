import { Injectable } from '@nestjs/common'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm'
import { DataSource, TreeRepository } from 'typeorm'

import { ReplyForPhoto_G } from '../entities/reply-f-photo.entity'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'

import { Base_Closure_Tree_Reply_Service } from 'src/generics/generic-services/base-closure-tree-reply.service'

@Injectable()
export class ReplyForPhotoService_DB_G extends Base_Closure_Tree_Reply_Service<ReplyForPhoto_G> {
  constructor(
    @InjectRepository(ReplyForPhoto_G)
    tree_repository: TreeRepository<ReplyForPhoto_G>,
    @InjectDataSource()
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(ReplyForPhoto_G, tree_repository, dataSource, typeOrmConfigService)
  }
}
