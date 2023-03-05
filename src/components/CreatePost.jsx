import React, { useState } from "react";
import axios from "axios";

export default ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // using axios instead of fetch
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
        userId: 1
      })
      .then((response) => {
        setPosts([response.data, ...posts]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            name="body"
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit" onClick={(e) => {}}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
