import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

type _props = React.HTMLAttributes<HTMLVideoElement> &{
    options:{
        src:string,
    }
    scale?:number
    autoScale?:boolean
    css?:React.CSSProperties
}
export const CommonVideo = ({scale=1,css,options ,autoScale=true,...atr}:_props) => {
    const [loaded , setLoaded] = useState<boolean>(false)
    const video = useRef<HTMLVideoElement>(null)
    if(autoScale){
        useLayoutEffect(()=>{
            const dimensions = video.current.getBoundingClientRect()
            console.log(dimensions)
            const width = dimensions.width * scale
            const height = dimensions.height * scale
            video.current.width = width
            video.current.height = height
        },[loaded,setLoaded])
    }
    
  
  return (
    <video   {...atr} style={{width:`100%`,height:`100%`,...css}} src={options.src} ref={video} onLoad={()=>setLoaded(true)}></video>
  )
}
