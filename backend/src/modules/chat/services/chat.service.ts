import { UserService } from 'src/modules/user/services/user.service'
import { ChatEntity } from './../entities/chat.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateChatInput, UpdateChatDto } from '../dto/input.dto'

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
    private readonly userService: UserService,
  ) {}
  async createChat(new_chat: CreateChatInput) {
    const user = await this.userService.getOneUser(new_chat.owner)
    const chat = new ChatEntity()
    chat.owner = user
    chat.companion = new_chat.companion
    return await this.chatRepository.save(chat)
  }

  findAll() {
    return `This action returns all chat`
  }

  async findOne(id: number) {
    const chat = await this.chatRepository.findOneBy({ id })
    return chat
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`
  }

  remove(id: number) {
    return `This action removes a #${id} chat`
  }
}
