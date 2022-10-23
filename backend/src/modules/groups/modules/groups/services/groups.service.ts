import { Injectable, UseGuards } from '@nestjs/common'
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
  async create(createGroupInput: CreateGroupInput, userId: number) {
    const group = new GroupEntity()
    group.ownerId = userId
    group.slogan = createGroupInput.slogan
    group.name = createGroupInput.name
    return this.groupsRepository.save(group)
  }

  findOneGroup(groupId: number) {
    return this.groupsRepository.findOne({ where: { id: groupId } })
  }

  findAllGroups(groupId: number) {
    return this.groupsRepository.find()
  }

  updateOwnedGroup() {}
  findAllOwnedGroups(ownerId: number) {
    return this.groupsRepository
      .createQueryBuilder('groups')
      .where('groups.ownerId =:ownerId', { ownerId })
      .limit(DEFAULT_PORTION)
      .getMany()
  }

  async findOneOwnedGroup(ownerId: number, groupId: number) {
    console.log(ownerId, groupId)
    const group = await this.groupsRepository
      .createQueryBuilder('group')
      .where('group.id =:groupId AND group.ownerId =:ownerId', {
        ownerId,
        groupId,
      })
      .getOne()
    console.log(group)
    return group
  }

  removeOwnedGroup(ownerId: number, groupId: number) {
    return this.groupsRepository
      .createQueryBuilder('groups')
      .delete()
      .where('id =:groupId AND ownerId =:ownerId', { ownerId, groupId })
      .execute()
  }
}
