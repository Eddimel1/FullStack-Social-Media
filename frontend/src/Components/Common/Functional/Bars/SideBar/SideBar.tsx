import React, { useRef, useState } from 'react'
import { CommonSideBarItems } from '../../../../../Data/Static/Components/SideBars/Common'
import { SideBarLayout } from '../../../Layouts/Common/SideBar/SideBar'
import { BarItems } from '../BarItems/BarItems'
const colors = ['#fda403','#e8751a','#c51350','#8a1253',' #27296d','#5e63b6',' #d55b3e','#f5c7f7']
type _dropdownState = {
    selected:number
    [key:number]:string | null
}
export const LeftSideBar = () => {
    const [_,forceRender] = useState(false)
    const state = useRef<_dropdownState>({} as _dropdownState)
    const handler = {
        set(target, p, newValue, receiver) {
               target[p] = newValue
               forceRender((prev)=>!prev)
               return true
           }
    }
   const _proxy = new Proxy(state.current,handler)
  return (
    <SideBarLayout css={{background:'' , position:'fixed',top:'80px',left:'10px' , width:'15%'}}>
    <BarItems state={_proxy} items={CommonSideBarItems} config={{assets:{icon:{fontSize:'40px' , color:'black'}}}}></BarItems>
    </SideBarLayout>
  )
}
