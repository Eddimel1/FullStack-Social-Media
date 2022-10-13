import { GroupEntity } from './entities/group.entity';
import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsResolver } from './groups.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [GroupsResolver, GroupsService],
  imports: [TypeOrmModule.forFeature([GroupEntity])],
})
export class GroupsModule {}
