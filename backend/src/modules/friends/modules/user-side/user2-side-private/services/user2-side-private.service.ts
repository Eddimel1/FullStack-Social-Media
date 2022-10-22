import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUsersPrivateSide } from '../../shared/dto/input.dto'
import { User2SidePrivate } from '../entities/user2-side-private.entity'

@Injectable()
export class User2SidePrivateService {
  constructor(
    @InjectRepository(User2SidePrivate)
    private readonly user2SidePrivateRepository: Repository<User2SidePrivate>,
  ) {}
  create() {
    const new_user2_side_private = new User2SidePrivate()
    return this.user2SidePrivateRepository.save(new_user2_side_private)
  }

  findOne(id: number) {
    return this.user2SidePrivateRepository.findOne({ where: { id } })
  }

  async update(id: number, updateUser2SideInput: UpdateUsersPrivateSide) {
    await this.user2SidePrivateRepository
      .createQueryBuilder('user1_side')
      .update()
      .where('id =:id', { id })
      .set(updateUser2SideInput)
      .execute()
    const updated_user2_side_private = await this.findOne(id)
    return updated_user2_side_private
  }
}
