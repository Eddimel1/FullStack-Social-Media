export const getEnv = (prop:string,fallback?:string) => {
    const value = process.env['prop'] || fallback
        if(!value) throw new Error(`${prop} in environment was not found `)
        return value
        
}