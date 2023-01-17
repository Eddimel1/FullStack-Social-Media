import {
  LikeOutlined,
  FrownOutlined,
  EyeOutlined,
  RestOutlined,
} from '@ant-design/icons'
import React, { useState } from 'react'
import { covertToPostData } from '../../../../../Global/utility/dateAndTime'
import { Button } from '../../../UI-Dumb/Buttons/Common'
import { CommonConfirm } from '../../../UI-Dumb/Confirms/CommonConfirm/CommonConfirm'
import { Avatar } from '../../../UI-Dumb/Graphics/Images/Avatar/Avatar'
import { CommonImage } from '../../../UI-Dumb/Graphics/Images/Common/Common'
import { CommonVideo } from '../../../UI-Dumb/Graphics/Videos/CommonVideo/CommonVideo'
import { CommonNavLink } from '../../../UI-Dumb/Lib-Wrappers/NavLink/CommonNavLink/CommonNavLink'
import { CommonModal } from '../../../UI-Dumb/Modals/Common/CommonModal'
import { CommonTextContainer } from '../../../UI-Dumb/Text/TextField/Common/textContainer'
import { AudioComponent } from '../../Audio/AudioComponent/AudioComponent'
import { ReplyForm } from '../../Reply/ReplyForm/ReplyForm'
import { ReplySection } from '../../Reply/ReplySection/ReplySection'
import { VideoPlayer } from '../../Video/VideoPlayer/VideoPlayer'
import { useRemoveCommentForPost_U_Mutation } from '../CommentForm/__generated__/DeleteComment.mutation'
import { commentT_U } from '../CommentSection/CommentSection'

import classes from './CommonComment.module.scss'

export const CommonComment = React.memo(
  ({ comment }: { comment: commentT_U }) => {
    const [showReplies, setShowReplies] = useState(false)
    const [showReplyForm, setShowReplyForm] = useState(false)
    const [_, force] = useState(false)
    const [confirmModal, showModal] = useState(false)
    const [isShowModal, setShowModal] = useState(false)
    const [isShowVideoPlayer, setShowVideoPlayer] = useState(false)
    const [removeComment, removed_comment] = useRemoveCommentForPost_U_Mutation(
      {
        update: (cache, data) => {
          const removed_post = data.data.removeCommentForPost_U
          const identity = cache.identify(removed_post)

          cache.evict({ id: identity })
        },
      }
    )
    const anyEntity = comment.audio || comment.video || comment.image
    console.log('IS SHOW REPLIES : ', showReplies)
    return (
      <>
        <hr
          style={{
            width: '80%',
            height: '1px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            margin: '0 auto',
          }}
        ></hr>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.vertical_section1}>
              <div className={classes.avatarAndUsername}>
                <Avatar src={comment.user?.avatar?.url}></Avatar>
                <CommonNavLink to="./">{comment.user.username}</CommonNavLink>
              </div>
              <div className={classes.views}>
                55 <EyeOutlined />
              </div>
            </div>
            <div className={classes.vertical_section2}>
              <div className={classes.topRight}></div>
              <div className={classes.center}>
                <CommonTextContainer>{comment.text} </CommonTextContainer>
                {anyEntity && (
                  <div className={classes.asset}>
                    <div
                      className={classes.imgAndVideoContainer}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                      }}
                    >
                      {comment.image?.url && (
                        <div style={{ height: '200px' }}>
                          <CommonImage
                            onClick={() => setShowModal(true)}
                            css={{ borderRadius: '15px', cursor: 'pointer' }}
                            options={{
                              alt: 'comment-image',
                              src: comment.image?.url,
                            }}
                          ></CommonImage>
                        </div>
                      )}

                      {comment.video?.url && (
                        <CommonVideo
                          onClick={() => setShowVideoPlayer(true)}
                          css={{ height: '300px', cursor: 'pointer' }}
                          options={{
                            src: comment.video?.url,
                          }}
                        ></CommonVideo>
                      )}
                    </div>

                    {comment.audio?.url && (
                      <AudioComponent
                        css={{
                          width: '70%',
                          alignSelf: 'flex-start',
                          marginTop: '2rem',
                        }}
                        src={comment.audio?.url}
                      ></AudioComponent>
                    )}
                  </div>
                )}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '70%',
                    marginTop: '5rem',
                  }}
                >
                  <div className={classes.metaItem}>
                    {covertToPostData(comment.createdAt)}
                  </div>
                  <div
                    className={classes.metaItem}
                    onClick={() => setShowReplyForm((prev) => !prev)}
                  >
                    reply
                  </div>
                  <div className={classes.metaItem}>share</div>
                </div>
              </div>
            </div>
            <div className={classes.vertical_section3}>
              <div className={classes.complain}>
                <RestOutlined
                  onClick={() => {
                    showModal(true)
                  }}
                  className={classes.icon}
                ></RestOutlined>
                <FrownOutlined className={classes.icon}></FrownOutlined>
              </div>
              <div className={classes.likes}>
                <LikeOutlined className={classes.icon}></LikeOutlined>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              cursor: 'pointer',
              margin: '2rem 0',
            }}
            onClick={() => setShowReplies((prev) => !prev)}
          >
            Show Replies...
          </div>
          {confirmModal && (
            <>
              <CommonConfirm
                showModal={showModal}
                title="Are you sure you want to remove your comment?"
              >
                <Button
                  onClick={() => {
                    removeComment({
                      variables: {
                        input: {
                          commentId: Number(comment.id),
                          ownerId: comment.ownerId,
                        },
                      },
                    }).catch((e) => console.log(e))
                  }}
                >
                  Yes
                </Button>
                <Button
                  onClick={() => showModal(false)}
                  css={{ marginLeft: '0.3rem' }}
                >
                  No
                </Button>
              </CommonConfirm>
            </>
          )}
          {isShowModal && (
            <CommonModal setActive={setShowModal} active={isShowModal}>
              <CommonImage
                autoScale={false}
                css={{ borderRadius: '15px', boxShadow: '0px 0px 5px white' }}
                options={{ src: comment.image?.url, alt: 'fullSize-picture' }}
              ></CommonImage>
            </CommonModal>
          )}

          {isShowVideoPlayer && (
            <CommonModal
              setActive={setShowVideoPlayer}
              active={isShowVideoPlayer}
            >
              <VideoPlayer src={comment.video?.url}></VideoPlayer>
            </CommonModal>
          )}
          {showReplyForm && (
            <div style={{ margin: '2rem' }}>
              <ReplyForm
                isRootReply={true}
                _openReplies={setShowReplies}
                receiverId={comment.user.id}
                commentId={Number(comment.id)}
              ></ReplyForm>
            </div>
          )}
          {showReplies && (
            <ReplySection commentId={Number(comment.id)}></ReplySection>
          )}
        </div>
      </>
    )
  }
)
