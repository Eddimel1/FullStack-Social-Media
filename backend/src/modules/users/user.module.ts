import { ConfigModule, ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { UserService } from './services/user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserResolver } from './resolvers/user-resolver'
import { UserEntity } from './entities/user.entity'
import { PassportModule } from '@nestjs/passport'
import { MailModule } from '../mails/mails.module'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { MailService } from '../mails/services/mails.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    MailModule,
    ConfigModule,
    JwtModule,
  ],
  providers: [
    UserService,
    UserResolver,
    MailService,
    JwtService,
    ConfigService,
  ],
  exports: [UserService, MailService, JwtService, ConfigService],
})
export class UserModule {}
