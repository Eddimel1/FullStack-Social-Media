
import ReactDOM from 'react-dom';
import classes from './ToastPortal.module.scss'
import uniqid from 'uniqid'
import { useState, forwardRef, useImperativeHandle } from 'react';
import { useToastAutoClose } from '../Hooks/useToastAutoClose';
import { useToastPortal } from '../Hooks/useToastPortal';
import { Toast } from '../Toast/Toast';

/**
 * The parent of this component should not have
 * to worry about maintaining a list of message
 * objects. That would require the parent to
 * also manage the deletion of toasts, etc.
 *
 * To accommodate this, we are using a combination
 * of useImperativeHandle and forwardRef to give
 * the parent access to this component's addMessage
 * functionality.
 */

type _props = {
    autoClose : boolean
    autoCloseTime : number
}
export type toast_mode = 'info' | 'warning' | 'success' | 'error'
export type _addMessageArgs = { mode: toast_mode; message: string }
export type _toast = {
    message:string
    mode:toast_mode
    id:number
}
export const ToastPortal = forwardRef(
  ({ autoClose = false, autoCloseTime = 5000 }:_props, ref) => {
    const [toasts, setToasts] = useState<_toast[]>([]);
    const { loaded, portalId } = useToastPortal();
    useToastAutoClose({
      toasts,
      setToasts,
      autoClose,
      autoCloseTime,
    });

    const removeToast = id => {
      setToasts(toasts.filter(t => t.id !== id));
    };

    useImperativeHandle(ref, () => ({
      addMessage(toast : _addMessageArgs) {
        setToasts([...toasts, { ...toast, id: uniqid() }]);
      },
    }));

    return loaded ? (
      ReactDOM.createPortal(
        <div className={classes.toastContainer}>
          {toasts.map(t => (
            <Toast
              key={t.id}
              mode={t.mode}
              message={t.message}
              onClose={() => removeToast(t.id)}
            />
          ))}
        </div>,

        document.getElementById(portalId),
      )
    ) : (
      <></>
    );
  },
);