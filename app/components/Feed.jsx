import React from 'react'
import Post from './Post'
import Tweetbox from './Tweetbox'

export default function Feed() {
  return (
    <div>
        <h2>Home</h2>
        <Tweetbox/>
        <Post 
        displayName="Sonny Sangha"
        username="ssssangha"
        text="its working!!"
        image="https://media.giphy.com/media/qteC4zts7t7T9u0hTk/giphy.gif"
        avatar="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

    </div>
  )
}