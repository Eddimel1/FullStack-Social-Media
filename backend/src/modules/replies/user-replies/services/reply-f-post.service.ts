import { Injectable } from '@nestjs/common'
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { Base_Closure_Tree_Reply_Service } from 'src/generics/generic-services/base-closure-tree-reply.service'
import { DataSource, TreeRepository } from 'typeorm'
import { ReplyForPost_U } from '../entities/reply-f-post.entity'

@Injectable()
export class ReplyForPostService_DB_U extends Base_Closure_Tree_Reply_Service<ReplyForPost_U> {
  constructor(
    @InjectRepository(ReplyForPost_U)
    tree_repository: TreeRepository<ReplyForPost_U>,
    @InjectDataSource()
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(ReplyForPost_U, tree_repository, dataSource, typeOrmConfigService)
  }
}
