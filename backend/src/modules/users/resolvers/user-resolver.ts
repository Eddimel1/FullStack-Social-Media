import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { RolesGuard } from 'src/modules/auth/guards/roles-guard'
import { UserEntity } from '../entities/user.entity'
import { UserService } from '../services/user.service'
import { Roles } from '../../auth/decorators/roles-decorator'
import { RolesDec } from '../../auth/decorators/roles-decorator'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { CreateUserInput } from '../dto/input.dto'
import { getAllUser_O, getOneUser_O } from '../dto/output.dto'

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
  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id)
  }
  @RolesDec(Roles.User)
  @UseGuards(RolesGuard)
  @Query(() => getOneUser_O)
  async getOneUser(
    @Context() context,
    @Args('id', { nullable: true }) id?: number,
  ): Promise<{ user: UserEntity } & { is_my_user: boolean }> {
    const my_id = context.req.user.id
    const user = await this.userService.getOneUser(id)
    const response = { user, is_my_user: my_id === id ? true : false }
    return response
  }
  @RolesDec(Roles.User)
  @UseGuards(RolesGuard)
  @Query(() => getAllUser_O)
  async getAllUsers(_, __, context): Promise<getAllUser_O> {
    const user_id = context.req.user.id
    return await this.userService.getAllUsers(user_id)
  }
}
