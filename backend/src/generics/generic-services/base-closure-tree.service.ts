import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { DEFAULT_PORTION } from 'src/global/constants/db.constants'
import { WasNotFound_EX } from 'src/global/exceptions/db-exceptions'
import { Base_Closure_Tree } from 'src/generics/generic-interfaces/base-closure-tree.interface'

import { TreeRepository, DataSource, EntityTarget } from 'typeorm'
import { sanitizeUser_arr } from 'src/global/globalUtils/sanitizers/user.sanitizer'
import {
  find_descendants_TR,
  find_ancestors_TR,
  find_All_TR,
  isSuccess_TR,
} from 'src/global/global_interfaces/trees'

export abstract class Base_Closure_Tree_Service<Model>
  implements Base_Closure_Tree<Model>
{
  constructor(
    protected tree_repository: TreeRepository<Model>,
    private readonly dataSource: DataSource,
    private readonly typeOrmConfigService: TypeOrmConfigService,
  ) {
    this.dataSource.setOptions(this.typeOrmConfigService.createTypeOrmOptions())
  }
  async _findOne(id: number) {
    const entity = await this.tree_repository
      .createQueryBuilder('entity')
      .where('id=:id', { id })
      .getOne()

    if (entity) return entity
    else throw new WasNotFound_EX('reply')
  }
  async findRoot() {
    const root = await this.tree_repository
      .createQueryBuilder('entity')
      .where('entity.ownerId IS NOT NULL')
      .getOne()
    console.log('ROOT : ', root)
    if (root) return root
    else throw new WasNotFound_EX('root_reply')
  }
  async returnWholeTree() {
    const entity = await this.tree_repository.findTrees()

    if (entity) return entity
    else throw new WasNotFound_EX('reply')
  }

  async findDescendants(id: number, entity: EntityTarget<Model>) {
    const obj = {} as find_descendants_TR<Model>

    await this.dataSource.transaction(async (manager) => {
      const _entity = (await this._findOne(id)) as unknown as Model
      const count =
        (await manager.getTreeRepository(entity).countDescendants(_entity)) || 0
      const descendants = await manager
        .getTreeRepository(entity)
        .findDescendants(_entity, { relations: ['user'] })
      console.log('DESCEDANTS : ', sanitizeUser_arr(descendants, 'user'))
      obj.descendant_count = count
      obj.descendants = sanitizeUser_arr(descendants, 'user')
    })
    return obj
  }
  async findAncestors(id: number, entity: EntityTarget<Model>) {
    const obj = {} as find_ancestors_TR<Model>

    await this.dataSource.transaction(async (manager) => {
      const _entity = (await this._findOne(id)) as unknown as Model
      const count =
        (await manager.getTreeRepository(entity).countAncestors(_entity)) || 0
      const ancestors = await manager
        .getTreeRepository(entity)
        .findAncestors(_entity, { depth: DEFAULT_PORTION, relations: ['user'] })
      obj.ancestor_count = count
      obj.ancestors = sanitizeUser_arr(ancestors, 'user')
    })
    console.log(obj)
    return obj
  }
  async findAll_A_Count(id: number, entity: EntityTarget<Model>) {
    const descendants = await this.findDescendants(id, entity)
    const ancestors = await this.findAncestors(id, entity)
    return { ...descendants, ...ancestors } as unknown as find_All_TR<Model>
  }
  async findDescendantsTree(id: number) {
    const entity = await this._findOne(id)
    return this.tree_repository.findDescendantsTree(entity)
  }

  async findAncestorsTree(id: number) {
    const entity = await this._findOne(id)
    return this.tree_repository.findAncestorsTree(entity)
  }

  async updateOne(update: any) {
    const { replyId, ...rest } = update
    const updateResult = await this.tree_repository
      .createQueryBuilder('reply')
      .update()
      .set(rest)
      .where('id =:replyId', { replyId })
      .returning('*')
      .execute()
    console.log(updateResult.raw[0])
    return updateResult.raw[0]
  }

  async deleteOne(id: number) {
    const deleteResult = await this.tree_repository
      .createQueryBuilder('entity')
      .where('id =:id', { id })
      .delete()
      .execute()

    const isSuccess: isSuccess_TR = {
      isSuccess: deleteResult.affected > 0 ? true : false,
      id,
    }
    return isSuccess
  }
}
