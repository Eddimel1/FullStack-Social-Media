import {
  Sim_File_EN_Delete_O,
  File_EN_Delete_O,
} from 'src/global/globalDtos/output.dto'

export interface File_Crud<T> {
  insertOne: (
    mainId: number,
    ownerId: number,
    url: string,
    file_name: string,
    type: string,
    parent_of_owner_id?: number,
    userId?: number,
  ) => Promise<T>

  deleteOneById: (id: number, type: string) => Promise<Sim_File_EN_Delete_O>
  deleteOneByOwnerId: (
    ownerId: number,
    file_name: string,
    type: string,
  ) => Promise<File_EN_Delete_O>
}
