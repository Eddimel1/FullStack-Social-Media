import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DEFAULT_PORTION } from 'src/global/constants/db.constants'
import { Repository } from 'typeorm'
import { GroupUserRelationshipService } from '../../group-user-relationship/services/group-user-relationship.service'
import { CreateGroupInput } from '../dto/input'
import { GroupEntity } from '../entities/group.entity'

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly groupsRepository: Repository<GroupEntity>,
    private readonly groupUserRelationshipService: GroupUserRelationshipService,
  ) {}
  async create(createGroupInput: CreateGroupInput, userId: number) {
    
    const group = new GroupEntity()
    group.ownerId = userId
    group.slogan = createGroupInput.slogan
    group.name = createGroupInput.name
    group.category = createGroupInput.category
    const new_group = await this.groupsRepository.save(group)
    await this.groupUserRelationshipService.createRelationship(
      userId,
      new_group.id,
      true,
    )
    return this.groupsRepository.findOneBy({ id: new_group.id })
  }

  findOneGroup(groupId: number) {
    return this.groupsRepository.findOne({ where: { id: groupId } })
  }

  findAllGroups() {
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
