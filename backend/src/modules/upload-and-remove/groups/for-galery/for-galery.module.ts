import { Galery_Image_G } from 'src/modules/rest-files/entities/groups/galery-entities/image.entity'

import { Module } from '@nestjs/common'
import { ForGaleryService_G } from './for-galery.service'

import { TypeOrmModule } from '@nestjs/typeorm'
import { Galery_Audio_G } from 'src/modules/rest-files/entities/groups/galery-entities/audio.entity'
import { Galery_Video_G } from 'src/modules/rest-files/entities/groups/galery-entities/video.entity'
import { Galery_Audio_Service_G } from 'src/modules/rest-files/services/for-groups/GaleryServices/audio.service'
import { Galery_Image_Service_G } from 'src/modules/rest-files/services/for-groups/GaleryServices/image.service'
import { Galery_Video_Service_G } from 'src/modules/rest-files/services/for-groups/GaleryServices/video.service'


@Module({
  imports: [
    TypeOrmModule.forFeature([Galery_Image_G, Galery_Video_G, Galery_Audio_G]),
  ],
  providers: [
    ForGaleryService_G,
    Galery_Image_Service_G,
    Galery_Video_Service_G,
    Galery_Audio_Service_G,
  ],
  exports: [
    ForGaleryService_G,
    Galery_Image_Service_G,
    Galery_Video_Service_G,
    Galery_Audio_Service_G,
  ],
})
export class ForGaleryModule {}
