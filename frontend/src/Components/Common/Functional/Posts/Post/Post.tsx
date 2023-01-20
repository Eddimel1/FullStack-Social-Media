import { memo, useState } from 'react'
import { covertToPostData } from '../../../../../Global/utility/dateAndTime'
import { filteredPosts } from '../../../../../Pages/Profile/ProfilePostSection/ProfilePostSection'
import { authState } from '../../../../../Redux/Selectors/selectors'
import { CommonImage } from '../../../UI-Dumb/Graphics/Images/Common/Common'
import { CommonVideo } from '../../../UI-Dumb/Graphics/Videos/CommonVideo/CommonVideo'
import { CommonModal } from '../../../UI-Dumb/Modals/Common/CommonModal'
import { CommonTextContainer } from '../../../UI-Dumb/Text/TextField/Common/textContainer'
import { AudioComponent } from '../../Audio/AudioComponent/AudioComponent'
import { VideoPlayer } from '../../Video/VideoPlayer/VideoPlayer'

import { PostTop } from '../PostTop/PostTop'
import classes from './Post.module.scss'
import { PostBottom } from './PostBottom/PostBottom'

export const Post = memo(({
  publishedPosts,
  avatar_url,
}: {
  publishedPosts: filteredPosts
  avatar_url: string
}) => {
  //   const [isAnim, showAnim] = useState(false)
  const [isShowModal, setShowModal] = useState(false)
  const [isShowVideoPlayer, setShowVideoPlayer] = useState(false)

  console.log('POST RERENDEER')
  return (
    <>
    
      {publishedPosts?.posts &&
        publishedPosts?.posts?.map((post, i) => {
             const anyEntity = post.audio || post.video || post.image
          return (
            
            <div className={classes.wrapper} key={i + Date.now()}>
                 
              <div className={classes.container}>
            
                <PostTop
                  date={covertToPostData(post.createdAt)}
                  username={post.owner.username}
                  avatar_url={avatar_url}
                  postId={post.id}
                ></PostTop>
                <div className={classes.center}>
                  <CommonTextContainer css={{ margin: '2rem 0 2rem 2.8rem' }}>
                    {post.text}
                  </CommonTextContainer>
                 { anyEntity && <div className={classes.asset}>
                      <CommonModal setActive={setShowModal} active={isShowModal}>
                    <CommonImage
                      css={{
                        borderRadius: '15px',
                        maxHeight:'800px',
                        boxShadow: '0px 0px 5px white',
                      }}
                      options={{
                        src: post.image?.url,
                        alt: 'fullSize-picture',
                      }}
                    ></CommonImage>
                  </CommonModal>
               
                  <CommonModal
                    setActive={setShowVideoPlayer}
                    active={isShowVideoPlayer}
                  >
                    <VideoPlayer src={post.video?.url}></VideoPlayer>
                  </CommonModal>
                    <div
                      className={classes.imgAndVideoContainer}
                     
                    >
                      {post.image?.url && (
                      
                              <CommonImage
                             onClick={() => setShowModal(true)}
                            css={{ borderRadius: '15px', cursor: 'pointer',width:'250px' }}
                            options={{
                              alt: 'post-image',
                              src: post.image?.url,
                            }}
                        ></CommonImage>
                       
                      
                      )}

                      {post.video?.url && (
                        <CommonVideo
                          onClick={() => setShowVideoPlayer(true)}
                          css={{ cursor: 'pointer' }}
                          options={{
                            src: post.video?.url,
                          }}
                        ></CommonVideo>
                      )}
                    </div>

                    {post.audio?.url && (
                        
                        <AudioComponent
                          css={{
                            width:'70%',
                            marginTop: '2rem',
                          }}
                          src={post.audio?.url}
                        ></AudioComponent>
                    )}
                  </div>}
                </div>
              
                
                
                <div className={classes.bottom}>
                  <PostBottom postId={Number(post.id)}></PostBottom>
                </div>
              </div>
            </div>
            
          )
        })}
        
    </>
  )
})
