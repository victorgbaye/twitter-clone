import React from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
const Feed = () => {
    return (
            <div className='feed'>
                <div className='feed__header'>
                    <h2>Home</h2>
                </div>
                <TweetBox/>
                <Post
                displayName="TOMIWA"
                username="tomiwa_of_mars"
                verified
                text="wa ti ma gbo"
                image="https://pbs.twimg.com/profile_images/1472960415227420672/rlZyT1xi_400x400.jpg"
                avatar="T"
                />
            </div>
    )
}

export default Feed
