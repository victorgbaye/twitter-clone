import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@mui/material'
const TweetBox = () => {
    return (
        <div className='tweetBox'>
          <form>
              <div className='tweetBox__input'>
                <Avatar src=''>T</Avatar>
                <input placeholder="what's happening?" type='text'/>
              </div>
              <input
              className="tweetBox__imageInput"
              placeholder="Enter image URL"
              type="text"/>
              <Button className='tweetBox__tweetButton'>Tweet</Button>
          </form>

        </div>
    )
}

export default TweetBox
