import {
  WasNotFound_EX,
  WasNotUpdated_EX,
} from '../../global/exceptions/db-exceptions'
import { Repository } from 'typeorm'
import {
  Crud_WO_Owner,
  Crud_W_Owner,
  FindAll_W_Owner,
} from 'src/generics/generic-interfaces/base-crud-interface'
import { DEFAULT_PORTION } from 'src/global/constants/db.constants'
import {
  Delete_Message_W_Owner,
  Delete_Message_WO_Owner,
} from 'src/global/globalDtos/output.dto'
import { forPagination } from 'src/global/globalUtils/transforms/transforms'

export abstract class BaseCRUDService<Model> implements Crud_W_Owner<Model> {
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
  ): Promise<dto> {
    const entity = await this.repository
      .createQueryBuilder(alias)
      .where(`ownerId =:ownerId`)
      .andWhere(`id =:id`, {
        ownerId,
        id,
      })
      .update()
      .set(update)
      .returning('*')
      .execute()
    console.log(entity)
    if (entity && entity.affected > 0) return entity.raw[0] as Promise<dto>
    else throw new WasNotUpdated_EX(`${alias} was not updated`)
  }

  async removeOne(
    ownerId: number,
    id: number,
    alias: string,
  ): Promise<Delete_Message_W_Owner> {
    const deleteResult = await this.repository
      .createQueryBuilder(alias)
      .where(`ownerId=:ownerId`)
      .andWhere(`id =:id`, {
        ownerId,
        id,
      })
      .delete()
      .execute()
    const isSuccessMessage = {
      isSuccess: deleteResult.affected > 0 ? true : false,
      type: alias,
      ownerId,
      id,
    }
    return isSuccessMessage
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
  ): Promise<dto> {
    const entity = await this.repository
      .createQueryBuilder(alias)
      .where(`id =:id`, { id })
      .update()
      .set(update)
      .returning('*')
      .execute()
    console.log(entity)
    if (entity && entity.affected > 0) return entity.raw[0] as Promise<dto>
    else throw new WasNotUpdated_EX(`${alias} was not updated`)
  }

  async removeOne(id: number, alias: string): Promise<Delete_Message_WO_Owner> {
    const deleteResult = await this.repository
      .createQueryBuilder(alias)
      .where(`id =:id`, { id })
      .delete()
      .execute()
    const isSuccessMessage = {
      isSuccess: deleteResult.affected > 0 ? true : false,
      type: alias,
      id,
    }
    return isSuccessMessage
  }
}

export abstract class Base_Crud_W_FindAll<Model>
  extends BaseCRUDService<Model>
  implements Crud_W_Owner<Model>, FindAll_W_Owner<Model>
{
  async findAll(ownerId: number, alias: string) {
    const entities = await this.repository
      .createQueryBuilder(alias)
      .where(`${alias}.ownerId =:ownerId`, { ownerId })
      .take(DEFAULT_PORTION)
      .getManyAndCount()
    console.log(forPagination(entities))
    if (entities) return forPagination(entities)
    else throw new WasNotFound_EX(alias)
  }
}
