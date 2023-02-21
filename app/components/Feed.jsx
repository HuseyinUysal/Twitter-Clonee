import React from 'react'
import  {SparklesIcon} from "@heroicons/react/outline"
import Input from './input'
import Post from './Post'

export default function Feed() {
  const posts = [
    {
      id:"1",
      name: "Hüseyin UYSAL",
      username: "hussooo",
      userImg: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
      img:"https://media0.giphy.com/media/KZCKEvhtoopmLXXatk/200.webp?cid=ecf05e477cuf688vposbo1nma6fr5l0blqj1ecq8q5oe00rp&rid=200.webp&ct=g",
      text: "dog with glasses",
      timestamp: "2 hours ago"
    },
    {
      id:"2",
      name: "Hüseyin UYSAL",
      username: "hussooo",
      userImg: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
      img:"https://media1.giphy.com/media/l8WKMOIUUKmYjGbUTg/200.webp?cid=ecf05e477cuf688vposbo1nma6fr5l0blqj1ecq8q5oe00rp&rid=200.webp&ct=g",
      text: "The Office",
      timestamp: "2 hours ago"
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold ">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />

        </div>
      </div>
      <Input/>
      {posts.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}


    </div>
  )
}