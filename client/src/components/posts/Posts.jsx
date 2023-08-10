import React, { useState, useEffect } from "react";
import "./posts.scss";
import Post from "../post/Post";
import axios from "axios";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios.js";

function Posts({ userId }) {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
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
