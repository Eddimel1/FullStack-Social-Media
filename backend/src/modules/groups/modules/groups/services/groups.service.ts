import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DEFAULT_PORTION } from 'src/constants/db.constants'

import { Repository } from 'typeorm'
import { CreateGroupInput } from '../dto/input'
import { GroupEntity } from '../entities/group.entity'


@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly groupsRepository: Repository<GroupEntity>,
  ) {}
  async create(createGroupInput: CreateGroupInput & { userId: number }) {
    const group = new GroupEntity()
    group.ownerId = createGroupInput.userId
    group.slogan = createGroupInput.slogan
    group.name = createGroupInput.name
    await this.groupsRepository.save(group)

    return 'This action adds a new group'
  }

  findOne(groupId: number) {
    return this.groupsRepository.findOne({ where: { id: groupId } })
  }

  findAllOwnedGroups(ownerId: number) {
    return this.groupsRepository
      .createQueryBuilder('groups')
      .where('id =:groupId ', { ownerId })
      .limit(DEFAULT_PORTION)
      .getMany()
  }

  findOneOwnedGroup(ownerId: number, groupId: number) {
    return this.groupsRepository
      .createQueryBuilder('groups')
      .where('id =:groupId AND ownerId =:ownerId', { ownerId, groupId })
      .limit(DEFAULT_PORTION)
      .getOne()
  }

  remove(ownerId: number, groupId: number) {
    return this.groupsRepository
      .createQueryBuilder('groups')
      .delete()
      .where('id =:groupId AND ownerId =:ownerId', { ownerId, groupId })
      .execute()
  }
}
