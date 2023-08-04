import React, { useState, useEffect } from "react";
import "./posts.scss";
import Post from "../post/Post";
import axios from "axios";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios.js";

function Posts() {
  // const [posts, setPosts] = useState([]);

  // axios
  //   .get("http://localhost:8800/api/posts")
  //   .then((res) => setPosts(res.data));

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:8800/api/posts/`);
  //       setPosts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   makeRequest.get("/posts").then((res) => setPosts(res.data));
  // }, []);

  const { isLoading, error, data } = useQuery("posts", () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default Posts;
