import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { GroupToUserRequestResolver } from './resolvers/group-to-user-request.resolver'
import { GroupUserRequest } from './entities/group-user-request.entity'
import { UserToGroupRequestResolver } from './resolvers/user-to-group-request.resolver'
import { GroupToUserRequestService } from './services/group-to-user-request.service'
import { UserToGroupRequestService } from './services/user-to-group-request.service'

@Module({
  imports: [TypeOrmModule.forFeature([GroupUserRequest])],
  providers: [
    UserToGroupRequestResolver,
    GroupToUserRequestResolver,
    GroupToUserRequestService,
    UserToGroupRequestService,
  ],
  exports: [GroupToUserRequestService, UserToGroupRequestService],
})
export class GroupUserRequestModule {}
