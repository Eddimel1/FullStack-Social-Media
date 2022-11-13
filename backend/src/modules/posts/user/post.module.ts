import { PostEntity_U } from './entities/post.entity'
import { Module } from '@nestjs/common'
import { PostService } from './services/post.service'
import { PostResolver } from './resolvers/post.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/modules/users/entities/user.entity'
import { UserModule } from 'src/modules/users/user.module'

@Module({
  providers: [PostResolver, PostService],
  imports: [UserModule, TypeOrmModule.forFeature([PostEntity_U, UserEntity])],
  exports: [PostService],
})
export class PostModule {}
