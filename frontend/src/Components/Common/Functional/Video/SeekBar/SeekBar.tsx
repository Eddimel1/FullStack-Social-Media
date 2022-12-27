import React, { useState } from 'react'

type _props = {
    videoRef:React.MutableRefObject<HTMLVideoElement>
}
export const SeekBar = ({videoRef}:_props) => {
    const seekToPosition = (pos: number) => {
        if (!videoRef.current) return;
        if (pos < 0 || pos > 1) return;
    
        const durationMs = videoRef.current.duration * 1000 || 0;
    
        const newElapsedMs = durationMs * pos;
        const newTimeSec = newElapsedMs / 1000;
        videoRef.current.currentTime = newTimeSec;
      };
  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const clickedPos = (e.clientX - left) / width;
        seekToPosition(clickedPos);
      }}></div>
  )
}
