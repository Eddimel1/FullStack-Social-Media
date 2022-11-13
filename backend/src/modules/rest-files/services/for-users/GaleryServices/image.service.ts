import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { Galery_Image_U } from 'src/modules/rest-files/entities/users/galery-entities/image.entity'

import { Repository } from 'typeorm'

@Injectable()
export class Galery_Image_Service_U extends BaseFileCRUDService<Galery_Image_U> {
  constructor(
    @InjectRepository(Galery_Image_U)
    protected repository: Repository<Galery_Image_U>,
  ) {
    super(repository, Galery_Image_U)
  }
}
