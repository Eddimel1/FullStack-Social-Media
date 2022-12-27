import React, { PropsWithChildren } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'
import classes from './CommonNavLink.module.scss'

export interface NavLinkProps extends Omit<LinkProps, "className" | "style" | "children"> {
    children?: React.ReactNode | ((props: {
        isActive: boolean;
    }) => React.ReactNode);
    caseSensitive?: boolean;
    className?: string | ((props: {
        isActive: boolean;
    }) => string | undefined);
    end?: boolean;
    style?: React.CSSProperties | ((props: {
        isActive: boolean;
    }) => React.CSSProperties);
}

export const CommonNavLink = ( props:NavLinkProps & React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <NavLink {...props} className={`${classes.navLink} ${props.className}`}>{props.children}</NavLink>
  )
}
