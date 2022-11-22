
type _request_envs = 'GRAPHQL_SERVER_URL' | 'NEST_SERVER_URL'
export const getEnv = (prop:_request_envs,fallback?:string) => {
    console.log(prop)
    
    const value = process.env['GRAPHQL_SERVER_URL'] || fallback
        if(!value) throw new Error(`${prop} in environment was not found `)
        else return value
        
        
}