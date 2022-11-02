import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { PostsForGroupService } from './services/posts-for-group.service'
import { PostsForGroupResolver } from './resolvers/posts-for-group.resolver'
import { PostEntity_G } from './entities/posts-for-group.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity_G])],
  providers: [PostsForGroupResolver, PostsForGroupService],
  exports: [PostsForGroupService],
})
export class PostsForGroupModule {}
