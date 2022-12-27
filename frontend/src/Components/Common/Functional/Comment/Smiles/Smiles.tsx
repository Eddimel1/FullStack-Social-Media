import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { useOutside } from '../../../../../Global/Hooks/useOutside'


export const Smiles = ({setChange}: {setChange: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div style={{position:'relative' ,zIndex:'5'}} >
{<EmojiPicker lazyLoadEmojis   onEmojiClick={(emoji)=>{
        setChange((prev)=>{ return prev.concat(emoji.emoji)})}} ></EmojiPicker>}
    </div>
    
  )
}
