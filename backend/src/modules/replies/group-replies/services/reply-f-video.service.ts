import { Injectable } from '@nestjs/common'
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { Base_Closure_Tree_Reply_Service } from 'src/generics/generic-services/base-closure-tree-reply.service'
import { TreeRepository, DataSource } from 'typeorm'
import { ReplyForVideo_G } from '../entities/reply-f-video.entity'

@Injectable()
export class ReplyForVideoService_DB_G extends Base_Closure_Tree_Reply_Service<ReplyForVideo_G> {
  constructor(
    @InjectRepository(ReplyForVideo_G)
    tree_repository: TreeRepository<ReplyForVideo_G>,
    @InjectDataSource()
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(ReplyForVideo_G, tree_repository, dataSource, typeOrmConfigService)
  }
}
