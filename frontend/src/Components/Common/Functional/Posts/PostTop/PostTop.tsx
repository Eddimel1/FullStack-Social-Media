import React, { useCallback, useState } from 'react'
import { Avatar } from '../../../UI-Dumb/Graphics/Images/Avatar/Avatar'
import classes from './PostTop.module.scss'
import { EllipsisOutlinedIcon } from '../../../UI-Dumb/Lib-Wrappers/Icons/EllipsisOutlined/EllipsisOutlined'
import { CommonNavLink } from '../../../UI-Dumb/Lib-Wrappers/NavLink/CommonNavLink/CommonNavLink'
import { useremovePostMutation } from '../PostForm/__generated__/PostRemove.mutation'
import { SimpleDropDown } from '../../DropDowns/Simple/SimpleDropDown'
import { useToastAssets } from '../../Toasts/CommonToast/Hooks/useToastAssets'
import { ToastPortal } from '../../Toasts/CommonToast/ToastPortal/ToastPortal'
type _props = {
  username: string
  date: string
  avatar_url: string
  postId: string
}
export const PostTop = ({ avatar_url, date, username, postId }: _props) => {
  const { addToast, toastRef } = useToastAssets()
  const successfulDeleteOperation = useCallback(() => {
    addToast({
      message: 'Post was deleted successfully',
      mode: 'success',
    })
  }, [])
  const [removePost, removed_post] = useremovePostMutation()
  const [postOptions, showPostOptions] = useState(false)
  return (
    <>
      <ToastPortal
        autoCloseTime={5000}
        ref={toastRef}
        autoClose={true}
      ></ToastPortal>

      <div className={classes.top}>
        <div className={classes.top_right}>
          <Avatar src={avatar_url} alt="default avatar"></Avatar>
        </div>
        <div className={classes.top_center}>
          <div className={classes.links}>
            <CommonNavLink to="./">{username}</CommonNavLink>
            <CommonNavLink to="./">{date}</CommonNavLink>
          </div>
        </div>
        <div className={classes.top_bottom}>
          <div
            className={classes.postOptions}
            onClick={() => showPostOptions(true)}
          >
            <EllipsisOutlinedIcon></EllipsisOutlinedIcon>
            {postOptions && (
              <SimpleDropDown
                setShow={showPostOptions}
                show={postOptions}
                showArrow={false}
              >
                
                <div className={classes.dropDownItem}>Complain</div>
                <div
                  className={classes.dropDownItem}
                  onClick={() => {
                    removePost({
                      variables: { id: Number(postId) },
                      update: (cache, { data }) => {
                        if (data.removePost.id) {
                          const identity = cache.identify(data.removePost)
                          cache.evict({ id: identity })
                          successfulDeleteOperation()
                        }
                      },
                    }).catch((e) => console.log(e))
                  }}
                >
                  Delete Post
                </div>
              </SimpleDropDown>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
