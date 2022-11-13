import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { Galery_Audio_G } from 'src/modules/rest-files/entities/groups/galery-entities/audio.entity'
import { Repository } from 'typeorm'

@Injectable()
export class Galery_Audio_Service_G extends BaseFileCRUDService<Galery_Audio_G> {
  constructor(
    @InjectRepository(Galery_Audio_G)
    protected repository: Repository<Galery_Audio_G>,
  ) {
    super(repository, Galery_Audio_G)
  }
}
