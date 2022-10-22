import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUserPrivateSide_I } from '../dto/input.dto'
import { UserSidePrivate } from '../entities/user-side-private.entity'

@Injectable()
export class UserSidePrivateService {
  constructor(
    @InjectRepository(UserSidePrivate)
    private readonly userSidePrivateRepository: Repository<UserSidePrivate>,
  ) {}
  create() {
    const user_side_private = new UserSidePrivate()
    return this.userSidePrivateRepository.save(user_side_private)
  }

  findOne(id: number) {
    return this.userSidePrivateRepository.findOne({ where: { id } })
  }
  updateOne(id: number, update: UpdateUserPrivateSide_I ) {
    return this.userSidePrivateRepository
      .createQueryBuilder('relationship')
      .where('id =:id', { id })
      .update()
      .set(update)
      .returning('*')
      .execute()
  }
}
