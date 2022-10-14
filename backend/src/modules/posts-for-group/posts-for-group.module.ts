import { Module } from '@nestjs/common'
import { PostsForGroupService } from './services/posts-for-group.service'
import { PostsForGroupResolver } from './resolvers/posts-for-group.resolver'

@Module({
  providers: [PostsForGroupResolver, PostsForGroupService],
})
export class PostsForGroupModule {}
