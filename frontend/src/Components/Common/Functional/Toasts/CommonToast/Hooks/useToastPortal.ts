import uniqid from 'uniqid'
import { useState, useEffect } from 'react'

export const useToastPortal = () => {
  const [loaded, setLoaded] = useState(false)
  const [portalId] = useState(`toast-portal-${uniqid()}`)

  useEffect(() => {
    const div = document.createElement('div')
    div.id = portalId
    div.style = 'position: fixed; top: 60px; right: 10px;z-index:6'
    document.getElementsByTagName('body')[0].prepend(div)

    setLoaded(true)

    return () => document.getElementsByTagName('body')[0].removeChild(div)
  }, [portalId])

  return { loaded, portalId }
}
