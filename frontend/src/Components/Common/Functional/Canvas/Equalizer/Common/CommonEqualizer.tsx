import React, { useEffect, useRef } from 'react'

type _props = React.HTMLAttributes<HTMLCanvasElement> & {
  audioRef: React.MutableRefObject<HTMLAudioElement>
  css?: React.CSSProperties
}
export const CommonEqualizer = ({ audioRef, css }: _props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const audioCtx = useRef<AudioContext>(new AudioContext())
  const dataArray = useRef<Uint8Array>()
  const timerId = useRef<number | undefined>(undefined)
  const currentSource = useRef<MediaElementAudioSourceNode>(null)
  const analyzerRef = useRef<AnalyserNode>(null)
  const canvasConfig = useRef<drawingConfig>({
    fillStyle: 'red',
    lineWidth: 2,
    strokeStyle: '#6653FF',
    globalComposite: 'source-over',
  })

  const context = useRef<CanvasRenderingContext2D | null>(null)
  type drawingConfig = {
    fillStyle: string
    lineWidth: number
    strokeStyle: string
    globalComposite: any
  }

  const animate = (time: number) => {
    const ctx = context.current
    if (time % 100) {
      if (
        ctx &&
        canvasRef.current &&
        analyzerRef.current &&
        dataArray.current
      ) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        const widthSegment =
          ctx!.canvas.width / analyzerRef.current.frequencyBinCount

        for (let i = 0; i < dataArray.current.length; i++) {
          analyzerRef.current?.getByteTimeDomainData(dataArray.current)

          if (dataArray.current[i] % 2 === 0) {
            const bit = dataArray.current[i]
            ctx.strokeStyle = `rgb(${Math.random() * 255},${bit},${
              Math.random() * 255
            })`
            ctx.fillStyle = `rgb(${Math.random() * 255},${
              Math.random() * 255
            },${bit}})`
            canvasRef.current.style.backgroundColor = `rgba(${bit}},${
              Math.random() * 255
            },${Math.random() * 255},0.1)`
            const height = canvasRef.current.clientHeight / 12 + bit / 2
            if (i === 0) {
              ctx!.beginPath()
            }
            if (i > 1) {
              ctx.rect(widthSegment * i, 0, 20, height)
            }
          }
          ctx.stroke()
        }
      }
      requestAnimationFrame(animate)
    }
  }
  useEffect(() => {
    try {
      if (audioRef.current && audioCtx.current) {
        currentSource.current = audioCtx.current.createMediaElementSource(
          audioRef.current
        )
        const analyzer = audioCtx.current.createAnalyser()
        analyzer.fftSize = 64
        const bufferLength = analyzer.frequencyBinCount
        dataArray.current = new Uint8Array(bufferLength)
        analyzerRef.current = analyzer
        currentSource.current.connect(analyzerRef.current)
        currentSource.current.connect(audioCtx.current.destination)
      }
    } catch (error) {
      console.log(error)
    }
  }, [audioRef.current])
  useEffect(() => {
    if (canvasRef.current) {
      const canvasCtx = canvasRef.current.getContext('2d')
      context.current = canvasCtx
      const co = canvasConfig.current
      const ctx = context.current
      if (canvasCtx && audioCtx.current) {
        if (co && ctx) {
          ctx.lineWidth = co.lineWidth
          ctx.imageSmoothingEnabled = true
        }
      }
    }
    return () => {
      if (timerId.current) window.cancelAnimationFrame(timerId.current)
    }
  }, [])
  useEffect(() => {
    timerId.current = requestAnimationFrame(animate)
  }, [])
  return <canvas style={{ ...css }} ref={canvasRef}></canvas>
}
