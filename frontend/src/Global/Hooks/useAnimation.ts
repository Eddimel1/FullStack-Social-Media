import React, { MutableRefObject, RefObject, useCallback, useEffect, useRef, useState } from 'react'

type _props = {
    startType:string,
    endType :string,
    refs:MutableRefObject<RefObject<HTMLElement>>[]
    isSet:boolean

}
export const UseAnimation = ({endType,startType,refs,isSet}:_props) => {
    const [isAnim,showAnim] = useState(false)
    const _refs = useRef<React.MutableRefObject<React.RefObject<HTMLElement>>[]>([])
    
    const onMouseEnter = useCallback(() => {
        showAnim(true)
    },[])
    const onMouseLeave = useCallback(() => {

        showAnim(false)
    },[])
    useEffect(()=>{
            for(let i = 0 ; i < refs.length; i++){
                    if(refs[i] && refs[i].current){
                        refs[i].current.current.addEventListener(startType,onMouseEnter)
                        refs[i].current.current.addEventListener(endType,onMouseLeave)
                        _refs.current.push(refs[i])
                    }
            }

        return ()=>{
            _refs.current.forEach((ref)=>{
                ref.current.current.removeEventListener(startType,onMouseEnter)
                ref.current.current.removeEventListener(endType,onMouseLeave)
            })
           
        }
    },[isSet])
  return (
    {isAnim,refs:_refs}
  )
}
