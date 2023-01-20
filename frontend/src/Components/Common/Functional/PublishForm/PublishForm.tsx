import { CameraOutlined, PaperClipOutlined, CustomerServiceOutlined, PlaySquareOutlined, SendOutlined } from "@ant-design/icons"
import { memo, PropsWithChildren, useCallback, useState } from "react"
import { iconContainerStyles } from "../../../../Global/Styles/icons"
import { Avatar } from "../../UI-Dumb/Graphics/Images/Avatar/Avatar"
import { CommentAssets } from "../Comment/Assets/Assets"
import { SimpleDropDown } from "../DropDowns/Simple/SimpleDropDown"
import { CommonFileInput } from "../Input/File/Common/Common-file-input"
import { TextArea } from "../Input/TextArea/TextArea"
import { mapFiletypesT, getFoldersFromType } from "./Utility/getFoldersFromType"
import classes from './PublishForm.module.scss'

type _props = {
  avatar_url: string
  state: any //type it
  reset: boolean
  mappingType: mapFiletypesT
  children?: React.ReactNode
  containerCss? : React.CSSProperties
  placeholder?:string
 

}
export const PublishForm: React.FC<PropsWithChildren<_props>> = memo(({
  avatar_url,
  reset,
  state,
  children,
  mappingType,
  containerCss,
  placeholder
}: _props) => {
  const _type = getFoldersFromType({ type: mappingType })
  const [_,force] = useState(false)
  const forceUpdate = useCallback(()=>{force((prev)=>!prev)},[])
    return (
    <div className={classes.wrapper}>
      <div className={classes.main_container}>
        <div className={classes.left}>
          <Avatar src={avatar_url}></Avatar>
          <div className={classes.inputAndIconsContainer} style={{...containerCss}}>
            <TextArea
              reset={reset}
              mutated_obj={state}
              placeholder={placeholder || "What is new ?"}
              smiles
              prop="text"
              label={false}
              cols={40}
              css={{ padding: '1rem' }}
            ></TextArea>
            <div className={classes.icons}>
              <SimpleDropDown
                options={{
                  display: 'flex',
                  dropdown_css: { top: '40px' },
                }}
                asset={{
                  icon: PaperClipOutlined,
                  type: 'icon',
                  css: { fontSize: '25px' },
                }}
              >
                <CommonFileInput
               
                  operation_type={`upload/${_type.image}`}
                  mutated_obj={state}
                  prop="image"
                >
                  <CameraOutlined  style={{ fontSize: '25px' }}></CameraOutlined>
                </CommonFileInput>
                <CommonFileInput
                
                  operation_type={`upload/${_type.audio}`}
                  mutated_obj={state}
                  prop="audio"
                >
                  <CustomerServiceOutlined
                    style={{ fontSize: '25px' }}
                  ></CustomerServiceOutlined>
                </CommonFileInput>
                <CommonFileInput
                  done={forceUpdate}
                  operation_type={`upload/${_type.video}`}
                  mutated_obj={state}
                  prop="video"
                >
                  <PlaySquareOutlined
                    style={{ fontSize: '25px' }}
                  ></PlaySquareOutlined>
                </CommonFileInput>
              </SimpleDropDown>
            </div>
          </div>
        </div>
        <div
          onClick={() => (state.published = true)}
          className={classes.send_icon}
          style={{
            ...iconContainerStyles,
          }}
        >
          <SendOutlined
            style={{ fontSize: '30px', color: 'rgb(192, 242, 198)' }}
          ></SendOutlined>
        </div>
      </div>
      <CommentAssets
        audio={state?.audio}
        image={state?.image}
        video={state?.video}
      ></CommentAssets>
      {children}
    </div>
  )
})
