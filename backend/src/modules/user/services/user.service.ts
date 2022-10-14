import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Not, Repository } from 'typeorm'
import { UserEntity } from '../entities/user.entity'
import * as bcrypt from 'bcrypt'
import { relationsFilterT, UsersRefreshTokenInput } from '../types/types'
import { DEFAULT_PORTION, RELATIONS } from 'src/constants/db.constants'
import { UserAlreadyExists_E } from 'src/exeptions/user-exeptions'
import { ERROR_MESSAGES } from 'src/exeptions/messages'

import { fromFindAndCount } from 'src/SharedUtils.ts/transforms'
import { CreateUserInput, SensitiveUserInput } from '../dto/input.dto'
import { getAllUser_O } from '../dto/output.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    const { password, email, username } = createUserInput
    const hashedPassword = await bcrypt.hash(password, 3)
    const _is_already_exists = await this.userRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .orWhere('user.email = :email', { email })
      .getOne()
    if (_is_already_exists) {
      throw new UserAlreadyExists_E(
        _is_already_exists.username,
        _is_already_exists.email,
      )
    }
    const user = new UserEntity()
    user.password = hashedPassword
    user.email = email
    user.username = username
    return await this.userRepository.save(user)
  }

  async getOneUser(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id })
    if (!user)
      throw new NotFoundException(`user with id :  ${id}  was not found`)
    return user
  }
  async getOneUserByUserName(username: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ username })
    if (!user)
      throw new NotFoundException(
        `user with username {${username}} was not found`,
      )
    return user
  }

  async getAllUsers(user_id: number): Promise<getAllUser_O> {
    const users = await this.userRepository.findAndCount({
      where: { id: Not(user_id) },
      take: DEFAULT_PORTION,
    })
    if (!users)
      throw new InternalServerErrorException(ERROR_MESSAGES.INTERNALSERVERERROR)

    return fromFindAndCount(
      users[0],
      'users',
      users[1],
    ) as unknown as getAllUser_O
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id })
    return id
  }

  async updateUsersSensitiveData({
    id,
    ...updateUserInput
  }: SensitiveUserInput): Promise<UserEntity> {
    await this.userRepository.update({ id }, { ...updateUserInput })
    return await this.getOneUser(id)
  }
  async updateTokens(usersRefreshToken: UsersRefreshTokenInput) {
    const user = await this.userRepository.update(
      { id: usersRefreshToken.id },
      { ...usersRefreshToken },
    )
    return user
  }

  async logOutUser(id: number) {
    const update = { r_token: null }
    const isSuccess = await this.userRepository.update({ id: id }, update)
    if (isSuccess) return true
    return false
  }
  async returnFullUser(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: RELATIONS,
    })
    console.log(user)
    return user
  }

  async getUserWithRelationalDataById(id: number, relations: string[]) {
    const queryBuilder = this.userRepository.createQueryBuilder('user')
    for (let i = 0; i < relations.length; i++) {
      queryBuilder.leftJoinAndSelect(`user.${relations[i]}`, `${relations[i]}`)
    }
    const user = await queryBuilder.where({ id }).getOne()
    console.log('_USER : ', user)
    return user
  }
  async getRelationalDataById(id: number, relation: relationsFilterT) {
    const queryBuilder = this.userRepository.createQueryBuilder('user')

    queryBuilder.leftJoinAndSelect(`user.${relation}`, `${relation}`)

    const relationalEntities = await queryBuilder.where({ id }).getOne()
    console.log(`${relation}`, relationalEntities[relation])
    return relationalEntities[relation]
  }
  getUserQueryBuilder() {
    return this.userRepository.createQueryBuilder('user')
  }
}
