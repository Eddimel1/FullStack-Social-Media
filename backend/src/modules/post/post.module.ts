import { PostEntity } from './entities/post.entity'
import { Module } from '@nestjs/common'
import { PostService } from './services/post.service'
import { PostResolver } from './resolvers/post.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../user/entities/user.entity'
import { UserModule } from '../user/user.module'
import { PostController } from './post.controller'

@Module({
  providers: [PostResolver, PostService],
  imports: [UserModule, TypeOrmModule.forFeature([PostEntity, UserEntity])],
  exports: [PostService],
  controllers: [PostController],
})
export class PostModule {}
