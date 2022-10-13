import { Module } from '@nestjs/common'
import { UserService } from './services/user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserResolver } from './resolvers/user-resolver'
import { UserEntity } from './entities/user.entity'
import { PassportModule } from '@nestjs/passport'


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PassportModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
