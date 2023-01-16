import React from 'react'
import { JuicySlider } from '../../../Components/Common/Functional/Sliders/CommonSlider/CommonSlider'
import { Avatar_w_info } from '../../../Components/Common/UI-Dumb/Graphics/Images/Avatar-w-info/Avatar_w_info'
import classes from './ProfileRightSide.module.scss'

type _props = {
    username:string,
    user_id:string,
    friend_count:string,
    avatar_src? : string,

}
export const ProfileRightSide = () => {

    const fake_array1 = []
    const fake_array2 = []
    for(let i =0;i <=7;i++){
        fake_array1.push({username:'username',src:'',user_id:1})
       
    }
    for(let i =0;i <=4;i++){
        fake_array2.push({group:'Science Forever',src:'',user_id:1})
    }
  return (

    <>
    <div className={classes.wrapper}>
         <div>Friends 21</div>
        <div className={classes.grid_container}>
            {fake_array1.map((item,i)=>{
                return (
                   <Avatar_w_info key={i + Date.now()} direction='column' user_id={item.user_id}>{item.username}</Avatar_w_info>
                )
            })}
        </div>
    </div>

<div className={classes.wrapper}>
<div>Groups 21</div>
<div className={classes.flex_container}>
   {fake_array2.map((item,i)=>{
       return (
          <Avatar_w_info key={i + Date.now()} direction='row' user_id={item.user_id}><div style={{display:'flex',flexDirection:'column'}}><div>{item.group}</div>
          <div>Best Group Ever , join now!</div>
          </div></Avatar_w_info>
       )
   })}
</div>
</div>
<div className={classes.wrapper}>
    Videos 22
    <JuicySlider></JuicySlider>
</div>
    </>
    
  )
}
