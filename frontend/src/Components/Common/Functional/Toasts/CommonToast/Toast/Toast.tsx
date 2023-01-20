import { useMemo } from 'react'
import classes from './Toast.module.scss'

export const Toast = ({ mode, onClose, message }) => {
  const _classes = useMemo(
    () => [classes.toast, classes[mode]].join(' '),
    [mode],
  );

  return (
    <div onClick={onClose} className={_classes}>
      <div className={classes.message}>{message}</div>
    </div>
  )
}