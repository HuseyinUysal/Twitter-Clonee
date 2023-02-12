import React from "react"


export default function Tweetbox(){

    return(
        <div className="text-red-600">

            <form>
                <div>
        <input className="w-full resize-none overflow-hidden border-b border-transparent py-3 text-2xl focus:border-gray-200 focus:outline-none" placeholder="What's happening?" type="text"></input>
        <input className="w-full" placeholder="Optianal: Enter image URL" type="text"></input>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Tweet</button>



            </form>



        </div>
    )

}
