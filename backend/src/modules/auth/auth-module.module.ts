import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { AuthService } from './auth-service.service'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'
import { AuthResolver } from './resolvers/auth-resolver.resolver'
import { UserService } from '../user/services/user.service'
import { UserEntity } from '../user/entities/user.entity'
import { RefreshStrategy } from './strategies/jwt-refresh-token'
import { JwtStrategy } from './strategies/jwt-access-token'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    UserModule,
    AuthModule,
    JwtModule.register({}),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    RefreshStrategy,
    ConfigService,
    AuthResolver,
    UserService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
