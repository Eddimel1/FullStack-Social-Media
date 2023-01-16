import React, { PropsWithChildren } from 'react'
import { DisplayInfoModal } from '../../Modals/DisplayInfoModal/DisplayInfoModal'
import classes from './CommonConfirm.module.scss'
type _props = {
    showModal:React.Dispatch<React.SetStateAction<boolean>>
    children:React.ReactNode
    title:string
}
export const CommonConfirm:React.FC<PropsWithChildren<_props>> =  ({showModal,children,title}:_props) => {
  return (
    <DisplayInfoModal setActive={showModal}><div className={classes.container} ><div>
        <div>{title}</div>
        <div style={{marginTop:'0.5rem'}}>
       {children}
        </div>
        </div></div></DisplayInfoModal>
  )
}
