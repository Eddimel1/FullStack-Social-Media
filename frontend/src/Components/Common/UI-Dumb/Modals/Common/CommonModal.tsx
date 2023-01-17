import React, { PropsWithChildren, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDelayedUnmount } from '../../../../../Global/Hooks/useDelayedUnMount'
import { useOutside } from '../../../../../Global/Hooks/useOutside'
import classes from './CommonModal.module.scss'
type _props = {
    active:boolean,
    setActive? :React.Dispatch<React.SetStateAction<boolean>>
}
export const CommonModal:React.FC<PropsWithChildren<_props>> = ({active,setActive,children}) => {
    const {ref} = useOutside(false,setActive)
    const activeTime = 300
    const {} = useDelayedUnmount(active,300)
  return ReactDOM.createPortal(
    <div style={{transition:`all ${activeTime} ease`}} className={`${classes.modal} ${active ? `${classes.in}` : `${classes.out}`}`}>
        <div ref={ref} className={classes.container}>{children}</div>
    </div>
   
    ,document.querySelector('body')
  )
}
