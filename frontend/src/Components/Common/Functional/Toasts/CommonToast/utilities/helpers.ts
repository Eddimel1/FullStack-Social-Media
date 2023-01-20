import { toast_mode } from './../ToastPortal/ToastPortal';
export const returnDeleteAddToast = (success: boolean, entity: string , operation:'delete' | 'add'='add') : {message:string,mode:toast_mode} => {
    const _operation = operation === 'add' ? 'added' : 'deleted'
  if (success) {
    return {
      message: `${entity} was ${_operation} successfully`,
      mode: 'success',
    } 
  } else {
    return {
      message: `${entity} was not ${_operation}`,
      mode: 'error',
    }
  }
}


