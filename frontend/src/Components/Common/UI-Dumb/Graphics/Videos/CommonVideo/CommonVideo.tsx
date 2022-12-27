import React, { useEffect, useRef, useState } from 'react'

type _props = React.HTMLAttributes<HTMLVideoElement> &{
    options:{
        src:string,
    }
    scale?:number
    css?:React.CSSProperties
}
export const CommonVideo = ({scale=1,css,options ,...atr}:_props) => {
    const [loaded , setLoaded] = useState<boolean>(false)
    const video = useRef<HTMLVideoElement>(null)
    console.log(options)
    useEffect(()=>{
        const dimensions = video.current.getBoundingClientRect()
        console.log(dimensions)
        const width = dimensions.width * scale
        const height = dimensions.height * scale
      
        video.current.width = width
        video.current.height = height
    },[loaded,setLoaded])
  return (
    <video  {...atr} style={{...css}} src={options.src} ref={video} onLoad={()=>setLoaded(true)}></video>
  )
}
