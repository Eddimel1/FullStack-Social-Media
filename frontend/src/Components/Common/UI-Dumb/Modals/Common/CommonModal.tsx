import React, { PropsWithChildren, useState } from 'react'
import ReactDOM from 'react-dom'
import { useOutside } from '../../../../../Global/Hooks/useOutside'
import classes from './CommonModal.module.scss'
type _props = {
    active:boolean,
    setActive? :React.Dispatch<React.SetStateAction<boolean>>
}
export const CommonModal:React.FC<PropsWithChildren<_props>> = ({active,setActive,children}) => {
    const {ref} = useOutside(false,setActive)
  return ReactDOM.createPortal(
    <div className={`${classes.modal} ${active ? `${classes.active}` : ''}`}>
        <div ref={ref} className={classes.container}>{children}</div>
    </div>
   
    ,document.querySelector('body')
  )
}
