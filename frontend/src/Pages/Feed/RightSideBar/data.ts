import {
  SettingOutlined,
  NotificationOutlined,
  WechatOutlined,
  RedditOutlined,
  PlayCircleOutlined,
  AudioOutlined,
  PictureOutlined,
  GlobalOutlined,
  LaptopOutlined,
} from '@ant-design/icons'
import { BarItemT } from '../../../Data/Static/Components/Shared/types'

export const RightSideBarData: BarItemT[] = [
  {
    title: 'News',
    type: 'dropdown',
    options: {
      dropdown_name: 'news',
      display: 'flex',
      container_css: { width: '10rem', top: '40px', left: '-50px' },
    },
    dropdown: [
      {
        title: 'Photos',
        type: 'state',
        asset: { type: 'icon', icon: SettingOutlined },
      },
      {
        title: 'Videos',
        type: 'state',
        asset: { type: 'icon', icon: SettingOutlined },
      },
      {
        title: 'Locations',
        type: 'state',
        asset: { type: 'icon', icon: SettingOutlined },
      },
    ],
  },
  { type: 'link', to: '/', title: 'Updates' },
  { type: 'link', to: '/', title: 'Reactions' },
  { type: 'link', to: '/', title: 'Comments' },
  { type: 'link', to: '/', title: 'Events' },
  { type: 'link', to: '/', title: 'Favorites' },
]
