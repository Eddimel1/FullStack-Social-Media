import { CameraOutlined, CustomerServiceOutlined, DeleteOutlined, FullscreenOutlined, PaperClipOutlined, PlaySquareOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import { ButtonBackGrounds } from '../../../../../Global/Styles/button'
import { iconContainerStyles } from '../../../../../Global/Styles/icons'
import { Avatar } from '../../../UI-Dumb/Graphics/Images/Avatar/Avatar'
import { SimpleDropDown } from '../../DropDowns/Simple/SimpleDropDown'
import { CommonFileInput } from '../../Input/File/Common/Common-file-input'
import { TextArea } from '../../Input/TextArea/TextArea'
import classes from './CommentForm.module.scss'
import { CommentAssets } from '../Assets/Assets'


export type assetType = {
    audio:{local_url:string,file:File | null,error:string},
    video:{local_url:string,file:File | null,error:string}
    photo:{local_url:string,file:File | null,error:string}
}

export type _commentAssetsInitial = assetType & {comment:{value:string,error:string},selected:string,emoji:boolean}
const initialState : _commentAssetsInitial = {comment:{value:'',error:''},photo:{local_url:'',file:null,error:''},
audio:{local_url:'',file:null,error:''},video:{local_url:'',file:null,error:''},selected:'',emoji:false}

export const CommentForm = () => {
    const [_,force] = useState(false)
    const handlers = {
        get(target, key) {
          if (typeof target[key] === 'object' && target[key] !== null) {
            return new Proxy(target[key], handlers)
          } else {
            return target[key];
          }
        },
        set (obj, prop, new_val) {
            if(prop === 'emoji'){
                obj[prop]= new_val
                force((prev)=>!prev)
                return true
            }
            else {
                obj[prop]= new_val
                return true
            }
        }
      }
    
    const _proxy = new Proxy<typeof initialState>(initialState,handlers)
    const state = useRef<typeof initialState>(_proxy)
  


  return (
    <div className={classes.wrapper}>
        <div className={classes.main_container}>
            <div className={classes.left}>
            <Avatar ></Avatar>
        <div className={classes.inputAndIconsContainer}>
        <TextArea mutated_obj={state.current} smiles prop="comment" label={false} cols={40} css={{padding:'1rem' }}></TextArea>
        <div className={classes.icons}>
        <CommonFileInput done={force} mutated_obj={state.current} prop='photo'>
                <CameraOutlined style={{fontSize:'25px'}}></CameraOutlined>
            </CommonFileInput>
      <SimpleDropDown options={{display:'flex',dropdown_css:{transform:'translate(0,0)',top:'40px'}}} asset={{icon:PaperClipOutlined,type:'icon' ,css:{fontSize:'25px'}}} >
      <CommonFileInput done={force} mutated_obj={state.current} prop='photo'>
                <CameraOutlined style={{fontSize:'25px'}}></CameraOutlined>
            </CommonFileInput>
            <CommonFileInput done={force} mutated_obj={state.current} prop='audio'>
            <CustomerServiceOutlined  style={{fontSize:'25px'}}></CustomerServiceOutlined>
            </CommonFileInput>
            <CommonFileInput done={force} mutated_obj={state.current} prop='video'>
            <PlaySquareOutlined style={{fontSize:'25px'}}></PlaySquareOutlined>
            </CommonFileInput>
      </SimpleDropDown>
     
        </div>
            </div>
      
       
        </div>
        <div className={classes.send_icon} style={{...iconContainerStyles}}>
        <SendOutlined style={{fontSize:'30px' ,color:'rgb(192, 242, 198)'}}></SendOutlined>
        
        </div>
        
                 
        </div>
       <CommentAssets  audio={state.current} photo={state.current} video={state.current}></CommentAssets>
        
    </div>
  )
}
