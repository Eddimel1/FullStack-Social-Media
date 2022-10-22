import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateGroupUserSharedSide_I } from '../dto/input.dto'
import { GroupUserSharedSide } from '../entities/shared-side.entity'


@Injectable()
export class GroupUserSharedSideService {
  constructor(
    @InjectRepository(GroupUserSharedSide)
    private readonly groupUserSharedSideRepository: Repository<GroupUserSharedSide>,
  ) {}
  create() {
    const group_side = new GroupUserSharedSide()
    return this.groupUserSharedSideRepository.save(group_side)
  }

  findOne(id: number) {
    return this.groupUserSharedSideRepository.findOne({ where: { id } })
  }

  updateOne(id: number, update: UpdateGroupUserSharedSide_I) {
    return this.groupUserSharedSideRepository
      .createQueryBuilder('relationship')
      .where('id =:id', { id })
      .update()
      .set(update)
      .returning('*')
      .execute()
  }
}
