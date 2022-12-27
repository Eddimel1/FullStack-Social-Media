import React, { useRef, useState } from 'react'
import { BarItems } from '../../Bars/BarItems/BarItems'
import { TextInput } from '../../Input/Text/Input'
import { postFilterItems } from './data'
import classes from './PostFilter.module.scss'
type initialStateT = {
    filter_term : string,
    data: 'new' | 'old',
    subject:string,
    popularity : 'likes' | 'comments'
}
const initialState:initialStateT = {
     filter_term : '',
     data:'new',
     popularity:'likes',
     subject:''
}

export const PostFilter = () => {
    const _state = useRef<initialStateT>(initialState)
    const [_,force] = useState(false)
    const handlers = {
        set(target, p, newValue, receiver) {
            if(p === 'filter_term'){
                window.setTimeout(()=>{
                    force((prev)=>!prev)
                },200)
            }
               target[p] = newValue
               force((prev)=>!prev)
               return true
           }
    }
    const state = new Proxy(_state.current,handlers)
  return (
    <div className={classes.wrapper}>
        <div className={classes.container}>
        <TextInput title={false} mutated_obj={state} prop='filter_term' ></TextInput>
            <div className={classes.dropdownContainer}>
            <BarItems items={postFilterItems} state={state} ></BarItems>
            </div>
       
       
        </div>
    </div>
   
  )
}
