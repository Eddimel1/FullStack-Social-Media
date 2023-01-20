import React, { PropsWithChildren, useEffect, useLayoutEffect, useState } from 'react'
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

    //FOR UNMOUNT ANIMATION
//     const activeTime = 300
//     const shouldRender = useDelayedUnmount(active,activeTime)
//     const [_active,_setActive] = useState(true)
// console.log(shouldRender)
    // useLayoutEffect(()=>{
    //     if(!active){
    //         window.setTimeout(()=>{
    //             _setActive(false)
    //         },activeTime)
    //     }
    //     else if(active){
    //         _setActive(true)
    //     }
    // },[active])
    
    if(active){
        return ReactDOM.createPortal(
            <div 
            className={`${classes.modal} ${active ? `${classes.in}` : `${classes.out}`}`}
            >
                <div ref={ref} className={classes.container}>{children}</div>
            </div>
           
            ,document.querySelector('body')
          )
    }
   
    
 
}
