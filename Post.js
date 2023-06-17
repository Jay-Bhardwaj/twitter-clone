import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';



function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src="https://pbs.twimg.com/profile_images/865695281492381696/81tOUsc7_400x400.jpg"></Avatar>
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'></div>
                    <h3>
                        Jay Bhardwaj {""}
                        <span className='post__headerSpecial'></span>
                        <span>
                            <VerifiedIcon className="post__badge" />
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Welcome to Twitter ...</p>
                </div>

                <image></image>
                <div className='post__footer'>
                    <ChatBubbleOutlineOutlinedIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post;