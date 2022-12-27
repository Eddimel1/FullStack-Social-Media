import React, { PropsWithChildren } from 'react'
import { FlexLayout } from '../../Common/FlexLayout/FlexLayout'


    type _props = {
        children:React.ReactNode | React.ReactNode[]
        proportion?:string[]
    }
    

export const _2SideBarLayout:React.FC<PropsWithChildren<_props>> = ({children}) => {
  return (
    
     <FlexLayout  proportion={['1','3','1']}>
        {children}
     </FlexLayout>
    
   
   
  )
}