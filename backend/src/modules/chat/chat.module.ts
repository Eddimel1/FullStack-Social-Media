import { ChatService } from './services/chat.service'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { UserService } from 'src/modules/user/services/user.service'
import { UserModule } from './../user/user.module'
import { ChatEntity } from './entities/chat.entity'
import { Module } from '@nestjs/common'
import { MessageService } from './services/message.service'
import { MessageResolver } from './resolvers/message.resolver'
import { MessageEntity } from './entities/message.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ChatResolver } from './resolvers/chat.resolver'
import { RestFilesModule } from '../rest-files/rest-files.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatEntity, MessageEntity, UserEntity]),
    UserModule,
    RestFilesModule,
  ],
  providers: [
    MessageResolver,
    ChatResolver,
    MessageService,
    UserService,

    ChatService,
  ],
  exports: [MessageService, ChatService],
})
export class ChatModule {}
