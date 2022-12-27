import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DEFAULT_PORTION } from 'src/global/constants/db.constants'
import { ERROR_MESSAGES } from 'src/global/exceptions/messages'
import { UserAlreadyExists_EX } from 'src/global/exceptions/user-exceptions'
import { fromFindAndCount } from 'src/global/globalUtils/transforms/transforms'
import { Repository, Not } from 'typeorm'
import { CreateUserInput } from '../dto/input.dto'
import { getAllUser_O } from '../dto/output.dto'
import { UserEntity } from '../entities/user.entity'
import { RELATIONS } from '../types/types'
import * as bcrypt from 'bcrypt'
import { MailService } from 'src/modules/mails/services/mails.service'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly mailService: MailService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    const { password, email, username, birthDate, sex, country } =
      createUserInput
    const hashedPassword = await bcrypt.hash(password, 3)
    const _is_already_exists = await this.userRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .orWhere('user.email = :email', { email })
      .getOne()
    if (_is_already_exists) {
      throw new UserAlreadyExists_EX(
        _is_already_exists.username,
        _is_already_exists.email,
      )
    }
    const user = new UserEntity()
    user.password = hashedPassword
    user.email = email
    user.username = username
    user.birthDate = birthDate
    user.sex = sex
    user.country = country

    try {
      const created_user = await this.userRepository.save(user)
      const token = await this.jwtService.signAsync(
        { id: created_user.id },
        {
          secret: `${this.configService.get('MAIL_SECRET')}`,
        },
      )
      const result = await this.mailService.sendUserConfirmation(
        created_user.email,
        created_user.username,
        token,
      )
      return created_user
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getOneUser(id: number): Promise<UserEntity> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .leftJoinAndSelect('user.posts', 'posts')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .leftJoinAndSelect('user.cover', 'cover')
      .leftJoinAndSelect('posts.audio', 'audio')
      .leftJoinAndSelect('posts.video', 'video')
      .leftJoinAndSelect('posts.image', 'image')
      .leftJoinAndSelect('posts.owner', 'owner')
      .orderBy('posts.published', 'ASC')
      .addOrderBy('posts.createdAt', 'DESC')
      .getOne()
    console.log(user)
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
  async getOneUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ email })

    if (!user)
      throw new NotFoundException(`user with username {${email}} was not found`)
    return user
  }

  async getAllUsers(user_id: number): Promise<getAllUser_O> {
    const users = await this.userRepository.findAndCount({
      where: { id: Not(user_id) },
      take: DEFAULT_PORTION,
    })
    if (!users)
      throw new InternalServerErrorException(
        ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      )

    return fromFindAndCount(users, 'users') as unknown as getAllUser_O
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id })
    return id
  }

  async returnFullUser(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: RELATIONS,
    })
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
}
