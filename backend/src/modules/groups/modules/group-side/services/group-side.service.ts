import { Injectable } from '@nestjs/common'
import { CreateGroupSideInput, UpdateGroupSideInput } from '../dto/input.dto'

@Injectable()
export class GroupSideService {
  create(createGroupSideInput: CreateGroupSideInput) {
    return 'This action adds a new groupSide'
  }

  findAll() {
    return `This action returns all groupSide`
  }

  findOne(id: number) {
    return `This action returns a #${id} groupSide`
  }

  update(id: number, updateGroupSideInput: UpdateGroupSideInput) {
    return `This action updates a #${id} groupSide`
  }

  remove(id: number) {
    return `This action removes a #${id} groupSide`
  }
}
