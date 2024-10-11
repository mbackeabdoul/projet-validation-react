import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { Link } from 'react-router-dom';

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="container mt-4">
      <h2>Liste des Posts</h2>
      <ul className="list-unstyled">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} className="text-decoration-none text-primary">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
