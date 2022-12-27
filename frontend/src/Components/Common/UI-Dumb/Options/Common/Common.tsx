import React, { PropsWithChildren, useState } from 'react'
import { BarItem_W_IC, BarItem_W_IM, mutated_objT } from '../../../../../Data/Static/Components/Shared/types'
import { CommonImage } from '../../Graphics/Images/Common/Common'
import classes from './Common.module.scss'
type _props = {
    value?:string
    prop?:number | string
    multiple_dropdowns?:boolean,
    mutated_obj?:any
    updateCb?:  ((x?: any) => void)
    asset?:BarItem_W_IM | BarItem_W_IC
    children?:React.ReactNode
}
export const CommonOption:React.FC<PropsWithChildren<_props>> = ({mutated_obj,value=null,prop,asset,updateCb,multiple_dropdowns = false,children}:_props) => {
    const Icon = asset?.icon
    const img = asset?.image
    const isFlex = mutated_obj?.[prop]?.display === 'flex' || true

    const pickCb = () => {
        if(mutated_obj){
            mutated_obj[prop]= value
            if(mutated_obj[prop]?.value) mutated_obj[prop]['value'] = value
            if(mutated_obj.selected && multiple_dropdowns) mutated_obj.selected = prop
            console.log(mutated_obj)
        }
        else if(updateCb){
            if(value){updateCb(value)}
            else {
                updateCb()}}
    }
  return (
    <div onClick={pickCb} className={classes.barItem} style={{background:`${(mutated_obj?.[prop]?.value || mutated_obj?.[prop]) === value ? '#EF815F' : ''}`,flexDirection:`${isFlex ? 'row' :'column'}`}}>
        {asset?.icon && <Icon style={{fontSize:`${isFlex ? '20px' : '35px'}`,marginRight:'0.1rem'}}></Icon>}
        {img && <CommonImage scale={0.1} options={{src:img,alt:value}}></CommonImage>}
        {children || value}</div>
  )
}
