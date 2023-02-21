import React from 'react'
import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    TrashIcon,
  } from "@heroicons/react/outline";
  import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const likeBtn = document.querySelector('.heart-icon');
const numberOfLikesElement = document.querySelector('.number-of-likes');
// get the value from the HTML element
let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
let isLiked = false;
// Functions
const likeClick = () => {
// if the like button hasn't been clicked
  if (!isLiked) {
    likeBtn.classList.add('isLiked');
    numberOfLikes++;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
// if the like button has been clicked
 else {
    likeBtn.classList.remove('isLiked');
    numberOfLikes--;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
};
// Event Listeners
likeBtn.addEventListener('click', likeClick);

export default function Post({
    displayName,
    username,
    text,
    avatar,
    image}
) {
    
  return (
    <div className="flex p-3 border-b border-gray-200">
        <div className="h-11 w-11 rounded-full mr-4">
            <img src={avatar} alt=""></img>
        </div>  
        <div className="flex-1">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
            {displayName}{" "}

            </h4>           
            <span className="text-sm sm:text-[15px]">
            @{username}
            </span>
              </div>
              <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>
                    <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">{text}</p>
            <img className="rounded-2xl mr-2" src={image} alt=""/>

            <div className="flex justify-between text-gray-500 p-2">
          <div className="flex items-center select-none">
            <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
            </div>
            <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
            <div className="flex items-center">
            <HeartIcon onClick={myFunction(this)} className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100 focus:ring-red-300" />
            </div>
            <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
            <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />

            </div>
            </div>
    </div>
  )
}
