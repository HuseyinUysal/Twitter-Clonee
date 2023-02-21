import {DotsHorizontalIcon,ChatIcon,TrashIcon,HeartIcon,ShareIcon,ChartBarIcon} from "@heroicons/react/outline"

export default function Post({post}) {
  return (
    <div className="flex p-3 border-b border-gray-200 ">

        {/*user img*/}
        <img className="h-11 w-11 rounded-full mr-4 " src={post.userImg} alt="user-img">

        </img>

        {/* right side*/}

        <div className=" ">
            {/* header*/}

            <div className="flex items-center justify-between">
                {/* user info*/}
                <div className="flex items-center space-x-1 whitespace-nowrap">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline ">{post.name}</h4>
                    <span className="text-sm sm:text-[15px]">@{post.username} - </span>
                    <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>


                </div>

                <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 ml-40 p-2"/>

                {/* dot icon*/}


            </div>

            {/* txt*/}
            <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">{post.text}</p>

            {/*post img*/}
            <img height="400" width="400" className="rounded-2xl mr-2" src={post.img} alt=""></img>

            {/* icons*/}

            <div className="flex justify-between text-gray-500 p-2">
                <ChatIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                <TrashIcon className="h-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100" />
                <HeartIcon className="h-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100" />
                <ShareIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                <ChartBarIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />


            </div>


        </div>


    </div>
  )
}
