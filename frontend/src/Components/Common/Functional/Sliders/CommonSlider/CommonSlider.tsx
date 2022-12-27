import React, { useEffect, useRef, useState } from 'react'
import classes from './CommonSlider.module.scss'
import TestImage from '../../../../../../assets/test-image.jpg'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { CommonImage } from '../../../UI-Dumb/Graphics/Images/Common/Common'

type _props = {
  animation?: boolean
  container_css?: React.CSSProperties
}

export const JuicySlider = ({ container_css, animation = false }: _props) => {
  const default_portion = 10
  const track = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)
  const left_button = useRef<HTMLButtonElement>()
  const right_button = useRef<HTMLButtonElement>()
  const total_transform = useRef(50)
  const transforms = useRef({})
  const animationId = useRef<number>(null)
  const refs: React.RefObject<HTMLDivElement>[] = []
  const curr_index = useRef(0)
  let back_position
  const fake_arr = []
  for (let i = 0; i <= 8; i++) {
    refs.push(React.createRef<HTMLDivElement>())
    fake_arr.push('0')
    transforms.current[i] = 0
  }

  function extractNumber(str) { 
    const num = str.replace(/[^0-9]/g, ''); 
    return parseInt(num,10); 
}
  const onClickLeft = () => {
    if (track.current && !left_button.current.disabled) {
      refs.forEach((ref, i) => {
        console.log(refs[curr_index.current].current.getBoundingClientRect().right,wrapper.current.getBoundingClientRect().right)
        const condition = refs[curr_index.current].current.getBoundingClientRect().right +200  > wrapper.current.getBoundingClientRect().right
        if(condition){
            left_button.current.disabled = true
            window.setTimeout(() => {
                left_button.current.disabled = false
              }, 350)
              transforms.current[i] -= 200
        } 
      })
    }
  }

  const onClickRight = () => {
    console.log(refs[curr_index.current].current.getBoundingClientRect().right,wrapper.current.getBoundingClientRect().right)
    if (track.current && !right_button.current.disabled) {
      refs.forEach((ref, i) => {
        right_button.current.disabled = true
        window.setTimeout(() => {
          right_button.current.disabled = false
        }, 350)
        transforms.current[i] += 200
      })
    }
  }
  const animate = (time) => {
   
    if (refs[curr_index.current].current) {
      const photo_left_side =
        refs[curr_index.current].current.getBoundingClientRect().left
      const wrapper_right_side = wrapper.current.getBoundingClientRect().right
      if (photo_left_side >= wrapper_right_side) {
        const current_margin = extractNumber(window.getComputedStyle(refs[curr_index.current].current).marginLeft ) * 2
        const _back_position =
          back_position - wrapper.current.getBoundingClientRect().right - current_margin
        transforms.current[curr_index.current] += _back_position
        if (curr_index.current === 0) curr_index.current = refs.length
        curr_index.current--
      }
    }
    refs.forEach((ref, i) => {
        
      if (ref.current) {
     
        if (
          ref.current.getBoundingClientRect().right >=
            wrapper.current.getBoundingClientRect().left &&
          ref.current.getBoundingClientRect().left + 140 <
            wrapper.current.getBoundingClientRect().left
        ) {
        }
        if (animation) transforms.current[i] += 2
        ref.current.style.transform = `translateX(${transforms.current[i]}px)`
      }
    })
    if (wrapper.current && animation) {
      wrapper.current.style.backgroundImage = `linear-gradient(${
        time * 0.01 * -1
      }deg, rgba(242,242,242,1) 0%, rgba(0,0,0,1) 52%, rgba(250,234,242,1) 100%)`
      wrapper.current.style.filter = `hue-rotate(${
        Math.sin(total_transform.current * 0.01) * 10
      }deg)`
    }
    animationId.current = window.requestAnimationFrame(animate)
  }
  useEffect(() => {
    if (animationId.current) window.cancelAnimationFrame(animationId.current)
    curr_index.current = refs.length - 1
    back_position = refs[0].current.getBoundingClientRect().left
    refs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.transform = `translateX(0px)`
      }
    })
    animate(0)
    return () => window.cancelAnimationFrame(animationId.current)
  })
  return (
    <div className={classes.wrapper} ref={wrapper}>
      <div className={classes.container} style={container_css}>
        <button
          ref={left_button}
          className={classes.iconContainer}
          style={{
            position: 'absolute',
            left: '0',
            top: '25%',
            cursor: 'pointer',
            zIndex: '2',
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: '0.2rem',
          }}
        >
          <LeftOutlined onClick={onClickLeft}></LeftOutlined>
        </button>
        <button
          ref={right_button}
          className={classes.iconContainer}
          style={{
            position: 'absolute',
            right: '0',
            top: '25%',
            cursor: 'pointer',
            zIndex: '2',
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: '0.2rem',
          }}
        >
          <RightOutlined onClick={onClickRight}></RightOutlined>
        </button>
        <div className={classes.track} ref={track}>
          {fake_arr.map((_, i) => {
            return (
              <div className={classes.photo} key={i} ref={refs[i]}>
                <CommonImage
                  className={classes.img}
                  css={{
                    width: '200px',
                    maxWidth: '200px',
                    objectFit: 'cover',
                  }}
                  options={{ src: TestImage, alt: 'test' }}
                ></CommonImage>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
