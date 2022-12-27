import { PlayCircleOutlined, PauseCircleOutlined, ForwardOutlined, BackwardOutlined, FullscreenOutlined,  SoundOutlined, SettingOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react'
import { CommonModal } from '../../../UI-Dumb/Modals/Common/CommonModal';
import classes from './VideoPlayer.module.scss'

//NOT REFACTORED YET , EVERYTHING IS IN ONE PLACE IS GARBAGE!
type videoPlayerState = {
    playing:boolean,
    muted:boolean,
    volume:number,
    current_time:number,
    isFullscreen:boolean,

}
const initialState:videoPlayerState  = {
    playing:false,
    muted:false,
    volume:100,
    current_time:0,
    isFullscreen:false,
}

interface Props {
    src: string;
    muted?: boolean;
    autoPlay?: boolean;
  }
export const VideoPlayer = (props: Props) => {
    const state = useRef<videoPlayerState>(initialState)
    const { src, autoPlay, muted } = props;
    const [isWaiting, setIsWaiting] = useState(false);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [showVolume , setShowVolume] = useState(false)
    const [showControls ,setShowControls] = useState(false)
    const [volumeBarWidth,setVolumeBarWidth] = useState(0)
    const [expandDurationBar , setExpandDurationBar] = useState(false)
    const [durationSec, setDurationSec] = useState(1);
    const [elapsedSec, setElapsedSec] = useState(1);
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const bufferRef = useRef<HTMLDivElement>(null);
    const volumeBar = useRef<HTMLDivElement>(null)
    const calcPersentage = (part: number, total: number) => {
        return Math.round((part / total) * 100)
      }
      const clamp = (a: number, min = 0, max = 1) => Math.min(max, Math.max(min, a))
      const invlerp = (x: number, y: number, a: number) => clamp((a - x) / (y - x))
      function calcLastBufferingPosition() {
        if (videoRef.current && videoRef.current.buffered.length) {
          return (
            (videoRef.current.buffered.start(videoRef.current.buffered.length - 1) / videoRef.current.duration) *
            100
          )
        }
        return 1
      }
    useEffect(() => {
        if (!videoRef.current) {
          return;
        }
        
        const onWaiting = () => {
          if (isPlaying) setIsPlaying(false);
          setIsWaiting(true);
        };
    
        const onPlay = () => {
          if (isWaiting) setIsWaiting(false);
          setIsPlaying(true);
        };
    
        const onPause = () => {
          setIsPlaying(false);
          setIsWaiting(false);
        };
    
        const element = videoRef.current;
    
        const onTimeUpdate = () => {
        
          setIsWaiting(false);
          if (!element.buffered || !progressRef.current) return;
          const duration = element.duration;
          setDurationSec(duration);
          setElapsedSec(element.currentTime);
          if (progressRef && duration > 0) {
            progressRef.current.style.width =
              (element.currentTime / duration) * 100 + "%";
              
          }
          if (!element.buffered || !bufferRef.current) return;
          if (!element.buffered.length) return;
          if (bufferRef && duration > 0) {
           const bufferingPosition = calcLastBufferingPosition()
            bufferRef.current.style.width = `${(100 - bufferingPosition) *
                invlerp(
                  videoRef.current.buffered.start(videoRef.current.buffered.length - 1),
                  videoRef.current.duration,
                  videoRef.current.buffered.end(videoRef.current.buffered.length - 1)
                )}%`
              
           
          }
        };
    
        element.addEventListener("timeupdate", onTimeUpdate);
        element.addEventListener("waiting", onWaiting);
        element.addEventListener("play", onPlay);
        element.addEventListener("playing", onPlay);
        element.addEventListener("pause", onPause);
    
        // clean up
        return () => {
          element.removeEventListener("waiting", onWaiting);
          element.removeEventListener("play", onPlay);
          element.removeEventListener("playing", onPlay);
          element.removeEventListener("pause", onPause);
          element.removeEventListener("timeupdate", onTimeUpdate);
        };
      }, [videoRef.current]);
    
      // This is where the playback rate is set on the video element.
      useEffect(() => {
        if (!videoRef.current) return;
        if (videoRef.current.playbackRate === playbackRate) return;
        videoRef.current.playbackRate = playbackRate;
      }, [playbackRate]);
    
      const handlePlayPauseClick = () => {
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause()
          } else {
            videoRef.current.play().catch((e)=>console.log(e));
          }
        }
      };
    
      const seekToPosition = (pos: number) => {
        if (!videoRef.current) return;
        if (pos < 0 || pos > 1) return;
    
        const durationMs = videoRef.current.duration * 1000 || 0;
        
        const newElapsedMs = durationMs * pos;
        const newTimeSec = newElapsedMs / 1000;
        videoRef.current.currentTime = newTimeSec;
      };
    
  return (


<div className={classes.videoPlayerWrapper}>
<div className={classes.videoPlayerContainer}  onMouseLeave={()=>setShowControls(false)} onMouseOver={()=>setShowControls(true)}>
{isWaiting && <LoadingOutlined className={classes.control_icon} style={{position:'absolute',top:'50%',left:'50%'}} ></LoadingOutlined>}
    <div className={`${classes.videoPlayerBottom} ${showControls ? `${classes.controls_active}` : `${classes.controls_inActive}`}`} >
        <div className={classes.progressPad} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              const { left, width } = e.currentTarget.getBoundingClientRect();
              const clickedPos = (e.clientX - left) / width;
              seekToPosition(clickedPos);
            }}>
            <div className={classes.bufferingBar} ref={bufferRef} style={{width:String(bufferRef.current)}}>

            </div>
        <div ref={progressRef} className={classes.progressBar} ></div>
        </div>
   
    <div className={`${classes.controlsContainer}`} onMouseLeave={()=>setShowVolume(false)}>

    <div className={classes.left}>
            <div className={classes.playIcons}>
            <ForwardOutlined onClick={()=>videoRef.current.currentTime +=5} className={classes.control_icon}></ForwardOutlined>
    {!isPlaying ? <PlayCircleOutlined  onClick={handlePlayPauseClick} className={classes.control_icon}></PlayCircleOutlined>
:<PauseCircleOutlined  onClick={handlePlayPauseClick} className={classes.control_icon}></PauseCircleOutlined>    
}
    <BackwardOutlined className={classes.control_icon} onClick={()=>videoRef.current.currentTime -=5}></BackwardOutlined>
            </div>
            <div className={classes.soundIcon} onMouseEnter={()=>setShowVolume(true)}>
            <SoundOutlined className={classes.control_icon}></SoundOutlined>
            <div className={`${classes.volumeBarContainer} ${showVolume ? `${classes.volumeBarContainer_active}` :  `${classes.volumeBarContainer_inActive}`}`}>
                <div ref={volumeBar} className={classes.volumeBar}  onClick={(e: React.MouseEvent) => {
                    
        if (volumeBar.current && videoRef.current) {
            console.log(volumeBar.current , videoRef.current)
          const calculatedWidth = calcPersentage(
            e.nativeEvent.offsetX,
            volumeBar.current.offsetWidth
          )
          setVolumeBarWidth(calculatedWidth)
               console.log(calculatedWidth)
         videoRef.current.volume = calculatedWidth / 100
        }
      }}>
                    <div className={classes.volumeProgress} style={{width:`${volumeBarWidth}%`}}></div>
                </div>
            </div>
            </div>
       
        </div>

        <div className={classes.right}>
            <SettingOutlined className={classes.control_icon}></SettingOutlined>
            < FullscreenOutlined onClick={()=>videoRef.current.requestFullscreen()} className={classes.control_icon}></FullscreenOutlined>
        </div>
    </div>
     
    </div>

 <video className={classes.videoPlayer} 
    muted={muted}
    src={src}
    ref={videoRef}></video>
    </div>
    
</div>
 
  
   
   
  )
}
