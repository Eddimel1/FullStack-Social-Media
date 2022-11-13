import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateGroupSide_I } from '../dto/input.dto'
import { GroupSide } from '../entities/group-side.entity'

@Injectable()
export class GroupSideService {
  constructor(
    @InjectRepository(GroupSide)
    private readonly groupSideRepository: Repository<GroupSide>,
  ) {}
  create(withOwner?: boolean) {
    const group_side = new GroupSide()
    
    return this.groupSideRepository.save(group_side)
  }

  findOne(id: number) {
    return this.groupSideRepository.findOne({ where: { id } })
  }

  updateOne(id: number, update: UpdateGroupSide_I) {
    return this.groupSideRepository
      .createQueryBuilder('relationship')
      .where('id =:id', { id })
      .update()
      .set(update)
      .returning('*')
      .execute()
  }
}
