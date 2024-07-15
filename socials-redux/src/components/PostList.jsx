import { useContext, useEffect, useState } from "react";
import Post from "./Post.jsx";
import { PostList as PostListData } from "../store/post-list-store.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const postList = useLoaderData();
  // const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {
      /* {fetching ? (
        <LoadingSpinner></LoadingSpinner>
      ) :  */}
      {postList.length === 0 ? (
        <WelcomeMessage></WelcomeMessage>
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
      {/* } */}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
