import React, { useEffect, useState } from 'react'
import Post from './Post'
import Tweetbox from './Tweetbox'
import {db} from '../firebase'
import {collection,getDocs} from 'firebase/firestore'

function Feed() {
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
        const data = await getDocs(postCollectionRef);
        setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getPosts();
  }, [postCollectionRef]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox />

        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
    </div>
  );
}

export default Feed;