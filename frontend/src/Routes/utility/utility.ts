type _router = () => JSX.Element
export const extendRouter = (router: _router, routers: _router[]) => {
        const __routers = [...routers,router]
    return(
        __routers.map((_router) =>{
            return _router()
        })
        
    )
}
