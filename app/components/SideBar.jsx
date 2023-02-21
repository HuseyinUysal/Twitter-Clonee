import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import {HomeIcon} from "@heroicons/react/solid"
import {
HashtagIcon,BellIcon,
InboxIcon,BookmarkIcon,
ClipboardIcon,UserIcon,
DotsCircleHorizontalIcon,
DotsHorizontalIcon
} from "@heroicons/react/outline"

export default function SideBar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <img 
         height="50"
         width="50"
         src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt=''></img>
         </div>

        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />


        </div>

        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        <div className="hoverEffect text-gray-700 flex items-center justify-ceter xl:justify-start mt-auto">
          <img className="h-10 w-10 rounded-full xl:mr-2"
           src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" 
          alt="user-img">

          </img>

          <div className="leading-5 hidden xl:inline ">
            <h4 className="font-bold">Hüseyin UYSAL</h4>
            <p className="text-gray-500">@hussooo</p>
          </div>
          <DotsHorizontalIcon className="h-5 xl:ml-8  hidden xl:inline"/>



        </div>




    </div>
  )
}
