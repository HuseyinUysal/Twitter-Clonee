
import React from 'react'

if(typeof window !== "undefined"){ 
}


export default function Post({
    displayName,
    username,
    text,
    avatar,
    image}
) {
    
  return (
    <div className="post">
        <div className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <img src={avatar} alt=""></img>
        </div>

        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {displayName}{" "}
                        <span className="post__headerSpecial">
                  @
                  {username}
                </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt=""/>

        </div>
        <div className="post__footer">
        <button className="inline-flex justify-center items-center rounded-full hover:bg-rose-500/10 hover:text-rose-500 border-rose-500 text-red-500 h-7 w-7 relative" type='submit' name='action' value='like' onclick="Toggle1()" id="btnh"><div><img className=" h-5 w-5"  src='https://cdn-icons-png.flaticon.com/512/1077/1077035.png' alt=""></img></div>
</button>
       
        </div>
    </div>
  )
}
