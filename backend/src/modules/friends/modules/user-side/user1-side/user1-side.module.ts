import { Module } from '@nestjs/common'
import { User1SideService } from './services/user1-side.service'


@Module({
  providers: [ User1SideService],
})
export class User1SideModule {}
