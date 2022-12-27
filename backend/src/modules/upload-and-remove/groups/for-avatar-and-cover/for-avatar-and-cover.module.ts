import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AvatarService_G } from 'src/modules/rest-files/services/for-groups/cover-and-avatar-services/group-avatar.service'
import { CoverService_G } from 'src/modules/rest-files/services/for-groups/cover-and-avatar-services/group-cover.service'

import { ForCoverAndAvatar_G } from './for-avatar-and-cover.service'

@Module({
  imports: [TypeOrmModule.forFeature([AvatarService_G, CoverService_G])],
  providers: [ForCoverAndAvatar_G],
  exports: [ForCoverAndAvatar_G],
})
export class ForAvatarAndCoverModule_G {}
