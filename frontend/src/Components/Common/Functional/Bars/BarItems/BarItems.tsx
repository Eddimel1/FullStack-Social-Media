import React, { useRef } from 'react'
import { BarItemT } from '../../../../../Data/Static/Components/Shared/types'
import { _dropdownState } from '../../../Bars/NavBar/NavBar'
import { BarItem } from '../../../UI-Dumb/Bars/Common/Bar'
import { Avatar } from '../../../UI-Dumb/Graphics/Images/Avatar/Avatar'
const colors = ['#fda403','#e8751a','#c51350','#8a1253',' #27296d','#5e63b6',' #d55b3e','#f5c7f7']
type _config = {
    assets:{
        avatar?:{
            height:number,
            width:number
        }
        ,
        icon? :{
            fontSize:string
            color:string | string[]
        }
    }
}
type _props = {
    items:BarItemT[]
    state?:_dropdownState
    config?:_config
}

export const BarItems = ({items,config,state}:_props) => {
     const avatar = config?.assets?.avatar
     const icon = config?.assets?.icon
  return (
    <>
     {items.map((item,i)=>{
        const Icon = item.asset?.icon
       return (
       <BarItem state={state} options={item} key={i}>
        {item.asset ? item.asset?.type === 'icon'  ? <Icon style={{fontSize:`${icon?.fontSize || '35px'}`, color:`${colors[i]}`}}></Icon> : <Avatar width={avatar?.width || 40} height={avatar?.height || 40} src={item.asset?.image}alt={item.title} ></Avatar> : null}
          
       </BarItem>)
     })}
    </>
   
  )
}