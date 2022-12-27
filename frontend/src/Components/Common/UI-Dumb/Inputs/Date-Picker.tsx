import React, { useState } from 'react'
import classes from './Date-Picker.module.scss'
import { labelStyles } from '../../../../Global/Styles/label'
type _props = {
  mutated_obj: Record<any, any>
  prop: string
}
export const DatePicker = ({ mutated_obj, prop }: _props) => {
  const [change, setChange] = useState<string>('')
  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value)
    mutated_obj[prop] = e.target.value
  }
  return (
    <>
      <div className={classes.container}>
        <div style={{...labelStyles,margin:'0 0 0 1rem'}}>BirthDate</div>
        <div className={classes.inputContainer} style={{marginRight:'3rem'}}>
        <label className={classes.label} htmlFor="datepicker">
          <input
          className={classes._input}
            value={change}
            onChange={setValue}
            type="date"
            id="datepicker"
          />
        </label>
        </div>
       
      </div>
    </>
  )
}
