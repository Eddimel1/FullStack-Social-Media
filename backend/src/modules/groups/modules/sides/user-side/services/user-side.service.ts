import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUserSide_I } from '../dto/input.dto'
import { UserSide_G } from '../entities/user-side.entity'

@Injectable()
export class UserSideService {
  constructor(
    @InjectRepository(UserSide_G)
    private readonly userSideRepository: Repository<UserSide_G>,
  ) {}
  create() {
    const user_side = new UserSide_G()
    return this.userSideRepository.save(user_side)
  }

  findOne(id: number) {
    return this.userSideRepository.findOne({ where: { id } })
  }

  updateOne(id: number, update: UpdateUserSide_I) {
    return this.userSideRepository
      .createQueryBuilder('relationship')
      .where('id =:id', { id })
      .update()
      .set(update)
      .returning('*')
      .execute()
  }
}
