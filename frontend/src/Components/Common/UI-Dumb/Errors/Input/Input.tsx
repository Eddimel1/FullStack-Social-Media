import React from 'react'
import classes from './Input.module.scss'
export const InputError = ({message}:{message:string}) => {
  return (
    <div className={classes.error}>{message}</div> 
  )
}
