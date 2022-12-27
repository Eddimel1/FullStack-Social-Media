import { CaretDownOutlined } from '@ant-design/icons'
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { assetType, BarItemT, DropDownOptions, _state } from '../../../../../Data/Static/Components/Shared/types'
import { useOutside } from '../../../../../Global/Hooks/useOutside'
import { _dropdownState } from '../../../Bars/NavBar/NavBar'
import { BarItem } from '../../../UI-Dumb/Bars/Common/Bar'
import { CommonImage } from '../../../UI-Dumb/Graphics/Images/Common/Common'
import classes from './SimpleDropDown.module.scss'

type _props = React.HTMLAttributes<HTMLDivElement> & {
    showOnClick?:boolean,
    showArrow?:boolean,
    state?:{selected:string},
    title?:string
    asset?:assetType & {css?:React.CSSProperties},
    options?:{display:'grid' | 'flex' , dropdown_css?:React.CSSProperties}

}
export const SimpleDropDown:React.FC<PropsWithChildren<_props>> = ({state,options,children,asset,showOnClick=true,
    showArrow=true,title,
    ...atr}) => {
    const {ref,setIsShow,isShow} = useOutside<HTMLDivElement>(false)
    const Icon=asset?.icon
    const image=asset?.image
    const icon_css = asset?.css
  return (
    <div ref={ref}  onClick={()=>setIsShow(true)}  className={`${options?.display === 'flex' ? `${classes.container_flex}` : `${classes.container_grid}`}`} >
        <div className={classes.title}>{title}</div>
       {showArrow &&  <div className={classes.children}>
       
        <CaretDownOutlined
          className={classes.arrow}
          style={{ transform: `rotate(${isShow ? '180deg' : '0deg'})` }}
        ></CaretDownOutlined>
        {asset && Icon ? <Icon style={{...asset.css}}></Icon> : <CommonImage options={{
                  src: image?.src,
                  alt: image?.alt
              }}></CommonImage>}
        </div>}

   <div className={classes.itemsContainer} {...atr} style={{...options?.dropdown_css}}>
   {isShow && showOnClick &&  children}
   {!showOnClick && children}
   </div>
   
    </div>
  )
}
