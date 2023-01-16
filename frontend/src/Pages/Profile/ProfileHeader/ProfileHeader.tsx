import { FileImageOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import { SimpleDropDown } from '../../../Components/Common/Functional/DropDowns/Simple/SimpleDropDown'
import { CommonFileInput } from '../../../Components/Common/Functional/Input/File/Common/Common-file-input'
import { OnlineBadge } from '../../../Components/Common/UI-Dumb/Badges/OnlineBadge/OnlineBadge'
import { Button } from '../../../Components/Common/UI-Dumb/Buttons/Common'
import { Avatar } from '../../../Components/Common/UI-Dumb/Graphics/Images/Avatar/Avatar'
import { CommonModal } from '../../../Components/Common/UI-Dumb/Modals/Common/CommonModal'
import { CommonOption } from '../../../Components/Common/UI-Dumb/Options/Common/Common'
import { updateAvatar } from '../../../Redux/Slices/AuthSlice'
import { useAppDispatch } from '../../../Redux/Store/Store'
import { Protected_Instance } from '../../../Rest-Api/Axios/Instances/protected.instance'
import classes from './ProfileHeader.module.scss'
import { ProfileHeaderFragment } from './__generated__/ProfileHeader.fragment'

type _props = {
  user: ProfileHeaderFragment
}

export const ProfileHeader = ({ user }: _props) => {
  const [avatarOptions, showAvatarOptions] = useState(false)
  const [coverOptions, showCoverOptions] = useState(false)
  const [selected, setSelected] = useState()
  const [showAvatar, setShowAvatar] = useState(false)
  const [file, setFile] = useState<{ _file: File; operation_type: string }>()
  const [_, force] = useState(false)
  const _avatar = useRef<typeof user.avatar>()
  const _cover = useRef<typeof user.cover>()
  const dispatch = useAppDispatch()
  const background = _cover?.current
    ? `url(${_cover?.current?.url})`
    : 'linear-gradient(90deg, rgba(223,223,223,1) 0%, rgba(222,212,212,1) 53%, rgba(228,228,228,1) 100%)'
  const fileUpdateCb = (_file: File, operation_type: string) => {
    setFile({ _file, operation_type })
  }
  useEffect(() => {
    _avatar.current = user?.avatar
    _cover.current = user?.cover
    if (_avatar.current && _cover.current) force((prev) => !prev)
  }, [user])

  useEffect(() => {
    if (file) {
      const formdata = new FormData()
      const { _file, operation_type } = file
      formdata.append('file', _file)
      Protected_Instance.post(
        `${process.env.NEST_SERVER_URL}user/${operation_type}`,
        formdata,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
        .then((res) => {
          if (operation_type === 'upload/avatar') {
            _avatar.current = res.data
            console.log(res.data)
                dispatch(updateAvatar(res.data))
            force((prev) => !prev)
          } else if (operation_type === 'upload/cover') {
            _cover.current = res.data
            force((prev) => !prev)
          }
        })
        .catch((e) => console.log(e))
    }
  }, [file, setFile])

  useEffect(() => {
    if (selected) {
      Protected_Instance.delete(
        `${process.env.NEST_SERVER_URL}user/${selected}`
      )
        .then(() => {
          if (_cover.current && selected === `delete/cover/${_cover.current.file_name}`) {
            _cover.current = null
            force((prev) => !prev)
          } else if ( _avatar.current &&
            selected === `delete/avatar/${_avatar.current.file_name}`
          ) {
            _avatar.current = null
            force((prev) => !prev)
          }
        })
        .catch((e) => console.log(e))
    }
  }, [selected, setSelected])
  return (
    <div className={classes.wrapper}>
      <CommonModal active={showAvatar} setActive={setShowAvatar}>
      
        <Avatar
         onMouseLeave={() => showCoverOptions(false)}
          src={_avatar.current && _avatar.current.url}
          width={500}
          height={500}
        ></Avatar>
      </CommonModal>
      <div className={classes.container}>
        <div className={classes.header_top}>
          <div
            className={classes.cover}
            style={{
              background: ` ${background}`,
              height: '300px',
              position: 'relative',
            }}
          >
            <div
              className={classes.coverOptions}
              onMouseEnter={() => showCoverOptions(true)}
            >
              <div style={{alignSelf:'center',}}><Button color='light_blue'>Update Avatar</Button></div>
              {coverOptions && (
                <SimpleDropDown
                  showOnClick={false}
                  showArrow={false}
                  onMouseLeave={() => showCoverOptions(false)}
                  options={{
                    display: 'flex',
                    dropdown_css: {
                     top:'55px',
                    },
                  }}
                >
                  <div className={classes.coverOptionsContainer}>
                    <CommonFileInput
                      children_type="text"
                      operation_type="upload/cover"
                      updateCb={fileUpdateCb}
                    >
                      <FileImageOutlined
                        style={{ fontSize: '20px', marginLeft: '0.1rem' }}
                      ></FileImageOutlined>
                      Update Cover
                    </CommonFileInput>
                    <CommonOption
                      asset={{ type: 'icon', icon: FileImageOutlined }}
                      value={`delete/cover/${_cover?.current?.file_name}`}
                      updateCb={setSelected}
                    >
                      Delete Cover
                    </CommonOption>
                  </div>
                </SimpleDropDown>
              )}
            </div>
           
          </div>
        </div>
        <div
          className={classes.header_bottom}
         
          style={{ boxShadow: '0px 0px 4px black', height: '100px' ,position:'relative' , display:'flex',justifyContent:'space-around'}}
        >
             <div
              onMouseEnter={() => showAvatarOptions(true)}
              style={{ position: 'absolute', bottom: '35%', left: '10%' }}
            >
                  <Avatar
                src={_avatar.current && _avatar.current.url}
                width={125}
                height={125}
              >
               <OnlineBadge isOnline={true}></OnlineBadge>
              </Avatar>
            
              {avatarOptions && (
                <SimpleDropDown
                  showArrow={false}
                  showOnClick={false}
                  onMouseLeave={() => showAvatarOptions(false)}
                  options={{
                    display: 'flex',
                    dropdown_css: { top:'2.8rem'},
                  }}
                >
                  <div className={classes.coverOptionsContainer}>
                    <CommonOption
                      asset={{ type: 'icon', icon: FileImageOutlined }}
                      updateCb={() => setShowAvatar(true)}
                    >Show Avatar</CommonOption>
                    <CommonOption
                      asset={{ type: 'icon', icon: FileImageOutlined }}
                      value={`delete/avatar/${_avatar?.current?.file_name}`}
                      updateCb={setSelected}
                    >
                      Delete Avatar
                    </CommonOption>
                    <CommonFileInput
                      operation_type="upload/avatar"
                      children_type='text'
                      updateCb={fileUpdateCb}
                    >
                      <FileImageOutlined
                        style={{ fontSize: '20px', marginLeft: '0.1rem' }}
                      ></FileImageOutlined>
                      Update Avatar
                    </CommonFileInput>
                  </div>
                </SimpleDropDown>
              )}
            </div>
            <div className={classes.username} style={{fontSize:'2rem' , alignSelf:'center'}}>{user?.username}</div>
                  <div style={{alignSelf:'center'}}>
                  <Button color='black'>Edit Profile</Button>
                  </div>
        </div>
      </div>
    </div>
  )
}
