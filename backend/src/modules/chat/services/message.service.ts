import { ChatService } from './chat.service';
import { ChatEntity } from './../entities/chat.entity';
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateMessageInput } from '../dto/create-message.dto'
import { UpdateChatDto } from '../dto/update-chat.dto'
import { MessageEntity } from '../entities/message.entity'

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
    private readonly chatService : ChatService
  ) {}
  async createMessage(new_message: CreateMessageInput) {
    const chat = await this.chatService.findOne(new_message.chat_id)
    const message = new MessageEntity()
    message.chat = chat
    message.from = new_message.from
    message.to = new_message.to
    message.message = new_message.message
    return await this.messageRepository.save(message)
  }
  
  findAll() {
    return `This action returns all chat`
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`
  }

  remove(id: number) {
    return `This action removes a #${id} chat`
  }
}
