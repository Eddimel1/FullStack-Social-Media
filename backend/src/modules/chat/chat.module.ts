import { ChatService } from './services/chat.service'
import { ChatEntity } from './entities/chat.entity'
import { Module } from '@nestjs/common'
import { MessageService } from './services/message.service'
import { MessageResolver } from './resolvers/message.resolver'
import { MessageEntity } from './entities/message.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ChatResolver } from './resolvers/chat.resolver'
import { RestFilesModule } from '../rest-files/rest-files.module'
import { UserEntity } from '../users/entities/user.entity'
import { UserService } from '../users/services/user.service'
import { UserModule } from '../users/user.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatEntity, MessageEntity, UserEntity]),
    UserModule,
  ],
  providers: [MessageResolver, ChatResolver, MessageService, ChatService],
  exports: [MessageService, ChatService],
})
export class ChatModule {}
