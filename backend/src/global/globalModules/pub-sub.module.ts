import { PubSub } from 'graphql-subscriptions'
import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

export const PUB_SUB = 'PUB_SUB'

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PUB_SUB,
      useValue: new PubSub(),
    },
  ],
  exports: [PUB_SUB],
})
export class PubsubModule {}
