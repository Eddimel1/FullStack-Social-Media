import { MessageEntity } from '../entities/message.entity'
import { Inject, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSubEngine } from 'graphql-subscriptions'
import { ChatService } from '../services/chat.service'
import { UpdateChatDto } from '../dto/update-chat.dto'
import { ChatEntity } from '../entities/chat.entity'
import { PUB_SUB } from '../../../globalModules/pub-sub.module'
import { CreateChatInput } from '../dto/create-chat.dto'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { JwtSocketGuard } from 'src/modules/auth/guards/socket-guard'

@Resolver(() => ChatEntity)
export class ChatResolver {
  constructor(
    private readonly chatService: ChatService,
    @Inject(PUB_SUB) private readonly pubSub: PubSubEngine,
  ) {}

  @Mutation(() => ChatEntity)
  async createChat(@Args('createChat') createChatInput: CreateChatInput) {
    const new_chat = await this.chatService.createChat(createChatInput)
    return new_chat
  }

  @Query(() => ChatEntity)
  async returnAllChats(){
    
  }
  @Subscription(() => String)
  findAll() {
    return this.chatService.findAll()
  }

  @Subscription(() => String)
  findOne(id: number) {
    return this.chatService.findOne(id)
  }
  
  @Subscription(() => String)
  update(updateChatDto: UpdateChatDto) {
    return this.chatService.update(updateChatDto.id, updateChatDto)
  }

  @Subscription(() => String)
  remove(id: number) {
    return this.chatService.remove(id)
  }
}
