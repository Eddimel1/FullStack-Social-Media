import { Galery_Audio_U } from './../../../entities/users/galery-entities/audio.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'

@Injectable()
export class Galery_Audio_Service_U extends BaseFileCRUDService<Galery_Audio_U> {
  constructor(
    @InjectRepository(Galery_Audio_U)
    protected repository: Repository<Galery_Audio_U>,
  ) {
    super(repository, Galery_Audio_U)
  }
}
