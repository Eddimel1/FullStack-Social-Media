import { File_EN_Delete_O } from 'src/global/globalDtos/output.dto'

export interface Base_Upload_Service<T1, T2, T3, F> {
  uploadFile: (
    file: Express.Multer.File,
    folder: F,
    type: 'groups' | 'users',
    mainId: number,
    ownerId: number,
  ) => Promise<T1 | T2 | T3>
  removeFile: (
    file_name: string,
    folder: F,
    type: 'groups' | 'users',
    mainId: number,
    ownerId: number,
  ) => Promise<File_EN_Delete_O>
  _invokeAppropriateService_Up: (
    mainId: number,
    ownerId: number,
    folder: F,
    file_name: string,
    url: string,
    parentOfOwnerId?: number,
    receiverId?: number,
    parentId?: number,
  ) => Promise<T1 | T2 | T3>

  _invokeAppropriateService_Del: (
    id: number,
    folder: F,
    file_name: string,
  ) => Promise<File_EN_Delete_O>
}
