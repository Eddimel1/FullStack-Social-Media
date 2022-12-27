import { useState, useEffect, useRef,  SetStateAction } from 'react'

type W_LocalState<T> = {
	ref: React.MutableRefObject<T>
	isShow: boolean
	setIsShow: React.Dispatch<SetStateAction<boolean>>

}

export function useOutside <T = HTMLDivElement>(initialIsVisible: boolean , setState?:React.Dispatch<SetStateAction<boolean>> ) : W_LocalState<T> {
	const [isShow, setIsShow] = useState<boolean>(initialIsVisible)
	const ref = useRef(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			if(setState)setState(false)
            else setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})
    return {ref,isShow,setIsShow} 
}
