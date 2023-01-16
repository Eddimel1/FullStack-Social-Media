import {  WechatOutlined, RedditOutlined, PlayCircleOutlined, AudioOutlined, PictureOutlined, GlobalOutlined, LaptopOutlined } from "@ant-design/icons";
import { BarItemT } from "../Shared/types";

export const returnLeftSideBarItems = (avatar_url):BarItemT[] => {
return  [
 
    { type: 'link', to:'/profile',title:'My Profile', asset: {type:'image', image:avatar_url} },
    { type: 'link', to:'/',title:'Messenger', asset: { type:'icon', icon: WechatOutlined } },
    { type: 'link', to:'/',title:'Friends', asset: { type:'icon',icon: RedditOutlined  } },
    { type: 'link', to:'/',title:'Videos', asset: {type:'icon', icon: PlayCircleOutlined  } },
    { type: 'link', to:'/',title:'Music', asset: {type:'icon', icon: AudioOutlined  } },
    { type: 'link', to:'/',title:'Photos', asset: {type:'icon', icon: PictureOutlined  } },
    { type: 'link', to:'/',title:'Groups', asset: {type:'icon', icon: GlobalOutlined  } },
    { type: 'link', to:'/',title:'Games', asset: { type:'icon',icon: LaptopOutlined  } },
    
   
  ]
}
