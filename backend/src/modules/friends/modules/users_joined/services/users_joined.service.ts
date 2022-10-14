import { Injectable } from '@nestjs/common'
import {
  CreateUsersJoinedInput,
  UpdateUsersJoinedInput,
} from '../dto/input.dto'

@Injectable()
export class UsersJoinedService {
  create(createUsersJoinedInput: CreateUsersJoinedInput) {
    return 'This action adds a new usersJoined'
  }

  findAll() {
    return `This action returns all usersJoined`
  }

  findOne(id: number) {
    return `This action returns a #${id} usersJoined`
  }

  update(id: number, updateUsersJoinedInput: UpdateUsersJoinedInput) {
    return `This action updates a #${id} usersJoined`
  }

  remove(id: number) {
    return `This action removes a #${id} usersJoined`
  }
}
