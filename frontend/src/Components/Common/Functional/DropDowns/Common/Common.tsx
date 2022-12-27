import React, { useEffect, useRef, useState } from 'react'
import { BarItemT, DropDownOptions, _state } from '../../../../../Data/Static/Components/Shared/types'
import { useOutside } from '../../../../../Global/Hooks/useOutside'
import { _dropdownState } from '../../../Bars/NavBar/NavBar'
import { BarItem } from '../../../UI-Dumb/Bars/Common/Bar'
import classes from './Common.module.scss'

type _props = {
    items:BarItemT[],
    show:boolean,
    state:_dropdownState,
    current_dropdown: string
    setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>
    options:DropDownOptions

}

export const DropDown = ({items,state,current_dropdown,show,setShowDropDown,options}:_props) => {
    let selected = current_dropdown ?  String(state.selected) === current_dropdown : true
    const {ref} = useOutside<HTMLDivElement>(false,setShowDropDown)
    const isFlex = options.display === 'flex'
  return (
    <div ref={ref}  className={`${isFlex ? `${classes.container_flex}` : `${classes.container_grid}`}`} style={{...options.container_css}} >
   
    { selected  && show && items.map((item,i)=>{
        const Icon = item.asset?.icon 
        return (
        <BarItem state={state} current_dropdown={current_dropdown}  options={item} key={i}>
         
            {item.asset?.icon && <Icon></Icon>}
        </BarItem>)
    })}
    </div>
  )
}
