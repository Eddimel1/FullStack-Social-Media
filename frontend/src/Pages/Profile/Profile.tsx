import { Post } from "../../Components/Common/Functional/Posts/Post/Post"
import { PostForm } from "../../Components/Common/Functional/Posts/PostForm/PostForm"
import { JuicySlider } from "../../Components/Common/Functional/Sliders/CommonSlider/CommonSlider"
import { Common2SideLayout } from "../../Components/Common/Layouts/Common/Profile/ProfileLayout"
import { _1SideBarLayout } from "../../Components/Common/Layouts/User/1SideBarLayout/1SideBarLayout"

import { authState } from "../../Redux/Selectors/selectors"
import { ProfileHeader } from "./ProfileHeader/ProfileHeader"
import { ProfilePostSection } from "./ProfilePostSection/ProfilePostSection"
import { ProfileRightSide } from "./ProfileRightSide/ProfileRightSide"
import { usegetUserProfileQuery } from "./__generated__/Profile.query"


export const Profile = () => {
  const data = usegetUserProfileQuery({variables:{id:authState().user.id}})
  const user = data?.data?.getOneUser
  console.log('OBJ :' ,data?.data?.getOneUser)
  return (
    <>
     <Common2SideLayout top={ <ProfileHeader user={user}></ProfileHeader>} left={<><JuicySlider animation container_css={{width:'70%'}}></JuicySlider> <ProfilePostSection user={user}>
        </ProfilePostSection></>} right={<ProfileRightSide></ProfileRightSide>}>
    </Common2SideLayout>
    </>
  )
}
