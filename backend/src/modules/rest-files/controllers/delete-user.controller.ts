import { DeleteUserService } from './../services/DeleteUserService/delete-user.service'
import { Controller, Delete, Req } from '@nestjs/common'

@Controller()
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete('/delete_me')
  async deleteUser(@Req() req) {
    const user_id = req.user.id
    const id = this.deleteUserService.deleteUser(user_id)
    console.log(id)
    return id
  }
}
