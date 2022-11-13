import { Module } from '@nestjs/common'
import { UserInfoService } from './services/user-info.service'
import { UserInfoResolver } from './resolvers/user-info.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserInfoEntity } from './entities/user-info.entity'

@Module({
  providers: [UserInfoResolver, UserInfoService],
  imports: [TypeOrmModule.forFeature([UserInfoEntity])],
})
export class UserInfoModule {}
