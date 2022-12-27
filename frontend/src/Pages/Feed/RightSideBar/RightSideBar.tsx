import React, { useState, useRef } from 'react'
import { BarItems } from '../../../Components/Common/Functional/Bars/BarItems/BarItems'
import { SideBarLayout } from '../../../Components/Common/Layouts/Common/SideBar/SideBar'
import { RightSideBarData } from './data'

const colors = [
  '#fda403',
  '#e8751a',
  '#c51350',
  '#8a1253',
  ' #27296d',
  '#5e63b6',
  ' #d55b3e',
  '#f5c7f7',
]
type _dropdownState = {
  selected: number
  [key: number]: string | null
}
export const RightSideBar = () => {
  const [_, forceRender] = useState(false)
  const state = useRef<_dropdownState>({} as _dropdownState)
  const handler = {
    set(target, p, newValue, receiver) {
      target[p] = newValue
      forceRender((prev) => !prev)
      return true
    },
  }
  const _proxy = new Proxy(state.current, handler)
  return (
    <SideBarLayout
      css={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'fixed',
        top: '69px',
        width: '20%',
        height: '100vh',
      }}
    >
      <BarItems
        state={_proxy}
        items={RightSideBarData}
        config={{ assets: { icon: { fontSize: '40px', color: 'black' } } }}
      ></BarItems>
    </SideBarLayout>
  )
}
