import { CaretDownOutlined } from '@ant-design/icons'
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BarItemT } from '../../../../../Data/Static/Components/Shared/types'
import { _dropdownState } from '../../../Bars/NavBar/NavBar'
import { DropDown } from '../../../Functional/DropDowns/Common/Common'
import { Label } from '../../Labels/BaseLabel/BaseLabel'
import { CommonOption } from '../../Options/Common/Common'
import classes from './Bar.module.scss'

type _props = React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> & {
  options: BarItemT
  children: React.ReactNode
  css?: React.CSSProperties
  current_dropdown?: string 
  state?: _dropdownState
}
export const BarItem: React.FC<PropsWithChildren<_props>> = ({
  children,
  css,
  options,
  state,
  current_dropdown,
  ...attr
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const _ref = useRef<HTMLDivElement>(null)
  const _current_dropdown = useRef< string | null>(null)
  useEffect(() => {
   if (options.type === 'dropdown' && options.options.dropdown_name) {
      if (!Number(_ref.current.dataset['dropdown'])) {
        const keys = Object.keys(state)
        if (!keys.includes(options.options.dropdown_name)) {
          const new_key = options.options.dropdown_name
          _current_dropdown.current = new_key
          _ref.current.setAttribute('data-dropdown', String(new_key))
          state[new_key] = {}
          state[new_key]['value'] = null
          state[new_key]['display'] = options.options.display
        }
      }
    }
  }, [])
  if (options.type === 'link') {
    const { title, to } = options
    return (
      <NavLink to={to} {...attr} style={{ ...css }} className={classes.barItem}>
        {children}
        <Label css={{ marginLeft: '0.4rem' }}>{title}</Label>
      </NavLink>
    )
  } else if (options.type === 'dropdown') {
    
    const dropdown = options.dropdown
    return (
      <div
        ref={_ref}
        {...attr}
        className={classes.barItem}
      
        onClick={() => {
          setShowDropDown((prev) => !prev)
          state.selected = _current_dropdown.current
        }}
        style={{ position: 'relative' }}
      >
        <CaretDownOutlined
          className={classes.arrow}
          style={{ transform: `rotate(${showDropDown ? '180deg' : '0deg'})` }}
        ></CaretDownOutlined>
        {children}
        {options.title ? <div className={classes.dropDownTitle}>{options.title && options.title}</div> : null}

        <DropDown
         setShowDropDown={setShowDropDown}
          current_dropdown={_current_dropdown.current}
          options={options.options}
          state={state}
          items={dropdown}
          show={showDropDown}
        ></DropDown>
      </div>
    )
  } else if (options.type === 'state') {
    return (
      <CommonOption
      multiple_dropdowns
        mutated_obj={state}
        value={options.title}
        asset={options.asset}
        prop={current_dropdown}
      ></CommonOption>
    )
  }
}
