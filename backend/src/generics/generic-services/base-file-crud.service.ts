import { WasNotCreated_EX } from '../../global/exceptions/db-exceptions'
import { File_Crud } from 'src/generics/generic-interfaces/base-file-crud-interface'
import { Repository } from 'typeorm'
import { Sim_File_EN_Delete_O, File_EN_Delete_O } from 'src/global/globalDtos/output.dto'


export type _optional<T = void> = T extends void ? void : Repository<T>
export type _options = { parentAutoCreate: boolean; userRelation?: boolean }

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
    ownerId: number,
    url: string,
    filename: string,
    type: string,
    parent_of_owner_id?: number,
    userId?: number,
  ) {
    console.log('PARENT ID :  ', parent_of_owner_id)
    let parent_entity_id = null
    console.log('userId : ', userId, 'OPTIONS : ', this.options)
    console.log('OWNERID : ', ownerId)
    if (this.options && this.options.parentAutoCreate && parent_of_owner_id) {
      console.log('there')
      const new_parent_entity = new this.parent_model()
      console.log(new_parent_entity)
      new_parent_entity.ownerId = parent_of_owner_id
      if (this.options.userRelation) {
        console.log(userId)
        new_parent_entity.userId = userId
      }
      const id = (await this.parent_repository.save(new_parent_entity)).id
      parent_entity_id = id
    }
    const file_entity = new this.model()
    file_entity.file_name = filename
    file_entity.url = url
    file_entity.ownerId = parent_entity_id || ownerId
    const id = (await this.repository.save(file_entity)).id
    //@ts-ignore
    const created_entity = await this.repository.findOneBy({ id })
    if (created_entity) return created_entity as unknown as Promise<Model>
    else throw new WasNotCreated_EX(type)
  }

  async deleteOneById(id: number, type: string) {
    const delete_result = await this.repository
      .createQueryBuilder('entity')
      .delete()
      .where('id=:id', { id })
      .execute()
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
