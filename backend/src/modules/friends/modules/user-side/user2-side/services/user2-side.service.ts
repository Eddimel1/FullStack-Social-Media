import { Injectable } from '@nestjs/common'
import { CreateUser2SideInput, UpdateUser2SideInput } from '../dto/input.dto'

@Injectable()
export class User2SideService {
  create(createUser2SideInput: CreateUser2SideInput) {
    return 'This action adds a new user2Side'
  }

  findAll() {
    return `This action returns all user2Side`
  }

  findOne(id: number) {
    return `This action returns a #${id} user2Side`
  }

  update(id: number, updateUser2SideInput: UpdateUser2SideInput) {
    return `This action updates a #${id} user2Side`
  }

  remove(id: number) {
    return `This action removes a #${id} user2Side`
  }
}
