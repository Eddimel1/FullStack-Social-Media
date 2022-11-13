import { pathExists, remove } from 'fs-extra'
import * as path from 'path'
import { Injectable } from '@nestjs/common'
import { UserService } from 'src/modules/users/services/user.service'


const storageP = '../../../../storage'
@Injectable()
export class DeleteUserService {
  constructor(private readonly userService: UserService) {}

  async deleteUser(id: number) {
    const _path = path.join(__dirname, `${storageP}/${id}`)
    const exists = await pathExists(_path)
    if (exists) {
      remove(_path, (err) => console.log('was not removed'))
      const removed_user = await this.userService.removeUser(id)
      return removed_user
    }
  }
}
