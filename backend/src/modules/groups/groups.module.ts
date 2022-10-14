import { GroupEntity } from './entities/group.entity'
import { Module } from '@nestjs/common'
import { GroupsService } from './services/groups.service'
import { GroupsResolver } from './resolvers/groups.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  providers: [GroupsResolver, GroupsService],
  imports: [TypeOrmModule.forFeature([GroupEntity])],
})
export class GroupsModule {}
