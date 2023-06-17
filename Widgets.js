import React from "react";
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets () {
    return (
        <div className = "widgets">
            <div className="widgets__input">
                
        
                <SearchIcon className="Widgets__searchIcon"></SearchIcon>
                <input placeholder="Search Twitter" type="text"></input>
                
            </div>

            <div className="widgets__widgetContainer"></div>
            <h2>whats happening</h2>

            <TwitterTweetEmbed tweetId={"1619565387368071169"}></TwitterTweetEmbed>

            <TwitterTimelineEmbed
                sourceType = "profile"
                screenName="wwe"
                options={{height:400}}

            />
            
        </div>
    );
}

export default Widgets;