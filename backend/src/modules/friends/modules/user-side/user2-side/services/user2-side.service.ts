import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUserSide } from '../../shared/dto/input.dto'
import { User2Side } from '../entities/user2-side.entity'

@Injectable()
export class User2SideService {
  constructor(
    @InjectRepository(User2Side)
    private readonly user2SideRepository: Repository<User2Side>,
  ) {}
  create() {
    const new_user2_side = new User2Side()
    return this.user2SideRepository.save(new_user2_side)
  }

  findOne(id: number) {
    return this.user2SideRepository.findOne({ where: { id } })
  }

  async update(id: number, updateUser1SideInput: UpdateUserSide) {
    await this.user2SideRepository
      .createQueryBuilder('user2_side')
      .update()
      .where('id =:id', { id })
      .set(updateUser1SideInput)
      .execute()
    const updated_user2_side = await this.findOne(id)
    return updated_user2_side
  }
}
