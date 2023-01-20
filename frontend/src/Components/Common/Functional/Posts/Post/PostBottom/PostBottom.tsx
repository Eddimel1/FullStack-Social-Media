import {
  MessageOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import { memo, useEffect, useRef, useState } from 'react'
import classes from './PostBottom.module.scss'
import shake from '../../../../../../Global/Styles/modules/animations/shake.module.scss'
import pulse from '../../../../../../Global/Styles/modules/animations/pulse.module.scss'
import skew from '../../../../../../Global/Styles/modules/animations/skew.module.scss'
import { CountBadge } from '../../../../UI-Dumb/Badges/CountBadge/CountBadge'
import { CommentSection } from '../../../Comment/CommentSection/CommentSection'
import React from 'react'
type _props = {
  postId: number
}
export const PostBottom = memo(({ postId }: _props) => {
  const activeAnimations = useRef<{
    comments: boolean
    likes: boolean
    share: boolean
  }>({ comments: false, likes: false, share: false })
  const [showCommentSection, setShow] = useState(true)
  const state = {} as { _showSection: () => void; _toggleSection: () => void }
  const [_, force] = useState(false)
  console.log('IN POSTBOTTOM : ', showCommentSection)
  state._showSection = () => {
    setShow(true)
  }
  state._toggleSection = () => {
    setShow((prev) => !prev)
  }
  const onMouseEnter = (e, el) => {
    activeAnimations.current[el] = true
    force((prev) => !prev)
  }
  const onMouseLeave = (e, el) => {
    activeAnimations.current[el] = false
    force((prev) => !prev)
  }

  return (
    <>
      <div className={classes.bottom}>
        <div className={classes.bottomLeft}>
          <div
            className={`${classes.comments} ${
              activeAnimations.current['comments'] ? skew.start : ''
            }`}
            onMouseEnter={(e) => onMouseEnter(e, 'comments')}
            onMouseLeave={(e) => onMouseLeave(e, 'comments')}
          >
            <CountBadge count={6}></CountBadge>
            <MessageOutlined
              onClick={() => {
                state._toggleSection()
              }}
              style={{ fontSize: '30px', color: 'rgb(215, 230, 183)' }}
            ></MessageOutlined>
          </div>
          <div
            className={`${classes.likes} ${
              activeAnimations.current['likes'] ? shake.start : ''
            }`}
            onMouseEnter={(e) => onMouseEnter(e, 'likes')}
            onMouseLeave={(e) => onMouseLeave(e, 'likes')}
          >
            <CountBadge count={6}></CountBadge>
            <LikeOutlined
              style={{ fontSize: '30px', color: 'rgb(255, 204, 204)' }}
            ></LikeOutlined>
          </div>
        </div>

        <div
          className={`${classes.share} ${
            activeAnimations.current['share'] ? pulse.start : ''
          }`}
          onMouseEnter={(e) => onMouseEnter(e, 'share')}
          onMouseLeave={(e) => onMouseLeave(e, 'share')}
        >
          <CountBadge count={6}></CountBadge>
          <ShareAltOutlined
            style={{ fontSize: '30px', color: 'rgb(192, 242, 198)' }}
          ></ShareAltOutlined>
        </div>
      </div>

      <CommentSection
        state={state}
        isShow={showCommentSection}
        postId={postId}
      ></CommentSection>
    </>
  )
})
