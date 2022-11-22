import { MailModule } from './../mails/mails.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { AuthService } from './auth-service.service'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { AuthResolver } from './resolvers/auth-resolver.resolver'
import { RefreshStrategy } from './strategies/jwt-refresh-token'
import { JwtStrategy } from './strategies/jwt-access-token'
import { UserEntity } from '../users/entities/user.entity'
import { UserService } from '../users/services/user.service'
import { UserModule } from '../users/user.module'
import { AuthController } from './controllers/auth.controller'
import { UserAuthService } from '../users/services/user-auth.service'

@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    UserModule,
    AuthModule,
    MailModule,
    JwtModule.register({}),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    RefreshStrategy,
    ConfigService,
    AuthResolver,
    UserService,
    UserAuthService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
