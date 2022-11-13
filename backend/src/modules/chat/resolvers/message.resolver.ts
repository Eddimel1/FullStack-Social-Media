import { MessageEntity } from '../entities/message.entity'
import { Inject, UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql'
import { PubSubEngine } from 'graphql-subscriptions'
import { MessageService } from '../services/message.service'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { JwtSocketGuard } from 'src/modules/auth/guards/socket-guard'
import { CreateMessageInput, UpdateChatDto } from '../dto/input.dto'
import { PUB_SUB } from 'src/global/globalModules/pub-sub.module'

enum SUBSCRIPTION_EVENTS {
  messageAdded = 'messageAdded',
}

@Resolver(() => MessageEntity)
export class MessageResolver {
  constructor(
    private readonly chatService: MessageService,
    @Inject(PUB_SUB) private readonly pubSub: PubSubEngine,
  ) {}

  @Mutation(() => MessageEntity)
  async addMessage(@Args('createMessage') newMessage: CreateMessageInput) {
    const new_message = await this.chatService.createMessage(newMessage)

    await this.pubSub.publish(SUBSCRIPTION_EVENTS.messageAdded, {
      messageAdded: new_message,
    })
    console.log(new_message)
    return new_message
  }
  @Public()
  @UseGuards(JwtSocketGuard)
  @Subscription(() => MessageEntity)
  messageAdded() {
    return this.pubSub.asyncIterator(SUBSCRIPTION_EVENTS.messageAdded)
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
