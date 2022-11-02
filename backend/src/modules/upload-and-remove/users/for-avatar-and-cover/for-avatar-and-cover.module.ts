import { U_Cover_EN } from 'src/modules/rest-files/entities/users/avatar-and-cover/user-cover.entity';
import { U_Avatar_EN } from './../../../rest-files/entities/users/avatar-and-cover/user-avatar.entity';
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ForCoverAndAvatar_U } from './for-avatar-and-cover.service'

@Module({
  imports: [TypeOrmModule.forFeature([U_Avatar_EN, U_Cover_EN])],
  providers: [ForCoverAndAvatar_U],
  exports: [ForCoverAndAvatar_U],
})
export class ForAvatarAndCoverModule_U {}
