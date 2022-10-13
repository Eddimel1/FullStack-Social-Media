import { UserInfoEntity } from 'src/modules/user-info/entities/user-info.entity'
import { Module } from '@nestjs/common'
import { UserInfoService } from './services/user-info.service'
import { UserInfoResolver } from './resolvers/user-info.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  providers: [UserInfoResolver, UserInfoService],
  imports: [TypeOrmModule.forFeature([UserInfoEntity])],
})
export class UserInfoModule {}
