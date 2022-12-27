import React, { PropsWithChildren, useState } from 'react'
import ReactDOM from 'react-dom'
import { useOutside } from '../../../../../Global/Hooks/useOutside'
import classes from './DisplayInfoModal.module.scss'
type _props = {
    setActive? :React.Dispatch<React.SetStateAction<boolean>>
}
export const DisplayInfoModal:React.FC<PropsWithChildren<_props>> = ({setActive,children}) => {
    const {ref} = useOutside(false,setActive)
  return ReactDOM.createPortal(
    <div className={`${classes.modal}`}>
        <div ref={ref} className={classes.container}>{children}</div>
    </div>
    ,document.querySelector('body')
  )
}
