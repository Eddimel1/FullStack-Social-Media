import { Injectable } from '@nestjs/common'
import { CreateSharedSideInput } from '../dto/create-shared-side.input'
import { UpdateSharedSideInput } from '../dto/update-shared-side.input'

@Injectable()
export class SharedSideService {
  create(createSharedSideInput: CreateSharedSideInput) {
    return 'This action adds a new sharedSide'
  }

  findAll() {
    return `This action returns all sharedSide`
  }

  findOne(id: number) {
    return `This action returns a #${id} sharedSide`
  }

  update(id: number, updateSharedSideInput: UpdateSharedSideInput) {
    return `This action updates a #${id} sharedSide`
  }

  remove(id: number) {
    return `This action removes a #${id} sharedSide`
  }
}
