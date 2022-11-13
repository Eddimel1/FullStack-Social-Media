import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { WasNotCreated_EX } from 'src/global/exceptions/db-exceptions'
import { Closure_Tree_Reply } from 'src/generics/generic-interfaces/base-closure-tree.interface'
import { CreateReply } from 'src/modules/replies/shared/dto/input.dto'
import { TreeRepository, DataSource } from 'typeorm'
import { Base_Closure_Tree_Service } from './base-closure-tree.service'

export abstract class Base_Closure_Tree_Reply_Service<Model>
  extends Base_Closure_Tree_Service<Model>
  implements Closure_Tree_Reply<Model>
{
  constructor(
    protected model: any,
    tree_repository: TreeRepository<Model>,
    dataSource: DataSource,
    typeOrmConfigService: TypeOrmConfigService,
  ) {
    super(tree_repository, dataSource, typeOrmConfigService)
    this.model = model
  }
  async create(create: CreateReply, userId: number) {
    const reply = create.replyId ? await this._findOne(create.replyId) : null
    const new_reply = new this.model()
    new_reply.text = create.text
    new_reply.userId = userId
    new_reply.parent = reply
    new_reply.ownerId = create.ownerId
    const created_reply = (await this.tree_repository.save(new_reply)) as Model
    if (created_reply) return created_reply
    else throw new WasNotCreated_EX('reply')
  }
}
