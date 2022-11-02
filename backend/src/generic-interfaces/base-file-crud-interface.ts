import {
  File_EN_Delete_O,
  Sim_File_EN_Delete_O,
} from 'src/sharedDtos/output.dto'

export interface File_Crud<T> {
  insertOne: (
    ownerId: number,
    url: string,
    file_name: string,
    type: string,
  ) => Promise<T>

  deleteOneById: (id: number, type: string) => Promise<Sim_File_EN_Delete_O>
  deleteOneByOwnerId: (
    ownerId: number,
    file_name: string,
    type: string,
  ) => Promise<File_EN_Delete_O>
}
