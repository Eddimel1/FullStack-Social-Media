import { WasNotCreated_EX } from './../exceptions/db-exceptions'
import { File_Crud } from 'src/generic-interfaces/base-file-crud-interface'
import { Repository } from 'typeorm'
import {
  File_EN_Delete_O,
  Sim_File_EN_Delete_O,
} from 'src/sharedDtos/output.dto'

export abstract class BaseFileCRUDService<Model> implements File_Crud<Model> {
  constructor(protected repository: Repository<Model>, protected model: any) {
    this.model = model
  }

  async insertOne(
    ownerId: number,
    url: string,
    filename: string,
    type: string,
  ) {
    
    const file_entity = new this.model()
    file_entity.file_name = filename
    file_entity.url = url
    file_entity.ownerId = ownerId
    const created_entity = await this.repository.save(file_entity)
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
