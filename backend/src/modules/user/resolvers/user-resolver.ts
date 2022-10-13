import { ExecutionContext, Req, UseGuards } from '@nestjs/common'
import {
  Args,
  Context,
  GraphQLExecutionContext,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql'
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth-guard'
import { RolesGuard } from 'src/modules/auth/guards/roles-guard'
import { CreateUserInput } from '../dto/create-user.dto'
import { UserEntity } from '../entities/user.entity'
import { UserService } from '../services/user.service'
import { Roles } from '../../auth/decorators/roles-decorator'
import { RolesDec } from '../../auth/decorators/roles-decorator'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { UpdateUserInput } from '../dto/update-user.dto'
import { getAllUser_O } from '../dto/getAllAndCountOutput'

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') createUserInput: CreateUserInput,
  ): Promise<Omit<UserEntity, 'password'>> {
    const { password, ...serializedUser } = await this.userService.createUser(
      createUserInput,
    )
    return serializedUser
  }
  @RolesDec(Roles.User)
  @UseGuards(RolesGuard)
  @Mutation(() => UserEntity)
  async updateUsersSensitiveData(
    @Context() context,
    @Args('updateUser') updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    const user_id = context.req.user.id
    return await this.userService.updateUsersSensitiveData({
      ...updateUserInput,
      id: user_id,
    })
  }
  @RolesDec(Roles.User)
  @UseGuards(RolesGuard)
  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id)
  }
  @RolesDec(Roles.User)
  @UseGuards(RolesGuard)
  @Query(() => UserEntity)
  async getOneUser(
    @Context() context,
    @Args('id', { nullable: true }) id?: number,
  ): Promise<UserEntity> {
    const my_id = context.req.user.id
    return id
      ? await this.userService.getOneUser(id)
      : await this.userService.getOneUser(my_id)
  }
  @RolesDec(Roles.User)
  @UseGuards(RolesGuard)
  @Query(() => getAllUser_O)
  async getAllUsers(_, __, context): Promise<getAllUser_O> {
    const user_id = context.req.user.id
    return await this.userService.getAllUsers(user_id)
  }
}
