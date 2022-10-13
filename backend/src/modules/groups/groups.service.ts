import { GroupEntity } from './entities/group.entity'
import { Injectable } from '@nestjs/common'
import { CreateGroupInput } from './dto/create-group.input'
import { UpdateGroupInput } from './dto/update-group.input'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly messageRepository: Repository<GroupEntity>,
  ) {}
  create(createGroupInput: CreateGroupInput) {
    return 'This action adds a new group'
  }

  findAll() {
    return `This action returns all groups`
  }

  findOne(id: number) {
    return `This action returns a #${id} group`
  }

  update(id: number, updateGroupInput: UpdateGroupInput) {
    return `This action updates a #${id} group`
  }

  remove(id: number) {
    return `This action removes a #${id} group`
  }
}
