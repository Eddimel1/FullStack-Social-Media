import React, { FC, PropsWithChildren } from 'react'
import { buttonStyles } from '../../../../Global/Styles/button'
import classes from './Common.module.scss'
type _props = React.HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
  color?:'black' | 'light_blue' | 'pink'
  options?:{['--hover_color']:string}
  css?: React.CSSProperties
}

export const Button: FC<PropsWithChildren<_props>> = ({ css, children,disabled,options={},color='black',...atr }) => {
    const styles = css ? css : buttonStyles
    const button_class = color === 'black' ? `${classes.black}` : color === 'light_blue' ?  `${classes.light_blue}` : `${classes.pink}`
  return <button {...atr} className={`${classes.button} ${button_class}`} style={{...options,...css}} disabled={disabled}>{children}</button>
}

