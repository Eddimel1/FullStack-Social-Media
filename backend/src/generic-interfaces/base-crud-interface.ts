import {
    Delete_Message_WO_Owner,
  Delete_Message_W_Owner,
  findAll_Generic_O,
} from 'src/sharedDtos/output.dto'

export interface Crud_W_Owner<T> {
  findOne: (ownerId: number, id: number, alias: string) => Promise<T>
  updateOne: <dto extends Record<string, any>>(
    ownerId: number,
    id: number,
    update: dto,
    alias: string,
  ) => Promise<dto>
  removeOne: (
    ownerId: number,
    id: number,
    alias: string,
  ) => Promise<Delete_Message_W_Owner>
}

export interface FindAll_W_Owner<T> {
  findAll: (ownerId: number, alias: string) => Promise<findAll_Generic_O<T>>
}

export interface Crud_WO_Owner<T> {
  findOne: (id: number, alias: string) => Promise<T>
  updateOne: <dto extends Record<string, any>>(
    id: number,
    update: dto,
    alias: string,
  ) => Promise<dto>
  removeOne: (id: number, alias: string) => Promise<Delete_Message_WO_Owner>
}
