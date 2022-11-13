import { GroupSidePrivate } from './../sides/group-side-private/entities/group-side-private.entity'
import { GroupSide } from './../sides/group-side/entities/group-side.entity'
import { UserSidePrivate } from './../sides/user-side-private/entities/user-side-private.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { GroupUserRelationshipResolver } from './resolvers/group-user-relationship.resolver'
import { GroupUserRelationshipService } from './services/group-user-relationship.service'
import { GroupUserSharedSideService } from '../shared-side/services/shared-side.service'
import { GroupSidePrivateService } from '../sides/group-side-private/services/group-side-private.service'
import { GroupSideService } from '../sides/group-side/services/group-side.service'
import { UserSidePrivateService } from '../sides/user-side-private/services/user-side-private.service'
import { UserSideService } from '../sides/user-side/services/user-side.service'
import { Group_User_Relation } from './entities/group-user-relationship.entity'
import { GroupUserRequestModule } from '../group-user-request/group-user-request.module'
import { UserSide_G } from '../sides/user-side/entities/user-side.entity'
import { GroupUserSharedSide } from '../shared-side/entities/shared-side.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Group_User_Relation,
      GroupUserSharedSide,
      UserSide_G,
      UserSidePrivate,
      GroupSide,
      GroupSidePrivate,
    ]),
    GroupUserRequestModule,
  ],
  providers: [
    GroupUserRelationshipService,
    GroupUserRelationshipResolver,
    UserSideService,
    GroupSideService,
    UserSidePrivateService,
    GroupSidePrivateService,
    GroupUserSharedSideService,
  ],
  exports: [GroupUserRelationshipService],
})
export class GroupUserRelationshipModule {}
