import { CreateRequest } from './dto/input.dto';
import { Injectable } from '@nestjs/common';


@Injectable()
export class FriendRequestsService {
  create(createFriendRequestInput: CreateRequest) {
    return 'This action adds a new friendRequest';
  }

  findAll() {
    return `This action returns all friendRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} friendRequest`;
  }


  remove(id: number) {
    return `This action removes a #${id} friendRequest`;
  }
}
