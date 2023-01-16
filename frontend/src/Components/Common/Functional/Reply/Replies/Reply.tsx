import { EyeOutlined, FrownOutlined, LikeOutlined, RestOutlined } from '@ant-design/icons'
import { ApolloQueryResult } from '@apollo/client'
import { comment } from 'postcss'
import React, { useEffect, useRef, useState } from 'react'
import { covertToPostData } from '../../../../../Global/utility/dateAndTime'
import { Exact } from '../../../../../__generated__/types'
import { Button } from '../../../UI-Dumb/Buttons/Common'
import { CommonConfirm } from '../../../UI-Dumb/Confirms/CommonConfirm/CommonConfirm'
import { Avatar } from '../../../UI-Dumb/Graphics/Images/Avatar/Avatar'
import { CommonImage } from '../../../UI-Dumb/Graphics/Images/Common/Common'
import { CommonVideo } from '../../../UI-Dumb/Graphics/Videos/CommonVideo/CommonVideo'
import { CommonNavLink } from '../../../UI-Dumb/Lib-Wrappers/NavLink/CommonNavLink/CommonNavLink'
import { CommonModal } from '../../../UI-Dumb/Modals/Common/CommonModal'
import { CommonTextContainer } from '../../../UI-Dumb/Text/TextField/Common/textContainer'
import { AudioComponent } from '../../Audio/AudioComponent/AudioComponent'
import { VideoPlayer } from '../../Video/VideoPlayer/VideoPlayer'
import { ReplyForm } from '../ReplyForm/ReplyForm'
import { useDeleteReply_F_Post_U_Mutation } from '../ReplyForm/__generated__/DeleteReply.mutation'
import { replySectionState } from '../ReplySection/ReplySection'
import { FindDescendantsTree_F_Post_U_Document, FindDescendantsTree_F_Post_U_Query } from '../ReplySection/__generated__/GetReplies.query'
import { ReplyChildrenFragment } from '../ReplySection/__generated__/ReplyChildren.fragment'
import classes from './Reply.module.scss'

type _reply = ReplyChildrenFragment & { children?: ReplyChildrenFragment[] }
type _props = {
  reply: _reply
  depth: number
  loadMore?: (
    variables?: Partial<
      Exact<{
        id: number
        depth: number
      }>
    >
  ) => Promise<ApolloQueryResult<FindDescendantsTree_F_Post_U_Query>>
  state?:replySectionState

}
export const Reply = React.memo(({ reply, loadMore, depth,state}: _props) => {
  const [isAnim, showAnim] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [isShowModal, setShowModal] = useState(false)
  const [isShowVideoPlayer, setShowVideoPlayer] = useState(false)
  const [confirmModal , showModal] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [removeReply,removed_reply] = useDeleteReply_F_Post_U_Mutation({update:(cache,data)=>{
   const removed_post = data.data.deleteReplyForPost_U
   const identity = cache.identify(removed_post)
   const query = cache.readQuery<FindDescendantsTree_F_Post_U_Query>({query:FindDescendantsTree_F_Post_U_Document,variables:{id:reply.ownerId,depth}})
   if(query) state.current.nullData = !state.current.nullData
   cache.evict({ id: identity })
   cache.gc()
  }})
 
  const anyEntity = reply?.audio || reply?.video || reply?.image
  console.log('showForm : ' , showForm)
  const setSelectedReply = () => {
    if(state && state.current){
        state.current.selectedForm = reply.id
    }
  }
 
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.vertical_section1}>
          <div className={classes.avatarAndUsername}>
            <Avatar
              width={40}
              height={40}
              src={reply?.user?.avatar?.url}
            ></Avatar>
            <CommonNavLink to="./">{reply?.user?.username}</CommonNavLink>
          </div>
          <span>replied to <CommonNavLink to="./">{reply?.receiver?.username}</CommonNavLink></span>
          <div className={classes.views}>
            55 <EyeOutlined />
          </div>
        </div>
        <div className={classes.vertical_section2}>
          <div className={classes.topRight}></div>
          <div className={classes.center}>
            <CommonTextContainer>{reply?.text} </CommonTextContainer>
            {anyEntity && (
              <div className={classes.asset}>
                <div
                  className={classes.imgAndVideoContainer}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {reply?.image?.url && (
                    <CommonImage
                      onClick={() => setShowModal(true)}
                      scale={0.3}
                      css={{ borderRadius: '15px', cursor: 'pointer' }}
                      options={{
                        alt: 'reply-image',
                        src: reply?.image?.url,
                      }}
                    ></CommonImage>
                  )}

                  {reply?.video?.url && (
                    <CommonVideo
                      onClick={() => setShowVideoPlayer(true)}
                      css={{ height: '300px', cursor: 'pointer' }}
                      options={{
                        src: reply.video?.url,
                      }}
                    ></CommonVideo>
                  )}
                </div>

                {reply?.audio?.url && (
                  <AudioComponent
                    css={{
                      width: '70%',
                      alignSelf: 'flex-start',
                      marginTop: '2rem',
                    }}
                    src={reply?.audio?.url}
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
                {covertToPostData(reply?.createdAt)}
              </div>
              <div
                className={classes.metaItem}
                onClick={ setSelectedReply}
              >
                reply
              </div>
              <div className={classes.metaItem}>share</div>
            </div>
          </div>
        </div>
        <div className={classes.vertical_section3}>
          <div className={classes.complain}>
          <RestOutlined onClick={()=>showModal(true)} className={classes.icon}></RestOutlined>
            <FrownOutlined className={classes.icon}></FrownOutlined>
          </div>
          <div className={classes.likes}>
            <LikeOutlined className={classes.icon}></LikeOutlined>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: '80%',
          height: '1px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          margin: '0 auto',
        }}
      ></hr>
       {state.current?.selectedForm === reply.id && <div ref={ref} style={{padding:'4rem'}}><ReplyForm  isRootReply={false} _state={state} receiverId={reply?.user.id} _replyId={reply?.id}></ReplyForm></div>}
      {confirmModal && <CommonConfirm showModal={showModal} title='Are you sure you want to remove your comment?' >
     <Button onClick={() => {
        removeReply({variables:{input:reply.id}}).then(()=>{showModal(false)}).catch((e)=>console.log(e))
        
     }} >Yes</Button>
        <Button onClick={() => showModal(false)} css={{marginLeft:'0.3rem'}}>No</Button>
     </CommonConfirm>}
       {  isShowModal && <CommonModal setActive={setShowModal} active={isShowModal}>
            <CommonImage
              css={{ borderRadius: '15px', boxShadow: '0px 0px 5px white' }}
              options={{ src: reply.image?.url, alt: 'fullSize-picture' }}
            ></CommonImage>
          </CommonModal>}
        

       {isShowVideoPlayer && <CommonModal setActive={setShowVideoPlayer} active={isShowVideoPlayer}>
          <VideoPlayer src={reply.video?.url}></VideoPlayer>
        </CommonModal>}
      {reply?.children &&
        reply?.children.map((_reply, i) => {
          const reply = _reply as ReplyChildrenFragment & {
            children: ReplyChildrenFragment[]
          }
          return <Reply  state={state} depth={depth} key={reply.id} reply={_reply}></Reply>
        })}
    </div>
  )
})
