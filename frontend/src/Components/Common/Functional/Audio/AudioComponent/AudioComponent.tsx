import React, { useEffect, useRef, useState } from 'react'
import { CommonImage } from '../../../UI-Dumb/Graphics/Images/Common/Common'
import classes from './AudioComponent.module.scss'
import defaultAudioImage from '../../../../../../assets/defaultAudioImage.png'
import { PlayCircleOutlined, PauseCircleOutlined, PauseCircleFilled, SoundOutlined } from '@ant-design/icons'
import defaultAudioTrack  from '../../../../../../assets/defaultAudioTrack.mp3'
import { CommonEqualizer } from '../../Canvas/Equalizer/Common/CommonEqualizer'
type _props = React.HTMLAttributes<HTMLAudioElement> &{
// force:React.Dispatch<React.SetStateAction<boolean>>
src?:string,
css?:React.CSSProperties
}
export const AudioComponent = ({src,css}:_props) => {
    const [isPlaying , setPlaying] = useState(false)
    const [showVolume , setShowVolume] = useState(false)
    const [volumeBarWidth,setVolumeBarWidth] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const progressRef = useRef<HTMLDivElement>(null);
    const bufferRef = useRef<HTMLDivElement>(null);
    const volumeBar = useRef<HTMLDivElement>(null)

    const calcPersentage = (part: number, total: number) => {
        return Math.round((part / total) * 100)
      }

      const seekToPosition = (pos: number) => {
        if (!audioRef.current) return;
        if (pos < 0 || pos > 1) return;
    
        const durationMs = audioRef.current.duration * 1000 || 0;
        
        const newElapsedMs = durationMs * pos;
        const newTimeSec = newElapsedMs / 1000;
        audioRef.current.currentTime = newTimeSec;
      };
    useEffect(()=>{
        const onTimeUpdate = ()=>{
            if(audioRef.current && progressRef.current){
                progressRef.current.style.width = `${(audioRef.current.currentTime / audioRef.current.duration)*100}%`
            }
           
        }


        audioRef.current = new Audio(src || defaultAudioTrack)
        audioRef.current.crossOrigin = "anonymous"
        audioRef.current.addEventListener('timeupdate',onTimeUpdate)
    },[])
    
    useEffect(()=>{
        if(isPlaying) audioRef.current.play().catch((e)=>console.log(e))
        else audioRef.current.pause()
            
        
    },[isPlaying])
  return (
    <div className={classes.wrapper}style={{position:'relative',...css}} onMouseLeave={()=>setShowVolume(false)}>
        <CommonEqualizer css={{position:'absolute',bottom:'0',left:'0',zIndex:'-1',transform:'rotate(180deg)',width:'100%' , height:'70px',opacity:'0.5',filter:'blur(20px)'}} audioRef={audioRef}></CommonEqualizer>
        <div className={classes.container}>
        <div className={classes.container_left}>
        <div className={classes.left}>
    <CommonImage scale={0.2} options={{src:defaultAudioImage,alt:'defaultImage'}}></CommonImage>
    <div className={classes.trackInfo}>
        <div className={classes.artist}>
                Artist
        </div>
        <div className={classes.trackName}>
            Track Name
            </div>
    </div>
        </div>
       
        <div className={classes.right}>

        </div>
        </div>
        <div className={classes.container_center}>
        <div className={classes.progressPad} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              const { left, width } = e.currentTarget.getBoundingClientRect();
              const clickedPos = (e.clientX - left) / width;
              seekToPosition(clickedPos);
            }}>
                 
            <div className={classes.bufferingBar} ref={bufferRef} style={{width:String(bufferRef.current)}}>

            </div>
        <div ref={progressRef} className={classes.progressBar} ></div>
        </div>
        </div>
        <div className={classes.container_right}>
            <div className={classes.iconWrapper} >
            {!isPlaying ? <PlayCircleOutlined onClick={()=>setPlaying(true)} style={{fontSize:'25px',padding:'0.3rem'}}></PlayCircleOutlined> :
            <PauseCircleFilled onClick={()=>setPlaying(false)} style={{fontSize:'25px',padding:'0.3rem'}}></PauseCircleFilled>
            }
            </div>

           
        
            </div>
            <div className={classes.soundIcon} onMouseEnter={()=>setShowVolume(true)} >
            <SoundOutlined className={classes.control_icon}></SoundOutlined>
            <div className={`${classes.volumeBarContainer} ${showVolume ? `${classes.volumeBarContainer_active}` :  `${classes.volumeBarContainer_inActive}`}`}>
                <div ref={volumeBar} className={classes.volumeBar}  onClick={(e: React.MouseEvent) => {
                    
        if (volumeBar.current && audioRef.current) {
            console.log(volumeBar.current , audioRef.current)
          const calculatedWidth = calcPersentage(
            e.nativeEvent.offsetX,
            volumeBar.current.offsetWidth
          )
          setVolumeBarWidth(calculatedWidth)
               console.log(calculatedWidth)
         audioRef.current.volume = calculatedWidth / 100
        }
      }}>
                    <div className={classes.volumeProgress} style={{width:`${volumeBarWidth}%`}}></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
