import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Widgets.css';
import { 
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton } from "react-twitter-embed";

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__inputs">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/> 
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1485927658294845442'}/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="elonmusk"
                options={{height: 400}}
                />
                <TwitterShareButton
                url={'https://facebook.com/saurabhnemade'}
                options={{ text: '#reactjs is awesome', via: 'elonmusk' }}
                />
            </div>
        </div>
    )
}

export default Widgets
