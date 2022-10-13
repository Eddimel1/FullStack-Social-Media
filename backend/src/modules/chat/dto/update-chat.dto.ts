import { PartialType } from '@nestjs/mapped-types'
import { CreateChatInput } from './create-chat.dto'

export class UpdateChatDto extends PartialType(CreateChatInput) {
  id: number
}
