
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'
import { Galery_Video_G } from 'src/modules/rest-files/entities/groups/galery-entities/video.entity'
import { Repository } from 'typeorm'

@Injectable()
export class Galery_Video_Service_G extends BaseFileCRUDService<Galery_Video_G> {
  constructor(
    @InjectRepository(Galery_Video_G)
    protected repository: Repository<Galery_Video_G>,
  ) {
    super(repository, Galery_Video_G)
  }
}

