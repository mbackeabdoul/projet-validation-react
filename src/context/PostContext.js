import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const selectPost = (post) => {
    setSelectedPost(post);
  };

  return (
    <PostContext.Provider value={{ posts, selectedPost, selectPost }}>
      {children}
    </PostContext.Provider>
  );
};
