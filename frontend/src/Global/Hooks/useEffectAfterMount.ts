import { useEffect, useRef } from "react";

export function(cb:()=>void,dependencies:any[]){
const mounted = useRef(true)

useEffect(()=>{
    if(!mounted.current){
        return cb()
    }
    mounted.current = false
},[dependencies])
}