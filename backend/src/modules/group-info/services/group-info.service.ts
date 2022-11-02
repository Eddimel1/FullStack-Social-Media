import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { WasNotCreated_EX } from 'src/exceptions/db-exceptions'
import { BaseCRUDService_WO_Owner } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm/repository/Repository'
import { CreateGroupInfo_I } from '../dto/input.dto'
import { GroupInfo } from '../entities/group-info.entity'

@Injectable()
export class GroupInfoService extends BaseCRUDService_WO_Owner<GroupInfo> {
  constructor(
    @InjectRepository(GroupInfo)
    protected repository: Repository<GroupInfo>,
  ) {
    super(repository)
  }
  async create(createGroupInfoInput: CreateGroupInfo_I) {
    console.log(createGroupInfoInput)
    const { description, groupId, status } = createGroupInfoInput
    const new_group_info = new GroupInfo()
    new_group_info.ownerId = groupId
    new_group_info.description = description
    new_group_info.status = status
    const updated_info = await this.repository.save(new_group_info)
    if (updated_info) return updated_info
    else throw new WasNotCreated_EX('group-info')
  }

}
