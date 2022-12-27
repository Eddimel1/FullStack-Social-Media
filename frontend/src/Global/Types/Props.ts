export type CSS_Props = {
    css? :React.CSSProperties
}


export type BaseInputProps = {
    mutated_obj :Record<any,any>,
    prop:string,
    placeholder?:string
    label?:boolean
    css?:React.CSSProperties
}