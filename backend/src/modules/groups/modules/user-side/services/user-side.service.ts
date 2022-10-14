import { Injectable } from '@nestjs/common'
import { CreateUserSideInput } from '../dto/create-user-side.input'
import { UpdateUserSideInput } from '../dto/update-user-side.input'

@Injectable()
export class UserSideService {
  create(createUserSideInput: CreateUserSideInput) {
    return 'This action adds a new userSide'
  }

  findAll() {
    return `This action returns all userSide`
  }

  findOne(id: number) {
    return `This action returns a #${id} userSide`
  }

  update(id: number, updateUserSideInput: UpdateUserSideInput) {
    return `This action updates a #${id} userSide`
  }

  remove(id: number) {
    return `This action removes a #${id} userSide`
  }
}
