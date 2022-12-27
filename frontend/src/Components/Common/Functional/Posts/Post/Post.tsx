import React, { useState } from 'react'
import { covertToPostData } from '../../../../../Global/utility/dateAndTime'
import { filteredPosts } from '../../../../../Pages/Profile/ProfilePostSection/ProfilePostSection'
import { CommonImage } from '../../../UI-Dumb/Graphics/Images/Common/Common'
import { CommonVideo } from '../../../UI-Dumb/Graphics/Videos/CommonVideo/CommonVideo'
import { CommonModal } from '../../../UI-Dumb/Modals/Common/CommonModal'
import { CommonTextContainer } from '../../../UI-Dumb/Text/TextField/Common/textContainer'
import { AudioComponent } from '../../Audio/AudioComponent/AudioComponent'
import { CommonComment } from '../../Comment/Comment/Common/CommonComment'
import { CommentSection } from '../../Comment/CommentSection/CommentSection'
import { CommentForm } from '../../Comment/Form/CommentForm'
import { VideoPlayer } from '../../Video/VideoPlayer/VideoPlayer'
import { PostTop } from '../PostTop/PostTop'
import classes from './Post.module.scss'
import { PostBottom } from './PostBottom/PostBottom'

export const Post = ({publishedPosts,avatar_url} : {publishedPosts : filteredPosts,avatar_url:string}) => {
  const [isAnim, showAnim] = useState(false)
  const [isShow, setShowModal] = useState(false)
  const [commentSection , showCommentSection] = useState(false)
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)
 
  const onMouseEnter = () => {
    showAnim(true)
  }
  const onMouseLeave = () => {
    showAnim(false)
  }
  return (
    <>
    {publishedPosts?.posts?.map((post)=>{
        console.log(post.owner)
        return (
            <div className={classes.wrapper}>
            <div className={classes.container}>
              <PostTop date={covertToPostData(post.createdAt)} username={post.owner.username} avatar_url={avatar_url}></PostTop>
              <div className={classes.center}>
                <CommonTextContainer>
                  {post.text}
                </CommonTextContainer>
                <div className={classes.asset}>
                    <div className={classes.imgAndVideoContainer} style={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
                    {post.image?.url && <CommonImage onClick={()=>setShowModal(true)} scale={0.5}
                    css={{ borderRadius: '15px',cursor:'pointer'}}
                    options={{
                      alt: 'post-image',
                      src: post.image?.url,
                    }}
                  ></CommonImage>}

                 { post.video?.url && <CommonVideo onClick={()=>setShowVideoPlayer(true)} css={{height:'300px',cursor:'pointer'}}  options={{
                                src: post.video?.url
                            }}></CommonVideo>}
                    </div>
                  
                  {post.audio?.url && <AudioComponent css={{width:'70%' , alignSelf:'flex-start',marginTop:'2rem'}}  src={post.audio?.url} ></AudioComponent>}
                </div>
              </div>
              {/* <CommonModal setActive={setShowModal} active={isShow}>
            <CommonImage
              css={{ borderRadius: '15px', boxShadow: '0px 0px 5px white' }}
              options={{ src: post.image?.url, alt: 'fullSize-picture' }}
            ></CommonImage>
          </CommonModal>
        

       <CommonModal setActive={setShowVideoPlayer} active={showVideoPlayer}>
          <VideoPlayer src={post.video?.url}></VideoPlayer>
        </CommonModal> */}
              <div className={classes.bottom}>
                <PostBottom></PostBottom>
                
              </div>
            
             
            </div>
          </div>

        )
    })}
   
    </>
   
  )
}
