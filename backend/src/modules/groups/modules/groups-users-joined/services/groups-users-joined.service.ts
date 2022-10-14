import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DEFAULT_PORTION } from 'src/constants/db.constants'
import { Repository } from 'typeorm'
import { CreateRelationship_I } from '../../groups/dto/input'
import { GroupEntity } from '../../groups/entities/group.entity'
import { GroupsService } from '../../groups/services/groups.service'
import { Groups_A_Users_Mediator_E } from '../entities/groups-users-joined.entity'

@Injectable()
export class Groups_A_Users_Service {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly groups_a_users_Repository: Repository<Groups_A_Users_Mediator_E>,
    private readonly groupsService: GroupsService,
  ) {}
  async addGroup(createRelationship: CreateRelationship_I) {
    const relation = new Groups_A_Users_Mediator_E()
    relation.groupId = createRelationship.groupId
    relation.userId = createRelationship.userId
    await this.groups_a_users_Repository.save(relation)
    return this.groupsService.findOne(createRelationship.groupId)
  }

  findAllAddedGroups(userId: number) {
    return this.groups_a_users_Repository
      .createQueryBuilder('groups')
      .where({ userId })
      .limit(DEFAULT_PORTION)
      .leftJoin('groups.group', 'group')
      .select('group')
      .getMany()
  }

  findOneAddedGroup(userId: number, groupId: number) {
    return this.groups_a_users_Repository
      .createQueryBuilder('groups')
      .where({ userId })
      .andWhere({ groupId })
      .limit(DEFAULT_PORTION)
      .leftJoin('groups.group', 'group')
      .getOne()
  }

  async update(userId: number, groupId: number, updateGroupInput: any) {
    await this.groups_a_users_Repository
      .createQueryBuilder('groups')
      .update()
      .where({ userId })
      .andWhere({ groupId })
      .set(updateGroupInput)
      .execute()
    const updated_relation = await this.groups_a_users_Repository.findOneBy({
      userId,
      groupId,
    })
    return updated_relation
  }

  removeGroup(userId: number, groupId: number) {
    return this.groups_a_users_Repository.delete({ userId, groupId })
  }
}
