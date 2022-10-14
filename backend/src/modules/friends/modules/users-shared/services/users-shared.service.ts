import { Injectable } from '@nestjs/common'
import {
  CreateUsersSharedInput,
  UpdateUsersSharedInput,
} from '../dto/input.dto'

@Injectable()
export class UsersSharedService {
  create(createUsersSharedInput: CreateUsersSharedInput) {
    return 'This action adds a new usersShared'
  }

  findAll() {
    return `This action returns all usersShared`
  }

  findOne(id: number) {
    return `This action returns a #${id} usersShared`
  }

  update(id: number, updateUsersSharedInput: UpdateUsersSharedInput) {
    return `This action updates a #${id} usersShared`
  }

  remove(id: number) {
    return `This action removes a #${id} usersShared`
  }
}
