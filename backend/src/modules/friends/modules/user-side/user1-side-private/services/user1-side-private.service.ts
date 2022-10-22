import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUserSide, UpdateUsersPrivateSide } from '../../shared/dto/input.dto'
import { User1SidePrivate } from '../entities/user1-side-private.entity'


@Injectable()
export class User1SidePrivateService {
  constructor(
    @InjectRepository(User1SidePrivate)
    private readonly user1SidePrivateRepository: Repository<User1SidePrivate>,
  ) {}
  create() {
    const new_user1_side_private = new User1SidePrivate()
    return this.user1SidePrivateRepository.save(new_user1_side_private)
  }

  findOne(id: number) {
    return this.user1SidePrivateRepository.findOne({ where: { id } })
  }

  async update(id: number, updateUser1SideInput: UpdateUsersPrivateSide) {
    await this.user1SidePrivateRepository
      .createQueryBuilder('user1_side')
      .update()
      .where('id =:id', { id })
      .set(updateUser1SideInput)
      .execute()
    const updated_user1_side_private = await this.findOne(id)
    return updated_user1_side_private
  }
}
