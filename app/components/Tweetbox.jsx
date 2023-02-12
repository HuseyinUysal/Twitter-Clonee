import React, { useState } from "react"
import {db} from '../firebase'
import {collection,addDoc} from 'firebase/firestore'

export default function Tweetbox(){
    const postCollectionRef = collection(db, "posts");
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = async() =>{
        await addDoc(postCollectionRef)
        /*e.preventDefault();
        db.collection('posts').add({
            displayName: 'Hüseyin Uysal',
            username:'hussoo',
            text: tweetMessage,
            avatar:"https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"*/
        };

        setTweetMessage("");
        setTweetImage("");
    

    return(
        <div className="">

            <form>
                <div >
                    <img src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" height="50" width="50" alt=""/>
        <input onChange={(event) => {setTweetMessage(event.target.value)}} value={tweetMessage} className="w-full resize-none overflhow-hidden border-b border-transparent py-3 text-2xl focus:border-gray-200 focus:outline-none" placeholder="What's happening?" type="text"></input>
        </div>
        <input onChange={(event)=> {setTweetImage(event.target.value)}} value={tweetImage} className="w-full" placeholder="Optianal: Enter image URL" type="text"></input>
                
                <button onClick={sendTweet} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Tweet</button>



            </form>



        </div>
    )

    }
