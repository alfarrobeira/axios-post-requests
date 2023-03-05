import React from "react";

export default ({ post }) => {
  return (
    <>
      <div>ID: {post.id}</div>
      <div>Title: {post.title}</div>
      <div>Body: {post.body}</div>
      <div>User ID: {post.userId}</div>
    </>
  );
};