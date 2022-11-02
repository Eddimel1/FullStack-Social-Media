import { Galery_Image_G } from './../../../entities/groups/galery-entities/image.entity';
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service';


@Injectable()
export class Galery_Image_Service_G extends BaseFileCRUDService<Galery_Image_G> {
  constructor(
    @InjectRepository(Galery_Image_G)
    protected repository: Repository<Galery_Image_G>,
  ) {
    super(repository, Galery_Image_G)
  }
}

