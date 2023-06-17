import { Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css";
import Avatar from '@mui/material/Avatar';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
                    <Avatar src='https://pbs.twimg.com/profile_images/865695281492381696/81tOUsc7_400x400.jpg' />
                    <input placeholder="What's happening?" type="text"></input>
                </div>
                <input
                    className='tweetBox__imageInput'
                    placeholder='Enter image URL'
                    type="text"
                ></input>
                <Button>Tweet</Button>
            </form>

        </div>
    );
}

export default TweetBox;