import { UsersSharedSide } from './../entities/users-shared.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUserSide } from '../../user-side/shared/dto/input.dto'

@Injectable()
export class UserSharedService {
  constructor(
    @InjectRepository(UsersSharedSide)
    private readonly usersSharedSideRepository: Repository<UsersSharedSide>,
  ) {}
  create() {
    const new_user2_side_private = new UsersSharedSide()
    return this.usersSharedSideRepository.save(new_user2_side_private)
  }

  findOne(id: number) {
    return this.usersSharedSideRepository.findOne({ where: { id } })
  }

  async update(id: number, updateUser2SideInput: UpdateUserSide) {
    await this.usersSharedSideRepository
      .createQueryBuilder('user1_side')
      .update()
      .where('id =:id', { id })
      .set(updateUser2SideInput)
      .execute()
    const updated_user2_side_private = await this.findOne(id)
    return updated_user2_side_private
  }
}
