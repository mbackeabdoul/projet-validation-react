import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';
import { Card } from 'react-bootstrap';

const PostDetail = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const post = posts.find((post) => post.id === Number(id));

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <Card style={{ width: '18rem' }} className="text-center">
        {post ? (
          <>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Link to="/" className="btn btn-primary">
                Retour
              </Link>
            </Card.Body>
          </>
        ) : (
          <Card.Body>
            <Card.Text>Post non trouvé.</Card.Text>
            <Link to="/" className="btn btn-primary">
              Retour
            </Link>
          </Card.Body>
        )}
      </Card>
    </div>
  );
};

export default PostDetail;
