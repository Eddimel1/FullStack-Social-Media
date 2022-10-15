import { Injectable } from '@nestjs/common'
import { CreateUserSide, UpdateUserSide } from '../../shared/dto/input.dto'

@Injectable()
export class User1SideService {
  create(createUser1SideInput: CreateUserSide) {
    return 'This action adds a new user1Side'
  }

  findAll() {
    return `This action returns all user1Side`
  }

  findOne(id: number) {
    return `This action returns a #${id} user1Side`
  }

  update(id: number, updateUser1SideInput: UpdateUserSide) {
    return `This action updates a #${id} user1Side`
  }

  remove(id: number) {
    return `This action removes a #${id} user1Side`
  }
}
