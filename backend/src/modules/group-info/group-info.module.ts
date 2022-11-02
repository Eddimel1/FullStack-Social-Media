import { GroupInfo } from './entities/group-info.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { GroupInfoService } from './services/group-info.service'
import { GroupInfoResolver } from './resolvers/group-info.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([GroupInfo])],
  providers: [GroupInfoResolver, GroupInfoService],
})
export class GroupInfoModule {}
