import { Injectable } from '@nestjs/common'
import { CreateReplyInput, UpdateReplyInput } from '../dto/input.dto'


@Injectable()
export class RepliesService {
  create(createReplyInput: CreateReplyInput) {
    return 'This action adds a new reply'
  }

  findAll() {
    return `This action returns all replies`
  }

  findOne(id: number) {
    return `This action returns a #${id} reply`
  }

  update(id: number, updateReplyInput: UpdateReplyInput) {
    return `This action updates a #${id} reply`
  }

  remove(id: number) {
    return `This action removes a #${id} reply`
  }
}
