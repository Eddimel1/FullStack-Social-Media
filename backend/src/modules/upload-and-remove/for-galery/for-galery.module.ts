import { ImageService } from 'src/modules/rest-files/services/GaleryServices/image.service'
import { Module } from '@nestjs/common'
import { ForGaleryService } from './for-galery.service'
import { AudioService } from 'src/modules/rest-files/services/GaleryServices/audio.service'
import { VideoService } from 'src/modules/rest-files/services/GaleryServices/video.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AudioEntity } from 'src/modules/rest-files/entities/galery-entities/audio.entity'
import { ImageEntity } from 'src/modules/rest-files/entities/galery-entities/image.entity'
import { VideoEntity } from 'src/modules/rest-files/entities/galery-entities/video.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntity, AudioEntity, VideoEntity])],
  providers: [ForGaleryService, ImageService, VideoService, AudioService],
  exports: [ForGaleryService, ImageService, VideoService, AudioService],
})
export class ForGaleryModule {}
