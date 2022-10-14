import { Injectable } from '@nestjs/common'
import { CreateGroupInfoInput, UpdateGroupInfoInput } from '../dto/input.dto'

@Injectable()
export class GroupInfoService {
  create(createGroupInfoInput: CreateGroupInfoInput) {
    return 'This action adds a new groupInfo'
  }

  findAll() {
    return `This action returns all groupInfo`
  }

  findOne(id: number) {
    return `This action returns a #${id} groupInfo`
  }

  update(id: number, updateGroupInfoInput: UpdateGroupInfoInput) {
    return `This action updates a #${id} groupInfo`
  }

  remove(id: number) {
    return `This action removes a #${id} groupInfo`
  }
}
