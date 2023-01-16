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
} from 'src/global/global_interfaces/trees'

export abstract class Base_Closure_Tree_Service<Model extends { id: number }>
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
    const entity = await this.tree_repository.findOne({
      //@ts-ignore
      where: { id },
    })
    if (entity) return entity
    else throw new WasNotFound_EX('reply')
  }
  async findRoot(ownerId: number) {
    const root = await this.tree_repository.findOne({
      //@ts-ignore
      where: { ownerId },
    })
    if (root) return root
    else throw new WasNotFound_EX('root_reply')
  }
  async findRoots(ownerId: number) {
    const roots = await this.tree_repository.findAndCount({
      //@ts-ignore
      where: { ownerId, published: true },
      relations: ['user', 'audio', 'video', 'image', 'receiver'],
    })
    if (roots) return roots[0]
    else throw new WasNotFound_EX('root_replies')
  }
  async returnWholeTree() {
    const entity = await this.tree_repository.findTrees()

    if (entity) return entity
    else throw new WasNotFound_EX('reply')
  }

  async findDescendants(id: number, entity: EntityTarget<Model>) {
    const obj = {} as find_descendants_TR<Model>

    await this.dataSource.transaction(async (manager) => {
      const _entity = (await this.findRoot(id)) as unknown as Model
      const count =
        (await manager.getTreeRepository(entity).countDescendants(_entity)) || 0
      const descendants = await manager
        .getTreeRepository(entity)
        .findDescendants(_entity, { relations: ['user', 'receiver'] })
      obj.descendant_count = count
      obj.descendants = sanitizeUser_arr(descendants, 'user')
    })
    return obj
  }
  async findAncestors(id: number, entity: EntityTarget<Model>) {
    const obj = {} as find_ancestors_TR<Model>

    await this.dataSource.transaction(async (manager) => {
      const _entity = (await this.findRoot(id)) as unknown as Model
      const count =
        (await manager.getTreeRepository(entity).countAncestors(_entity)) || 0
      const ancestors = await manager
        .getTreeRepository(entity)
        .findAncestors(_entity, {
          depth: DEFAULT_PORTION,
          relations: ['user', 'receiver'],
        })
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
  async findDescendantsTrees(id: number, depth = 1) {
    const roots = await this.findRoots(id)
    const trees = []
    for await (const root of roots) {
      const entity = await this.tree_repository.findDescendantsTree(root, {
        depth,
        relations: ['user', 'receiver', 'image', 'video', 'audio'],
      })
      trees.push(entity)
    }
    console.log('TREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES : ', trees)
    return trees
  }

  async findAncestorsTree(id: number, depth = 1) {
    const entity = await this._findOne(id)

    return this.tree_repository.findAncestorsTree(entity, {
      depth,
      relations: ['user', 'receiver', 'image', 'video', 'audio'],
    })
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
    console.log('UPDATE : ', update)
    if (updateResult.affected > 0) {
      return this._findOne(updateResult.raw[0].id)
    }
  }

  async deleteOne(id: number) {
    const deleteResult = await this.tree_repository
      .createQueryBuilder('entity')
      .where(`id =:id`, { id })
      .delete()
      .returning('*')
      .execute()
    console.log('DELETE RESULT : ', deleteResult)
    return deleteResult.raw[0]
  }
}
