import { DEFAULT_PORTION } from 'src/constants/db.constants'
import { CreateRequest_I } from '../dto/input.dto'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FriendRequest } from '../entities/friend-request.entity'
import { fromFindAndCount } from 'src/SharedUtils.ts/transforms/transforms'
import { CreatedRequest_O, FindAndCountRequests_O } from '../dto/output.dto'

//transform response for deletion, handle errors,and do not return yourself
@Injectable()
export class FriendRequestsService {
  constructor(
    @InjectRepository(FriendRequest)
    private readonly friendRequestRepository: Repository<FriendRequest>,
  ) {}
  async createRequest(requester_id: number, accepter_id: number) {
    const new_request = new FriendRequest()
    new_request.accepter_id = accepter_id
    new_request.requester_id = requester_id
    const created_request = await this.friendRequestRepository.save(new_request)
    console.log(new_request)
    const response: CreatedRequest_O = {
      requester_id,
      accepter_id,
      isSuccess: created_request ? true : false,
    }
    return response
  }

  async findAllMyRequests(requester_id: number) {
    const requests = await this.friendRequestRepository
      .createQueryBuilder('requests')
      .innerJoinAndSelect('requests.requester', 'requester')
      .innerJoinAndSelect('requests.accepter', 'accepter')
      .where('requests.requester_id =:requester_id', { requester_id })
      .limit(DEFAULT_PORTION)
      .getManyAndCount()
    console.log(fromFindAndCount(requests, 'requests'))
    return fromFindAndCount(
      requests,
      'requests',
    ) as unknown as FindAndCountRequests_O
  }

  async findAllRequestsToMe(requester_id: number) {
    const requests = await this.friendRequestRepository
      .createQueryBuilder('requests')
      .innerJoinAndSelect('requests.requester', 'requester')
      .innerJoinAndSelect('requests.accepter', 'accepter')
      .where('accepter_id =:requester_id', { requester_id })
      .limit(DEFAULT_PORTION)
      .getManyAndCount()
    console.log(fromFindAndCount(requests, 'requests'))
    return fromFindAndCount(
      requests,
      'requests',
    ) as unknown as FindAndCountRequests_O
  }
  //create sanitizer for the user
  async findOneMyRequest(requester_id: number, accepter_id: number) {
    const request = await this.friendRequestRepository
      .createQueryBuilder('requests')
      .innerJoinAndSelect('requests.requester', 'requester')
      .innerJoinAndSelect('requests.accepter', 'accepter')
      .where('requester_id =:requester_id AND accepter_id =:accepter_id', {
        requester_id,
        accepter_id,
      })
      .getOne()
    console.log(request)
    return request
  }
  //handle errors if request does not exists
  async findOneRequestToMe(requester_id: number, accepter_id: number) {
    const request_to_me = await this.friendRequestRepository
      .createQueryBuilder('requests')
      .innerJoinAndSelect('requests.requester', 'requester')
      .innerJoinAndSelect('requests.accepter', 'accepter')
      .where('accepter_id =:requester_id AND requester_id =:accepter_id ', {
        requester_id,
        accepter_id,
      })
      .getOne()
    console.log(request_to_me)
    return request_to_me
  }

  async removeMyRequest(requester_id: number, accepter_id: number) {
    const request_to_me = await this.friendRequestRepository
      .createQueryBuilder('requests')
      .delete()
      .where('requester_id =:requester_id AND accepter_id =:accepter_id ', {
        requester_id,
        accepter_id,
      })
      .execute()
    return true
  }

  async declineRequest(requester_id: number, accepter_id: number) {
    const declined_request = await this.friendRequestRepository
      .createQueryBuilder('requests')
      .delete()
      .where('accepter_id =:requester_id AND requester_id =:accepter_id', {
        requester_id,
        accepter_id,
      })
      .execute()
    console.log(declined_request)
    return true
  }

  async destroyRequest(accepter_id: number, requester_id: number) {
    const destroyed_request = await this.friendRequestRepository
      .createQueryBuilder('requests')
      .delete()
      .where('accepter_id =:accepter_id AND requester_id =:requester_id', {
        requester_id,
        accepter_id,
      })
      .execute()
    console.log(destroyed_request)
    return true
  }

  async declineAllRequests(requester_id: number) {
    const declined_requests = await this.friendRequestRepository
      .createQueryBuilder('requests')
      .delete()
      .where('accepter_id =:requester_id ', {
        requester_id,
      })
      .execute()
    console.log(declined_requests)
    return true
  }
}
