import { MessageEntity } from '../entities/message.entity'
import { Inject, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSubEngine } from 'graphql-subscriptions'
import { ChatService } from '../services/chat.service'

import { ChatEntity } from '../entities/chat.entity'

import { CreateChatInput, UpdateChatDto } from '../dto/input.dto'
import { PUB_SUB } from 'src/global/globalModules/pub-sub.module'

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
  async returnAllChats() {}
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
