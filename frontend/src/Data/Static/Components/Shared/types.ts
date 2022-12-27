export type Bartype = 'link' | 'dropdown'  | 'state'
type _assetType = 'image' | 'icon'
export type mutated_objT<T = Record<any,any>> = {
mutated_obj:T,
prop: keyof T
}
export type assetType = BarItem_W_IM | BarItem_W_IC

export type _state<T = Record<any,any>> = {
[key:string]:T
}

export type DropDownOptions = {
    dropdown_name:string,container_css?:React.CSSProperties,display:'flex' | 'grid'
}
export interface BarItem_W_IM {
    type:_assetType
    icon?: never
    image: any
  }
  
  export interface BarItem_W_IC {
    type:_assetType
    icon: any
    image?: never
  }
  export type LinkBar = {
    type: 'link'
    to:string
    asset?: assetType
    title?: string
  }

  export type DropDownBar = {
    title?:string
    type: 'dropdown'
    dropdown: BarItemT[]
    asset?: assetType
    options:DropDownOptions
    
  }


  export type StateBar = {
    type: 'state'
    asset?: assetType
    title?: string
  }

  export type BarItemT = LinkBar | DropDownBar | StateBar


  

  
 
