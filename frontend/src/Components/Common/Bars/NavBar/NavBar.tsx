import React, { useEffect, useRef, useState } from 'react'
import { NavBarItems_Center, NavBarItems_Right,  } from '../../../../Data/Static/Components/NavBars/Common'
import { TextInput } from '../../Functional/Input/Text/Input'
import { NavBarLayOut } from '../../Layouts/Common/NavBar/NavBar'
import fakeLogo from '../../../../../assets/fakeLogo.png'
import { CommonImage } from '../../UI-Dumb/Graphics/Images/Common/Common'
import { BarItems } from '../../Functional/Bars/BarItems/BarItems'
import LogOutMutation from '../../../../GraphQl/User/Mutations/Auth/LogOut'
import { logout_TH } from '../../../../Redux/Thunks/Auth/Logout'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../../../Redux/Store/Store'
import { DisplayInfoModal } from '../../UI-Dumb/Modals/DisplayInfoModal/DisplayInfoModal'
import { Button } from '../../UI-Dumb/Buttons/Common'

export type _dropdownState = {
    selected:string
    [key:number]:string | null
}
export const NavBar = () => {
    const [_,forceRender] = useState(false)
    const state = useRef<_dropdownState>({} as _dropdownState)
    const [redirecting, setIsRedirecting] = useState<boolean>(false)
    const [confirmLogOutModal , showModal] = useState(false)
    const navigation = useNavigate()
    const dispatch = useAppDispatch ()
    const {data,logoutMutation} = LogOutMutation()


    const handler = {
        set(target, p, newValue, receiver) {
                if(target[p] === 'user_state'){
                    showModal(true)
                    
                }
               target[p] = newValue
               console.log(target[p])
               forceRender((prev)=>!prev)
               return true
           }
    }

   const _proxy = new Proxy<_dropdownState>(state.current,handler)
   useEffect(()=>{
        console.log(data)
   },[data])
  return (
    <NavBarLayOut proportion={['1','2','1']}>
        <div style={{display:'flex',alignItems:'center' , marginLeft:'2rem'}}>
       <CommonImage scale={0.1}  options={{alt:'logo',src:fakeLogo}}></CommonImage>
        <TextInput placeholder='search people...' ></TextInput>
        </div>
       
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <BarItems items={NavBarItems_Center}></BarItems>
        </div>
        <div style={{display:'flex',float:'right'}}>
        <BarItems  state={_proxy} items={NavBarItems_Right} config={{assets:{icon:{fontSize:'20px' , color:'black'}}}}></BarItems>
     { confirmLogOutModal && <DisplayInfoModal setActive={showModal}><div style={{backgroundColor:'white' , color:'black' , padding:'2rem' ,display:'flex',flexDirection:'column'}}><div>
        <div>Are you sure you want to log out ?</div>
        <div style={{marginTop:'0.5rem'}}>
        <Button onClick={() => dispatch(logout_TH({}))} >Yes</Button>
        <Button onClick={() => showModal(false)} css={{marginLeft:'0.3rem'}}>No</Button>
        </div>
       
        </div></div></DisplayInfoModal>}
        </div>

    </NavBarLayOut>
  )
}


