import { useCallback, useRef } from "react"
import { _addMessageArgs } from "../ToastPortal/ToastPortal"
import { returnDeleteAddToast } from "../utilities/helpers"


export const useToastAssets = (entity:string) => {
    const toastRef = useRef<{
        addMessage: ({ mode, message }: _addMessageArgs) => void
      }>()
      const addToast = useCallback(({ message, mode }: _addMessageArgs) => {
        if (toastRef.current) {
          toastRef.current.addMessage({ mode, message })
        }
      },[toastRef.current])

      const notSuccessfulDeleteOperation = useCallback(() => {
        addToast(returnDeleteAddToast(false, entity, 'delete'))
      }, [])
      const notSuccessfulAddOperation = useCallback(() => {
        addToast(returnDeleteAddToast(false, entity, 'add'))
      }, [])
  
      const SuccessfulAddOperation = useCallback(() => {
        addToast(
          returnDeleteAddToast(true, entity, 'add')
        )
      }, [])

      const SuccessfulDeleteOperation = useCallback(() => {
        addToast(
          returnDeleteAddToast(true, entity, 'delete')
        )
      }, [])
      return {toastRef,addToast,deleteAddToasts : {SuccessfulDeleteOperation,
        SuccessfulAddOperation , notSuccessfulAddOperation,notSuccessfulDeleteOperation
    }}
}