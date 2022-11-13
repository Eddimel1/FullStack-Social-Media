import { Galery_Video_U } from 'src/modules/rest-files/entities/users/galery-entities/video.entity'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'

@Injectable()
export class Galery_Video_Service_U extends BaseFileCRUDService<Galery_Video_U> {
  constructor(
    @InjectRepository(Galery_Video_U)
    protected repository: Repository<Galery_Video_U>,
  ) {
    super(repository, Galery_Video_U)
  }
}
