import { DEFAULT_PORTION } from './../../../../../constants/db.constants'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { GroupUserRequest } from '../entities/group-user-request.entity'
import {
  WasNotCreated_EX,
  WasNotFound_EX,
  WereNotFound_EX,
} from 'src/exceptions/db-exceptions'

@Injectable()
export class UserToGroupRequestService {
  constructor(
    @InjectRepository(GroupUserRequest)
    private readonly groupUserRequestRepository: Repository<GroupUserRequest>,
  ) {}
  async createRequestToGroup(userId: number, groupId: number) {
    const new_request = new GroupUserRequest()
    new_request.group_as_what = 'accepter'
    new_request.user_as_what = 'requester'
    new_request.groupId = groupId
    new_request.userId = userId
    const updated_request = await this.groupUserRequestRepository.save(
      new_request,
    )
    if (updated_request) {
      return updated_request
    } else throw new WasNotCreated_EX('request to group')
  }

  findAllRequestsToGroup(userId: number) {
    const requests = this.groupUserRequestRepository
      .createQueryBuilder('requests')
      .where('requests.userId =:userId', { userId })
      .andWhere('group_as_what =:accepter AND user_as_what =:requester', {
        requester: 'requester',
        accepter: 'accepter',
      })
      .innerJoinAndSelect('requests.group', 'group')
      .limit(DEFAULT_PORTION)
      .getMany()
    if (requests) return requests
    else throw new WereNotFound_EX('requests to groups')
  }

  findOneRequestToGroup(userId: number, groupId: number) {
    const request = this.groupUserRequestRepository
      .createQueryBuilder('request')
      .where('request.groupId =:groupId AND request.userId =:userId', {
        groupId,
        userId,
      })
      .innerJoinAndSelect('request.group', 'group')
      .andWhere('group_as_what =:accepter AND user_as_what =:requester', {
        requester: 'requester',
        accepter: 'accepter',
      })
      .getOne()
    if (request) return request
    else throw new WasNotFound_EX('request to group')
  }

  async removeRequestToGroup(userId: number, groupId: number) {
    const deletion_result = await this.groupUserRequestRepository
      .createQueryBuilder('request')
      .delete()
      .where('groupId =:groupId AND userId =:userId', { groupId, userId })
      .andWhere('group_as_what =:requester AND user_as_what =:accepter', {
        requester: 'requester',
        accepter: 'accepter',
      })
      .execute()
    console.log(deletion_result)
    const isSuccess = {
      groupId,
      userId,
      isSuccess: deletion_result.affected > 0 ? true : false,
    }
    return isSuccess
  }
}
