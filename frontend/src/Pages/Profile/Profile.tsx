import { CommentSection } from "../../Components/Common/Functional/Comment/CommentSection/CommentSection"
import { Post } from "../../Components/Common/Functional/Posts/Post/Post"
import { PostForm } from "../../Components/Common/Functional/Posts/PostForm/PostForm"
import { JuicySlider } from "../../Components/Common/Functional/Sliders/CommonSlider/CommonSlider"
import { LeftSideBarLayout } from "../../Components/Common/Layouts/Common/Profile/ProfileLayout"
import { _1SideBarLayout } from "../../Components/Common/Layouts/User/1SideBarLayout/1SideBarLayout"
import { MainLoader } from "../../Components/Common/UI-Dumb/Loaders/main-loader"

import { authState } from "../../Redux/Selectors/selectors"
import { ProfileHeader } from "./ProfileHeader/ProfileHeader"
import { ProfilePostSection } from "./ProfilePostSection/ProfilePostSection"
import { ProfileRightSide } from "./ProfileRightSide/ProfileRightSide"
import { usegetUserProfileQuery } from "./__generated__/Profile.query"


export const Profile = () => {
    const id = authState().user.id
  const data = usegetUserProfileQuery({variables:{id:authState().user.id}})
  const user = data?.data?.getOneUser.user
  console.log('USER_DATA : ' ,data?.data?.getOneUser)
  return (
    <>
     {user ? 
     <LeftSideBarLayout top={ <ProfileHeader user={user}></ProfileHeader>} left={<><JuicySlider animation container_css={{width:'70%'}}></JuicySlider> 
     <ProfilePostSection user={user}></ProfilePostSection></>} 
     
     right={<ProfileRightSide></ProfileRightSide>}>
       
    </LeftSideBarLayout> : <MainLoader css={{position:'absolute',top:'50%',left:"50%"}}></MainLoader>}
    </>
  )
}
