import { findAll_Generic_O } from 'src/global/globalDtos/output.dto'

export interface Crud_W_Owner<T> {
  findOne: (ownerId: number, id: number, alias: string) => Promise<T>
  updateOne: <dto extends Record<string, any>>(
    ownerId: number,
    id: number,
    update: dto,
    alias: string,
  ) => Promise<T>
  removeOne: (ownerId: number, id: number, alias: string) => Promise<T>
}

export interface FindAll_W_Owner<T> {
  findAll: (
    ownerId: number,
    alias: string,
    page?: number,
    limit?: number,
  ) => Promise<findAll_Generic_O<T>>
}

export interface FindAll_W_Owner_PublishedOnly<T> {
  findAllPublished: (
    ownerId: number,
    alias: string,
    page?: number,
    limit?: number,
  ) => Promise<findAll_Generic_O<T>>
}

export interface Crud_WO_Owner<T> {
  findOne: (id: number, alias: string) => Promise<T>
  updateOne: <dto extends Record<string, any>>(
    id: number,
    update: dto,
    alias: string,
  ) => Promise<T>
  removeOne: (id: number, alias: string) => Promise<T>
}
