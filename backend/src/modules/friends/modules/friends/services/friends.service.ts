import { Injectable } from '@nestjs/common'
import { CreateFriendInput, UpdateFriendInput } from '../dto/input.dto'


@Injectable()
export class FriendsService {
  create(createFriendInput: CreateFriendInput) {
    return 'This action adds a new friend'
  }

  findAll() {
    return `This action returns all friends`
  }

  findOne(id: number) {
    return `This action returns a #${id} friend`
  }

  update(id: number, updateFriendInput: UpdateFriendInput) {
    return `This action updates a #${id} friend`
  }

  remove(id: number) {
    return `This action removes a #${id} friend`
  }
}
