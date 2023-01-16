import { EntityTarget } from 'typeorm'

import { CreateReply } from 'src/modules/replies/shared/dto/input.dto'
import {
  find_ancestors_TR,
  find_descendants_TR,
  find_All_TR,
  isSuccess_TR,
} from 'src/global/global_interfaces/trees'

export interface Base_Closure_Tree<T> {
  _findOne: (id: number) => Promise<T>
  findRoot: (ownerId: number) => Promise<T>
  findRoots: (ownerId: number) => Promise<T[]>
  returnWholeTree: () => Promise<T[]>
  findAncestors: (
    id: number,
    entity: EntityTarget<T>,
  ) => Promise<find_ancestors_TR<T>>
  findDescendants: (
    id: number,
    entity: EntityTarget<T>,
  ) => Promise<find_descendants_TR<T>>
  findAll_A_Count: (
    id: number,
    entity: EntityTarget<T>,
  ) => Promise<find_All_TR<T>>
  findDescendantsTrees: (id: number) => Promise<T[]>
  findAncestorsTree: (id: number, depth: number) => Promise<T>
  updateOne: (update: any) => Promise<any>
  deleteOne: (id: number) => Promise<isSuccess_TR>
}
export interface Closure_Tree_Reply<T> {
  create: (create: CreateReply, userId: number) => Promise<T>
}
