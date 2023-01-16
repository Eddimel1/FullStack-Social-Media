import React, { useEffect, useRef, useState } from 'react'
import { InputError } from '../../../../../Components/Common/UI-Dumb/Errors/Input/Input'
import { inputStyles, textAreaStyles } from '../common/styles/styles'
import classes from './TextArea.module.scss'
import common from '../common/styles/common.module.scss'
import { labelStyles } from '../../../../../Global/Styles/label'
import { BaseInputProps } from '../../../../../Global/Types/Props'
import { SmileOutlined } from '@ant-design/icons'
import { Smiles } from '../../Comment/Smiles/Smiles'
import { useOutside } from '../../../../../Global/Hooks/useOutside'

type _props = BaseInputProps & {smiles?:boolean,cols?:number,reset?:boolean}
export const TextArea = ({ mutated_obj, prop,placeholder , css,label=true,cols=20 , smiles,reset=false }: _props) => {
  const [change, setChange] = useState<string>('')
  const {ref,isShow,setIsShow} = useOutside(false)
  const [_,force] = useState(false)
const [_rows,setRows] = useState(1)
  const setValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setChange(value)
    if(mutated_obj[prop]){
        mutated_obj[prop]['value'] = value
    }
  }

  function autoResize(e) {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
}

useEffect(()=>{
if(reset){
    setChange('')
}
},[reset])
  return (
    <div className={common.container}>
     { label &&  <label style={{...labelStyles}} htmlFor={prop}>
        {prop}
      </label>}
      <textarea
      placeholder={placeholder}
        id={prop}
        className={classes.input}
        style={{ ...textAreaStyles,...css }}
        onChange={setValue}
        value={change}
        wrap="hard"
        cols={cols}
        rows={_rows}
        onInput={autoResize}
   />

    {smiles && <SmileOutlined  onClick={()=>setIsShow((prev)=>!prev)} className={classes.icon} ></SmileOutlined>}
      {isShow && <div ref={ref} style={{position:'absolute',top:'4rem',right:'0',zIndex:'99999999999'}}><Smiles setChange={setChange}></Smiles> </div>}
    </div>
  )
}