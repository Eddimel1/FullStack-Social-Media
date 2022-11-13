import {
  DEFAULT_PORTION,
  GROUP_RELATIONS_W_USER,
  GROUP_RELATIONS_W_USER_ARRAY,
  USER_RELATIONS_W_GROUP,
  USER_RELATIONS_W_GROUP_ARRAY,
} from 'src/global/constants/db.constants'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { GroupToUserRequestService } from '../../group-user-request/services/group-to-user-request.service'
import { UserToGroupRequestService } from '../../group-user-request/services/user-to-group-request.service'
import { GroupUserSharedSideService } from '../../shared-side/services/shared-side.service'
import { GroupSidePrivateService } from '../../sides/group-side-private/services/group-side-private.service'
import { GroupSideService } from '../../sides/group-side/services/group-side.service'
import { UserSidePrivateService } from '../../sides/user-side-private/services/user-side-private.service'
import { UserSideService } from '../../sides/user-side/services/user-side.service'
import { Group_User_Relation } from '../entities/group-user-relationship.entity'
import {
  WasNotCreated_EX,
  WasNotFound_EX,
} from 'src/global/exceptions/db-exceptions'
import { isSuccess_G } from '../dto/output.dto'
import { _loadAllRelationships } from 'src/global/globalUtils/queryBuilder/queryBuilder.utility'

@Injectable()
export class GroupUserRelationshipService {
  constructor(
    @InjectRepository(Group_User_Relation)
    private readonly group_user_relationship_repository: Repository<Group_User_Relation>,
    private readonly groupToUserRequestService: GroupToUserRequestService,
    private readonly userToGroupRequestService: UserToGroupRequestService,
    private readonly userSideService: UserSideService,
    private readonly groupSideService: GroupSideService,
    private readonly groupSidePrivateService: UserSidePrivateService,
    private readonly userSidePrivateService: GroupSidePrivateService,
    private readonly groupUserSharedSideService: GroupUserSharedSideService,
  ) {}

  async _loadRelationships(
    userId: number,
    groupId: number,
    type: 'group' | 'user',
    relation?: GROUP_RELATIONS_W_USER | USER_RELATIONS_W_GROUP,
  ) {
    if (relation) {
      const relationship =
        await this.group_user_relationship_repository.findOne({
          where: { user_id: userId, group_id: groupId },
          relations: [relation],
        })
      if (relationship) return relationship
      else throw new WasNotFound_EX('group relationship with user')
    } else if (!relation) {
      const query_builder = this.group_user_relationship_repository
        .createQueryBuilder('relationship')
        .where('user_id =:userId AND group_id =:groupId', { userId, groupId })
      let _relationship

      if (type === 'user') {
        USER_RELATIONS_W_GROUP_ARRAY.forEach((relation) =>
          query_builder.innerJoinAndSelect(
            `relationship.${relation}`,
            `${relation}`,
          ),
        )
        _relationship = await query_builder.getOne()
      } else if (type === 'group') {
        GROUP_RELATIONS_W_USER_ARRAY.forEach((relation) =>
          query_builder.innerJoinAndSelect(
            `relationship.${relation}`,
            `${relation}`,
          ),
        )
        _relationship = await query_builder.getOne()
      }
      if (_relationship) return _relationship
      else throw new WasNotFound_EX('group relationship with user')
    }
  }
  async createRelationship(
    userId: number,
    groupId: number,
    withOwner?: boolean,
  ) {
    const created_entities = await Promise.all([
      this.userSideService.create(),
      this.groupSideService.create(withOwner),
      this.userSidePrivateService.create(),
      this.groupSidePrivateService.create(),
      this.groupUserSharedSideService.create(),
    ])
    const new_relationship = new Group_User_Relation()
    new_relationship.user_id = userId
    new_relationship.group_id = groupId
    new_relationship.user_side = created_entities[0]
    new_relationship.group_side = created_entities[1]
    new_relationship.group_side_private = created_entities[2]
    new_relationship.user_side_private = created_entities[3]
    new_relationship.shared_side = created_entities[4]
    const updated_relationship =
      await this.group_user_relationship_repository.save(new_relationship)
    if (updated_relationship) return updated_relationship
    else throw new WasNotCreated_EX('group relationship with user')
  }
  //check if group exists
  async createGroupUserRelationship_U(userId: number, groupId: number) {
    const isDestroyed =
      await this.userToGroupRequestService.removeRequestToGroup(userId, groupId)
    if (isDestroyed.isSuccess) {
      const updated_relationship = await this.createRelationship(
        userId,
        groupId,
      )
      if (updated_relationship) return updated_relationship
      else throw new WasNotCreated_EX('group relationship with user')
    }
  }
  async createGroupUserRelationship_G(userId: number, groupId: number) {
    const isDestroyed =
      await this.groupToUserRequestService.removeRequestToUser({
        userId,
        groupId,
      })
    if (isDestroyed.isSuccess) {
      const updated_relationship = await this.createRelationship(
        userId,
        groupId,
      )
      if (updated_relationship) return updated_relationship
      else throw new WasNotCreated_EX('group relationship with user')
    }
  }

  async findAllRelationshipsWithUsers(groupId: number) {
    const relationships = await this.group_user_relationship_repository
      .createQueryBuilder('relationships')
      .where('group_id =:groupId', { groupId })
      .limit(DEFAULT_PORTION)
      .innerJoinAndSelect('relationships.group', 'group')
      .getMany()
    if (relationships) return relationships
    else throw new WasNotFound_EX('relationships with users')
  }

  async findAllRelationshipsWithGroups(userId: number) {
    const query_builder = this.group_user_relationship_repository
      .createQueryBuilder('relationships')
      .where('user_id =:userId', { userId })
    const query_builder_w_j = _loadAllRelationships<Group_User_Relation>(
      query_builder,
      USER_RELATIONS_W_GROUP_ARRAY,
      'relationships',
      'inner',
    )
    const relationships = query_builder_w_j.limit(DEFAULT_PORTION).getMany()
    if (relationships) return relationships
    else throw new WasNotFound_EX('relationships with groups')
  }

  async findOneRelationshipWithUser(
    userId: number,
    groupId: number,
    relation?: GROUP_RELATIONS_W_USER,
  ) {
    console.log(userId, groupId, relation)
    const relationship = (await this._loadRelationships(
      userId,
      groupId,
      'group',
      relation,
    )) as Group_User_Relation
    if (relationship) return relationship
    else throw new WasNotFound_EX('relationship with user')
  }
  async findOneRelationshipWithGroup(
    userId: number,
    groupId: number,
    relation: USER_RELATIONS_W_GROUP,
  ) {
    console.log('GROUPID : ', groupId)
    const relationship = (await this._loadRelationships(
      userId,
      groupId,
      'user',
      relation,
    )) as Group_User_Relation
    if (relationship) return relationship
    else throw new WasNotFound_EX('relationship with group')
  }

  async destroyRelationship_U(userId: number, groupId: number) {
    const deleteResult = await this.group_user_relationship_repository
      .createQueryBuilder('relationships')
      .delete()
      .where('user_id =:userId AND group_id =:groupId', { userId, groupId })
      .execute()
    const isSuccess: isSuccess_G = {
      groupId,
      userId,
      isSuccess: deleteResult.affected > 0 ? true : false,
    }
    return isSuccess
  }

  async destroyRelationship_G(userId: number, groupId: number) {
    const deleteResult = await this.group_user_relationship_repository
      .createQueryBuilder('relationships')
      .delete()
      .where('user_id =:userId AND group_id =:groupId', { userId, groupId })
      .execute()
    const isSuccess: isSuccess_G = {
      groupId,
      userId,
      isSuccess: deleteResult.affected > 0 ? true : false,
    }
    return isSuccess
  }

  async updateUserSide(userId: number, groupId: number, update: any) {
    const user_side = await this.findOneRelationshipWithGroup(
      userId,
      groupId,
      USER_RELATIONS_W_GROUP.USER_SIDE,
    )
    const user_side_id = user_side.user_side_id
    const updated_side = await this.userSideService.updateOne(
      user_side_id,
      update,
    )
    console.log(updated_side)
    return updated_side.raw[0]
  }
  async updateGroupSide(userId: number, groupId: number, update: any) {
    const group_side = await this.findOneRelationshipWithUser(
      userId,
      groupId,
      GROUP_RELATIONS_W_USER.GROUP_SIDE,
    )
    console.log(group_side)
    const group_side_id = group_side.user_side_id
    const updated_side = await this.groupSideService.updateOne(
      group_side_id,
      update,
    )
    return updated_side.raw[0]
  }

  async updateUserPrivateSide(userId: number, groupId: number, update: any) {
    const private_user_side = await this.findOneRelationshipWithGroup(
      userId,
      groupId,
      USER_RELATIONS_W_GROUP.USER_SIDE_PRIVATE,
    )
    const private_user_side_id = private_user_side.user_side_id
    const updated_side = await this.userSidePrivateService.updateOne(
      private_user_side_id,
      update,
    )
    return updated_side.raw[0]
  }

  async updateGroupPrivateSide(userId: number, groupId: number, update: any) {
    const private_group_side = await this.findOneRelationshipWithUser(
      userId,
      groupId,
      GROUP_RELATIONS_W_USER.GROUP_SIDE_PRIVATE,
    )
    const private_group_side_id = private_group_side.user_side_id
    const updated_side = await this.groupSidePrivateService.updateOne(
      private_group_side_id,
      update,
    )
    return updated_side.raw[0]
  }

  async updateSharedSide(userId: number, groupId: number, update: any) {
    const shared_side = await this.findOneRelationshipWithUser(
      userId,
      groupId,
      GROUP_RELATIONS_W_USER.SHARED_SIDE,
    )
    const shared_side_id = shared_side.user_side_id
    const updated_side = await this.groupUserSharedSideService.updateOne(
      shared_side_id,
      update,
    )
    return updated_side.raw[0]
  }
}
