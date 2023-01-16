export const baseProxyHandlers  = {
    get(target, key) {
        if (typeof target[key] === 'object' && target[key] !== null) {
          return new Proxy(target[key], baseProxyHandlers)
        } else {
          return target[key]
        }
      }
}
