import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdatePrivateGroupSide_I } from '../dto/input.dto'
import { GroupSidePrivate } from '../entities/group-side-private.entity'

@Injectable()
export class GroupSidePrivateService {
  constructor(
    @InjectRepository(GroupSidePrivate)
    private readonly groupSidePrivateRepository: Repository<GroupSidePrivate>,
  ) {}
  create() {
    const group_side_private = new GroupSidePrivate()
    return this.groupSidePrivateRepository.save(group_side_private)
  }

  findOne(id: number) {
    return this.groupSidePrivateRepository.findOne({ where: { id } })
  }

  updateOne(id: number, update: UpdatePrivateGroupSide_I) {
    return this.groupSidePrivateRepository
      .createQueryBuilder('relationship')
      .where('id =:id', { id })
      .update()
      .set(update)
      .returning('*')
      .execute()
  }
}
