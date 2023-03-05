import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import Instructions from "./components/Instructions";
import Post from "./components/Post";
import "./styles.scss";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
    
    // // compared to using ".then"
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((dataPosts) => setPosts(dataPosts));
  }, []);

  return (
    <div className="App">
      <div className="Instructions">
        <Instructions />
        <div className="block">
          <CreatePost posts={posts} setPosts={setPosts} />
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
