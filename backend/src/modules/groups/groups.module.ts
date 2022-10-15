import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'
import { GroupEntity } from './modules/groups/entities/group.entity'
import { GroupsResolver } from './modules/groups/resolvers/groups.resolver'
import { GroupsService } from './modules/groups/services/groups.service'

@Module({
  providers: [GroupsResolver, GroupsService],
  imports: [TypeOrmModule.forFeature([GroupEntity])],
})
export class GroupsModule {}
