import { UserInfoEntity } from 'src/modules/user-info/entities/user-info.entity'
import { Injectable } from '@nestjs/common'
import { CreateUserInfoInput } from '../dto/create-user-info.input'
import { UpdateUserInfoInput } from '../dto/update-user-info.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserInfoService {
  constructor(
    @InjectRepository(UserInfoEntity)
    private readonly userInfoRepository: Repository<UserInfoEntity>,
  ) {}
  async create(createUserInfoInput: CreateUserInfoInput & { ownerId: number }) {
    const userInfo = new UserInfoEntity()
    userInfo.country = createUserInfoInput.country
    userInfo.first_name = createUserInfoInput.first_name
    userInfo.last_name = createUserInfoInput.last_name
    userInfo.ownerId = createUserInfoInput.ownerId

    return await this.userInfoRepository.save(userInfo)
  }

  async findOne(id: number) {
    return this.userInfoRepository.findOne({ where: { ownerId: id } })
  }

  async update(id: number, updateUserInfoInput: UpdateUserInfoInput) {
    await this.userInfoRepository
      .createQueryBuilder('info')
      .where('ownerId = :id', { id })
      .update()
      .set(updateUserInfoInput)
      .execute()
    const updated_info = await this.findOne(id)
    return updated_info
  }
}
