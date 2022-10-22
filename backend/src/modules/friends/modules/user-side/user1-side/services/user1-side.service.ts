import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUserSide } from '../../shared/dto/input.dto'
import { User1Side } from '../entities/user1-side.entity'

@Injectable()
export class User1SideService {
  constructor(
    @InjectRepository(User1Side)
    private readonly user1SideRepository: Repository<User1Side>,
  ) {}
  create() {
    const new_user1_side = new User1Side()
    return this.user1SideRepository.save(new_user1_side)
  }

  findOne(id: number) {
    return this.user1SideRepository.findOne({ where: { id } })
  }

  async update(id: number, updateUser1SideInput: UpdateUserSide) {
    await this.user1SideRepository
      .createQueryBuilder('user1_side')
      .update()
      .where('id =:id', { id })
      .set(updateUser1SideInput)
      .execute()
    const updated_user1_side = await this.findOne(id)
    return updated_user1_side
  }
}
