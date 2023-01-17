import React, { useEffect, useRef, useState } from 'react'
import {
  NavBarItems_Center,
  returnNavBarItems_Right,
} from '../../../../Data/Static/Components/NavBars/Common'
import { TextInput } from '../../Functional/Input/Text/Input'
import { NavBarLayOut } from '../../Layouts/Common/NavBar/NavBar'
import fakeLogo from '../../../../../assets/fakeLogo.png'
import { CommonImage } from '../../UI-Dumb/Graphics/Images/Common/Common'
import { BarItems } from '../../Functional/Bars/BarItems/BarItems'
import LogOutMutation from '../../../../GraphQl/User/Mutations/Auth/LogOut'
import { logout_TH } from '../../../../Redux/Thunks/Auth/Logout'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../Redux/Store/Store'
import { Button } from '../../UI-Dumb/Buttons/Common'
import { CommonConfirm } from '../../UI-Dumb/Confirms/CommonConfirm/CommonConfirm'
import classes from './NavBar.module.scss'
import { authState } from '../../../../Redux/Selectors/selectors'
import { SimpleDropDown } from '../../Functional/DropDowns/Simple/SimpleDropDown'
import { Avatar } from '../../UI-Dumb/Graphics/Images/Avatar/Avatar'
export type _dropdownState = {
  selected: string
  [key: number]: string | null
}
export const NavBar = () => {
  const [_, forceRender] = useState(false)
  const state = useRef<_dropdownState>({} as _dropdownState)
  const [redirecting, setIsRedirecting] = useState<boolean>(false)
  const [confirmLogOutModal, showModal] = useState(false)
  const [showUserOptions, setShowUserOptions] = useState(false)
  const navigation = useNavigate()
  const dispatch = useAppDispatch()
  const { data, logoutMutation } = LogOutMutation()
  const avatar_url = authState().user.avatar?.url
  console.log(confirmLogOutModal)
  const handler = {
    set(target, p, newValue, receiver) {
      target[p] = newValue
      forceRender((prev) => !prev)
      return true
    },
  }
  const _proxy = new Proxy<_dropdownState>(state.current, handler)
  return (
    <NavBarLayOut proportion={['1', '2', '1']}>
      <div className={classes.imgContainer}>
        <CommonImage
          scale={0.05}
          
          options={{ alt: 'logo', src: fakeLogo}}
        ></CommonImage>
        <TextInput placeholder="search people..."></TextInput>
      </div>

      <div className={classes.navBarCenter}>
        <BarItems
          config={{ assets: { icon: { fontSize: '3vh', color: 'black' } } }}
          items={NavBarItems_Center}
        ></BarItems>
      </div>
      <div className={classes.navBarRight}>
        <BarItems
          state={_proxy}
          items={returnNavBarItems_Right(avatar_url)}
          config={{ assets: { icon: { fontSize: '2vh', color: 'black' } } }}
        ></BarItems>
        <div
          onClick={() => setShowUserOptions(true)}
          style={{ position: 'relative', marginRight: '0.5rem' }}
        >
          <Avatar src={avatar_url}></Avatar>
          <div style={{ position: 'absolute', bottom: '-10px', right: '65px' }}>
            {showUserOptions && (
              <SimpleDropDown
                options={{
                  dropdown_css: { padding: '0.3rem' },
                  display: 'flex',
                }}
                setShow={setShowUserOptions}
                show={showUserOptions}
                showArrow={false}
              >
                <div onClick={()=>{showModal(true)}}>Log Out</div>
              </SimpleDropDown>
            )}
          </div>
        </div>

        {confirmLogOutModal && (
          <>
            <CommonConfirm
              showModal={showModal}
              title="Are you sure you want to log out?"
            >
              <Button onClick={() => dispatch(logout_TH({}))}>Yes</Button>
              <Button
                onClick={() => showModal(false)}
                css={{ marginLeft: '0.3rem' }}
              >
                No
              </Button>
            </CommonConfirm>
          </>
        )}
      </div>
    </NavBarLayOut>
  )
}
