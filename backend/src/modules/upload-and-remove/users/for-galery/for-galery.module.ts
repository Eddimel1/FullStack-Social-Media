import { Galery_Image_Service_U } from './../../../rest-files/services/for-users/GaleryServices/image.service'
import { Galery_Audio_U } from './../../../rest-files/entities/users/galery-entities/audio.entity'

import { Module } from '@nestjs/common'


import { TypeOrmModule } from '@nestjs/typeorm'
import { Galery_Image_U } from 'src/modules/rest-files/entities/users/galery-entities/image.entity'
import { Galery_Video_U } from 'src/modules/rest-files/entities/users/galery-entities/video.entity'
import { Galery_Audio_Service_U } from 'src/modules/rest-files/services/for-users/GaleryServices/audio.service'
import { Galery_Video_Service_U } from 'src/modules/rest-files/services/for-users/GaleryServices/video.service'
import { ForGaleryService_U } from './for-galery.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Galery_Audio_U, Galery_Video_U, Galery_Image_U]),
  ],
  providers: [
    ForGaleryService_U,
    Galery_Image_Service_U,
    Galery_Video_Service_U,
    Galery_Audio_Service_U,
  ],
  exports: [
    ForGaleryService_U,
    Galery_Image_Service_U,
    Galery_Video_Service_U,
    Galery_Audio_Service_U,
  ],
})
export class ForGaleryModule {}
