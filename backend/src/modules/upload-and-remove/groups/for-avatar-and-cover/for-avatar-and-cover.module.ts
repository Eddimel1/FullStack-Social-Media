import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AvatarService_G } from 'src/modules/rest-files/services/for-groups/cover-and-avatar-services/group-avatar.service'
import { CoverService_G } from 'src/modules/rest-files/services/for-groups/cover-and-avatar-services/group-cover.service'

import { ForCoverAndAvatarService } from './for-avatar-and-cover.service'

@Module({
  imports: [TypeOrmModule.forFeature([AvatarService_G, CoverService_G])],
  providers: [ForCoverAndAvatarService],
  exports: [ForCoverAndAvatarService],
})
export class ForAvatarAndCoverModule_G {}
