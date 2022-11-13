import { GroupInfo } from './entities/group-info.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { GroupInfoService } from './services/group-info.service'
import { GroupInfoResolver } from './resolvers/group-info.resolver'
import { Group_User_Relation } from 'src/modules/groups/modules/group-user-relationship/entities/group-user-relationship.entity'
import { GroupUserRelationshipModule } from 'src/modules/groups/modules/group-user-relationship/group-user-relationship.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([GroupInfo, Group_User_Relation]),
    GroupUserRelationshipModule,
  ],
  providers: [GroupInfoResolver, GroupInfoService],
})
export class GroupInfoModule {}
