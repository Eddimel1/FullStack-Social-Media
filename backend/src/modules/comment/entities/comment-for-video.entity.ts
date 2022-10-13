import { Video_F_Comment_F_Video } from '../../rest-files/entities/entitites-for-comments/video-f-video'
import { Image_F_Comment_F_Video } from '../../rest-files/entities/entitites-for-comments/image-f-video'
import { Audio_F_Comment_F_Video } from '../../rest-files/entities/entitites-for-comments/audio-f-video.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { VideoEntity } from 'src/modules/rest-files/entities/galery-entities/video.entity'

@ObjectType()
@Entity('comments_f_galery_videos')
export class CommentForVideoEntity extends BaseCommentEntity {
  @Column()
  videoId: number
  @Field(() => VideoEntity)
  @ManyToOne(() => VideoEntity, (video) => video.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'imageId' })
  commented_video: VideoEntity

  @Column()
  @Field()
  text:string
  
  @Field(() => Audio_F_Comment_F_Video)
  @OneToOne(() => Audio_F_Comment_F_Video, (audio) => audio.comment, {
    onDelete: 'CASCADE',
  })
  audio: Audio_F_Comment_F_Video

  @Field(() => Image_F_Comment_F_Video)
  @OneToOne(() => Image_F_Comment_F_Video, (image) => image.comment, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Comment_F_Video

  @Field(() => Video_F_Comment_F_Video)
  @OneToOne(() => Video_F_Comment_F_Video, (video) => video.comment, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Comment_F_Video
}
