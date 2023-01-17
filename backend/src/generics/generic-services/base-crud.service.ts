import {
  WasNotFound_EX,
  WasNotUpdated_EX,
} from '../../global/exceptions/db-exceptions'
import { Repository } from 'typeorm'
import {
  Crud_WO_Owner,
  Crud_W_Owner,
  FindAll_W_Owner,
  FindAll_W_Owner_PublishedOnly,
} from 'src/generics/generic-interfaces/base-crud-interface'
import { DEFAULT_PORTION } from 'src/global/constants/db.constants'

import { forPagination } from 'src/global/globalUtils/transforms/transforms'
import { findAll_Generic_O } from '../../global/globalDtos/output.dto'

export abstract class BaseCRUDService<Model extends { id: any; ownerId?: any }>
  implements Crud_W_Owner<Model>
{
  constructor(protected repository: Repository<Model>) {}

  async findOne(ownerId: number, id: number, alias: string): Promise<Model> {
    const entity = await this.repository
      .createQueryBuilder(alias)
      .where(`${alias}.ownerId=:ownerId`)
      .andWhere(`${alias}.id =:id`, {
        ownerId,
        id,
      })
      .getOne()
    if (entity) return entity
    else throw new WasNotFound_EX(`${alias} was not found`)
  }
  async updateOne<dto extends Record<string, any>>(
    ownerId: number,
    id: number,
    update: dto,
    alias: string,
  ): Promise<Model> {
    const entity = await this.repository
      .createQueryBuilder(alias)
      .where(`ownerId =:ownerId`, { ownerId })
      .andWhere(`id =:id`, {
        id,
      })
      .update()
      .set(update)
      .returning('*')
      .execute()
    console.log('OWNERID : ', ownerId, 'ID : ', id)
    console.log('ENTITY : ', entity)
    console.log('UPDATE : ', update)
    if (entity && entity.affected > 0) {
      const _entity = await this.repository.findOne({
        //@ts-ignore
        where: { id, ownerId: entity.ownerId },
      })
      console.log(_entity)
      return _entity
    } else throw new WasNotUpdated_EX(`${alias} was not updated`)
  }

  async removeOne(ownerId: number, id: number, alias: string): Promise<Model> {
    const deleteResult = await this.repository
      .createQueryBuilder(alias)
      .where(`ownerId=:ownerId`)
      .andWhere(`id =:id`, {
        ownerId,
        id,
      })
      .delete()
      .returning('*')
      .execute()

    return deleteResult.raw[0]
  }
}

export abstract class BaseCRUDService_WO_Owner<Model>
  implements Crud_WO_Owner<Model>
{
  constructor(protected repository: Repository<Model>) {}

  async findOne(id: number, alias: string): Promise<Model> {
    const entity = await this.repository
      .createQueryBuilder(alias)
      .where(`${alias}.id =:id`, { id })
      .getOne()
    if (entity) return entity
    else throw new WasNotFound_EX(`${alias} was not found`)
  }

  async updateOne<dto extends Record<string, any>>(
    id: number,
    update: dto,
    alias: string,
  ): Promise<Model> {
    const entity = await this.repository
      .createQueryBuilder(alias)
      .where(`id =:id`, { id })
      .update()
      .set(update)
      .returning('*')
      .execute()
    console.log(entity)
    if (entity && entity.affected > 0) {
      const _entity = await this.repository.findOne({
        //@ts-ignore
        where: { id, ownerId: entity.ownerId },
      })
      console.log(_entity)
      return _entity
    } else throw new WasNotUpdated_EX(`${alias} was not updated`)
  }

  async removeOne(id: number, alias: string): Promise<Model> {
    console.log('in REMOVE ONE')

    const deleteResult = await this.repository
      .createQueryBuilder(alias)
      .where(`id =:id`, { id })
      .delete()
      .returning('*')
      .execute()

    return deleteResult.raw[0]
  }
}

export abstract class Base_Crud_W_FindAll<
    Model extends { id: number; ownerId?: number },
  >
  extends BaseCRUDService<Model>
  implements
    Crud_W_Owner<Model>,
    FindAll_W_Owner<Model>,
    FindAll_W_Owner_PublishedOnly<Model>
{
  async findAll(ownerId: number, alias: string, page = 1, limit?: number) {
    const entities = await this.repository.findAndCount({
      where: { ownerId: ownerId as any },

      //   take: limit || DEFAULT_PORTION,
      //   skip: page,
    })

    if (entities) return forPagination(entities, page)
    else throw new WasNotFound_EX(alias)
  }

  async findAllPublished(
    ownerId: number,
    alias: string,
    page = 1,
    limit?: number,
  ) {
    const entities = await this.repository.findAndCount({
      //@ts-ignore
      where: { ownerId: ownerId as any, published: true as any },

      //   take: limit || DEFAULT_PORTION,
      //   skip: page,
    })
    console.log('ENTITIES : ', entities)
    if (entities) return forPagination(entities, page)
    else throw new WasNotFound_EX(alias)
  }
}
