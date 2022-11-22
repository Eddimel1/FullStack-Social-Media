import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from '../entities/user.entity'
import { UsersRefreshTokenInput } from '../types/types'
import * as bcrypt from 'bcrypt'
import { UserService } from './user.service'
@Injectable()
export class UserAuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService,
  ) {}

  async updateTokens(usersRefreshToken: UsersRefreshTokenInput) {
    const user = await this.userRepository.update(
      { id: usersRefreshToken.id },
      { ...usersRefreshToken },
    )
    return user
  }
  async updatePassword(id: number, password: string) {
    const hashedPassword = await bcrypt.hash(password, 3)
    await this.userRepository.update({ id }, { password: hashedPassword })
    return this.userService.getOneUser(id)
  }
  async updateEmail(id: number, email: string) {
    this.userRepository.update({ id }, { email })
  }
  async updateResetToken(id: number, token: string) {
    return this.userRepository.update({ id }, { reset_token: token })
  }
  async confirmUser(id: number) {
    return this.userRepository.update({ id }, { confirmed: true })
  }

  async logOutUser(id: number) {
    const update = { r_token: null }
    const isSuccess = await this.userRepository.update({ id: id }, update)
    if (isSuccess) return true
    return false
  }
}
