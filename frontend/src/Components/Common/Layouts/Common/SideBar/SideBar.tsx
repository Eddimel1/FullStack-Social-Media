import React, { PropsWithChildren } from 'react'
import { BASE_BAR_BACKGROUND } from '../../../../../Global/Styles/colors'
import { FlexLayout } from '../FlexLayout/FlexLayout'

type _props = {
    children:React.ReactNode | React.ReactNode[]
    css?: React.CSSProperties

}
export const SideBarLayout:React.FC<PropsWithChildren<_props>> = ({children,css}) => {
  return (
    <FlexLayout direction='column' containerStyles={{alignItems:'flex-start'}}>
        <div style={{background:BASE_BAR_BACKGROUND,...css
    }}>
        {children}
        </div>
       
    </FlexLayout>
  )
}
