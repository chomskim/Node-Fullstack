import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../helpers/dropdown';
import DeletePostMutation from '../mutations/deletePost';
import { Link } from 'react-router-dom';

const DeleteButton = ({ deletePost, postId }) => (
  <button onClick={() => {
    deletePost({ variables: { postId } });
  }}
  >
    Delete
  </button>
);

export default ({ post, changeState }) => (
  <div className="header">
    <img src={post.user.avatar} />
    <Link to={'/user/' + post.user.username}>
      <img src={post.user.avatar} />
      <div>
        <h2>{post.user.username}</h2>
      </div>
    </Link>
    <Dropdown trigger={<FontAwesomeIcon icon={faAngleDown} />}>
      <button onClick={changeState}>Edit</button>
      <DeletePostMutation post={post}>
        <DeleteButton />
      </DeletePostMutation>
    </Dropdown>
  </div>
);
