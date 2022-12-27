import {
  NotificationOutlined,
  SettingOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  GroupOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

// import defaultAvatar from '../../../../../assets/Default/DefaultAvatar.png'
import { BarItemT } from '../Shared/types'
import avatar from '../../../../../assets/DefaultAvatar.png'

export const NavBarItems_Right: BarItemT[] = [
 
  { type: 'link', to:'./' ,asset: {type:'icon', icon: SettingOutlined } },
  {
    
    type: 'dropdown',
    options:{dropdown_name:'random',display:'grid'},
    dropdown:[{title:'some',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some1',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some2',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some3',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some4',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some5',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some6',type:'state',asset:{ type:'icon',icon:SettingOutlined}}
],
    asset: {
        type:'icon',
      icon: NotificationOutlined,
    },
  },
  {
    type: 'dropdown',
    options:{dropdown_name:'random3',display:'flex'},
    dropdown:[{title:'some',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some1',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some2',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some3',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some4',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some5',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some6',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    
],
    asset: {
        type:'icon',
      icon: NotificationOutlined,
    },
  },
  {
    type: 'dropdown',
    options:{dropdown_name:'random4',display:'flex'},
    dropdown:[{title:'some',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some1',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some2',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some3',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some4',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some5',type:'state',asset:{ type:'icon',icon:SettingOutlined}},
    {title:'some6',type:'state',asset:{ type:'icon',icon:SettingOutlined}}
],
    asset: {
        type:'icon',
      icon: NotificationOutlined,
    },
  },
  {
    options:{dropdown_name:'user_state',display:'flex'},
    type: 'dropdown',  
    dropdown:[{title:'Log Out',type:'state'}],
    asset: {type:'image', image:  avatar },
  },
]

export const NavBarItems_Center: BarItemT[] = [
  {
    type: 'link',
    title: 'home',
    to:'/',
    asset: {type:'icon', icon: HomeOutlined },
  },
  {
    type: 'link',
    to:'/',
    title: 'watch',
    asset: {type:'icon', icon: VideoCameraOutlined },
  },
  { type: 'link',to:'/', title: 'groups', asset: {type:'icon', icon: GroupOutlined } },
  {
    type: 'link',
    to:'./',
    title: 'people',
    asset: {
      type:'icon',
      icon: UserOutlined,
    },
  },
]
