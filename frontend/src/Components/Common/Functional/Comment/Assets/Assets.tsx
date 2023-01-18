import {
  FullscreenOutlined,
  DeleteOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { CommonImage } from '../../../UI-Dumb/Graphics/Images/Common/Common'
import { CommonVideo } from '../../../UI-Dumb/Graphics/Videos/CommonVideo/CommonVideo'
import { CommonModal } from '../../../UI-Dumb/Modals/Common/CommonModal'
import { CommonPad } from '../../../UI-Dumb/pads/form'
import { AudioComponent } from '../../Audio/AudioComponent/AudioComponent'
import { assetType } from '../../PublishForm/Utility/factories'
import { VideoPlayer } from '../../Video/VideoPlayer/VideoPlayer'

import classes from './Assets.module.scss'

export const CommentAssets = React.memo(({ audio, video, image }: assetType) => {
  const [showPhotoPad, setShowPhotoPad] = useState(false)
  const [showVideoPad, setShowVideoPad] = useState(false)

  const [isShow, setShowModal] = useState(false)
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)
  const [_, force] = useState(false)
  const imageOrVideoLocalUrl = video?.local_url || image?.local_url
  const imageOrVideoServerUrl = video?.entity?.url || image?.entity?.url
  const anyLocalUrl = (audio?.local_url || imageOrVideoLocalUrl)
  const anyServerUrl = (audio?.entity?.url || imageOrVideoServerUrl)
  console.log('IN ASSETS : ', 'ANYLOCAL : ' , anyLocalUrl , 'ANYSERVER : ' ,anyServerUrl)
  useEffect(() => {
    if (audio || image || video) force((prev) => !prev)
  }, [audio, video, image])
  return (
    <>
      {(anyServerUrl || anyLocalUrl) && (
        <div className={classes.assets}>
          {(imageOrVideoServerUrl || imageOrVideoLocalUrl) && (
            <div className={classes.top}>
              <div
                className={classes.imageWrapper}
                style={{ height: '250px', position: 'relative' }}
                onMouseEnter={() => setShowPhotoPad(true)}
                onMouseLeave={() => setShowPhotoPad(false)}
              >
                {showPhotoPad && (
                  <CommonPad>
                    <FullscreenOutlined
                      onClick={() => setShowModal(true)}
                      className={classes.activeActionInModal}
                    ></FullscreenOutlined>
                    <DeleteOutlined
                      onClick={() => {
                        image.operation_type = 'delete/image_f_post_u'
                        force((prev) => !prev)
                      }}
                      className={classes.removeInModal}
                    ></DeleteOutlined>
                  </CommonPad>
                )}
                {image?.entity?.url && (
                  <CommonImage
                    css={{ width: '250px', height: '250px' }}
                    options={{ src: image?.entity?.url, alt: 'some' }}
                  ></CommonImage>
                )}
              </div>
              <div
                className={classes.videoWrapper}
                style={{ height: '250px', position: 'relative' }}
                onMouseEnter={() => setShowVideoPad(true)}
                onMouseLeave={() => setShowVideoPad(false)}
              >
                {showVideoPad && (
                  <CommonPad>
                    <PlayCircleOutlined
                      onClick={() => setShowVideoPlayer(true)}
                      className={classes.activeActionInModal}
                    ></PlayCircleOutlined>
                    <DeleteOutlined
                      onClick={() => {
                        video.operation_type = 'delete/video_f_post_u'
                        force((prev) => !prev)
                      }}
                      className={classes.removeInModal}
                    ></DeleteOutlined>
                  </CommonPad>
                )}
                {(video?.entity?.url || video?.local_url) && (
                  <CommonVideo
                    css={{ width: '250px', height: '250px' }}
                    options={{ src: video?.entity?.url ||video?.local_url}}
                  ></CommonVideo>
                )}
              </div>

              <CommonModal setActive={setShowModal} active={isShow}>
                <CommonImage
                  css={{ borderRadius: '15px', boxShadow: '0px 0px 5px white' }}
                  options={{ src: image?.entity?.url, alt: 'fullSize-picture' }}
                ></CommonImage>
              </CommonModal>

              <CommonModal
                setActive={setShowVideoPlayer}
                active={showVideoPlayer}
              >
                <VideoPlayer
                  src={video?.entity?.url || video?.local_url}
                ></VideoPlayer>
              </CommonModal>
            </div>
          )}

          <div className={classes.bottom}>
            {(audio?.entity?.url || audio?.local_url) && (
              <>
                <DeleteOutlined
                  className={classes.deleteAudioIcon}
                  onClick={() => {
                    audio.operation_type = 'delete/audio_f_post_u';
                    force((prev) => !prev)
                  }}
                ></DeleteOutlined>

                <AudioComponent
               
                  src={audio?.entity?.url || audio.local_url}
                ></AudioComponent>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
})
