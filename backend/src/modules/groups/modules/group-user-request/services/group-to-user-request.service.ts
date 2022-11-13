import { DEFAULT_PORTION } from '../../../../../global/constants/db.constants'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateRequest_G, FindRequest_G } from '../dto/input.dto'
import { GroupUserRequest } from '../entities/group-user-request.entity'
import {
  WasNotCreated_EX,
  WasNotFound_EX,
  WereNotFound_EX,
} from 'src/global/exceptions/db-exceptions'

@Injectable()
export class GroupToUserRequestService {
  constructor(
    @InjectRepository(GroupUserRequest)
    private readonly groupUserRequestRepository: Repository<GroupUserRequest>,
  ) {}
  async createRequestToUser(createRequest: CreateRequest_G) {
    const new_request = new GroupUserRequest()
    new_request.group_as_what = 'requester'
    new_request.user_as_what = 'accepter'
    new_request.groupId = createRequest.groupId
    new_request.userId = createRequest.userId
    const updated_request = await this.groupUserRequestRepository.save(
      new_request,
    )
    if (updated_request) {
      return updated_request
    } else throw new WasNotCreated_EX('request to user ')
  }

  async findAllRequestsToUser(groupId: number) {
    const requests = await this.groupUserRequestRepository
      .createQueryBuilder('requests')
      .where('requests.groupId =:groupId', { groupId })
      .andWhere('group_as_what =:requester', {
        requester: 'requester',
      })
      .innerJoinAndSelect('requests.group', 'group')
      .limit(DEFAULT_PORTION)
      .getMany()
    if (requests) return requests
    else throw new WereNotFound_EX('requests to users')
  }

  async findOneRequestToUser(findRequest: FindRequest_G) {
    const { groupId, userId } = findRequest
    const request = await this.groupUserRequestRepository
      .createQueryBuilder('request')
      .where('request.groupId =:groupId AND request.userId =:userId', {
        groupId,
        userId,
      })
      .innerJoinAndSelect('request.group', 'group')
      .andWhere('group_as_what =:requester AND user_as_what =:accepter', {
        requester: 'requester',
        accepter: 'accepter',
      })
      .getOne()
    if (request) return request
    else throw new WasNotFound_EX('request to user')
  }

  async removeRequestToUser(findRequest: FindRequest_G) {
    const { groupId, userId } = findRequest
    const deletion_result = await this.groupUserRequestRepository
      .createQueryBuilder('request')
      .delete()
      .where('groupId =:groupId AND userId =:userId', { groupId, userId })
      .andWhere('group_as_what =:accepter AND user_as_what =:requester', {
        requester: 'requester',
        accepter: 'accepter',
      })
      .execute()
    const isSuccess = {
      groupId,
      userId,
      isSuccess: deletion_result.affected > 0 ? true : false,
    }
    return isSuccess
  }
}
