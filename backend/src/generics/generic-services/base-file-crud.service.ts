import { WasNotCreated_EX } from '../../global/exceptions/db-exceptions'
import { File_Crud } from 'src/generics/generic-interfaces/base-file-crud-interface'
import { Repository } from 'typeorm'
import {
  Sim_File_EN_Delete_O,
  File_EN_Delete_O,
} from 'src/global/globalDtos/output.dto'

export type _optional<T = void> = T extends void ? void : Repository<T>
export type _options = {
  parentAutoCreate: boolean
  userRelation?: boolean
  receiverRelation?: boolean
  treeRelation?: boolean
}

// create property for tree relation
export abstract class BaseFileCRUDService<Model, _optional = void>
  implements File_Crud<Model>
{
  constructor(
    protected repository: Repository<Model>,
    protected model: any,
    protected parent_repository?: Repository<_optional>,
    protected parent_model?: any,
    protected options?: _options,
  ) {
    this.options = options
    this.model = model
    if (parent_repository) this.parent_repository = parent_repository
    if (parent_model) this.parent_model = parent_model
  }

  async insertOne(
    mainId: number,
    ownerId: number,
    url: string,
    filename: string,
    type: string,
    parent_of_owner_id?: number,
    userId?: number,
    receiverId?: number,
    parentId?: number,
  ) {
    console.log('parentId :  ', parentId)
    console.log('parent_of_owner_id', parent_of_owner_id)
    let new_parent_entity
    const file_entity = new this.model()
    console.log('ownerId : ', ownerId)

    if (this.options.treeRelation) {
      if (this.options.parentAutoCreate) {
        new_parent_entity = new this.parent_model()
        console.log('TREE RELATION')
        if (this.options.userRelation) {
          new_parent_entity.userId = userId
        }
        if (this.options.receiverRelation) {
          new_parent_entity.receiverId = receiverId
        }
        const parent_reply = await this.parent_repository.findOne({
          //@ts-ignore
          where: { id: parentId },
        })

        if (ownerId) {
          file_entity.ownerId = ownerId
          console.log(file_entity)
        } else if (parentId) {
          new_parent_entity.parent = parent_reply
          new_parent_entity.parentId = parentId
        }
        new_parent_entity.ownerId = parent_of_owner_id
        console.log('PARENT : ', new_parent_entity)
        const entity = await this.parent_repository.save(new_parent_entity)
        console.log('ENTITY : ', entity)
        if (!ownerId) file_entity.ownerId = entity.id
        console.log(file_entity)
      }
    } else if (!this.options.treeRelation) {
      console.log('NOT TREE RELATION')
      new_parent_entity = new this.parent_model()
      if (this.options.userRelation) {
        new_parent_entity.userId = userId
      }
      if (this.options.receiverRelation) {
        new_parent_entity.receiverId = receiverId
      }
      if (this.options.parentAutoCreate && parent_of_owner_id) {
        console.log(new_parent_entity)
        new_parent_entity.ownerId = parent_of_owner_id
        const entity = await this.parent_repository.save(new_parent_entity)
        console.log(entity)
        file_entity.ownerId = entity.id
      } else if (ownerId) {
        file_entity.ownerId = ownerId
      }
    }
    file_entity.file_name = filename
    file_entity.url = url
    const id = (await this.repository.save(file_entity)).id
    //@ts-ignore
    const created_entity = await this.repository.findOneBy({ id })
    console.log('CREATED ENTITY : ', created_entity)
    if (created_entity) return created_entity as unknown as Promise<Model>
    else throw new WasNotCreated_EX(type)
  }

  async deleteOneById(id: number, type: string) {
    const delete_result = await this.repository
      .createQueryBuilder('entity')
      .delete()
      .where('id=:id', { id })
      .execute()
    console.log(delete_result)
    const delete_message: Sim_File_EN_Delete_O = {
      id,
      type,
      isSuccess: delete_result.affected > 0 ? true : false,
    }
    return delete_message
  }
  async deleteOneByOwnerId(ownerId: number, file_name: string, type: string) {
    const delete_result = await this.repository
      .createQueryBuilder(type)
      .delete()
      .where({ ownerId, file_name })
      .execute()
    const delete_message: File_EN_Delete_O = {
      ownerId,
      file_name,
      type,
      isSuccess: delete_result.affected > 0 ? true : false,
    }
    return delete_message
  }
}
