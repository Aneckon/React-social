import React from 'react';
import './newest.css';
import Post from './Post/post';

function Newest(props) {
  let NewsPostEl = props.NewsPostData.map((n) => (
    <Post
      name={n.name}
      nameImg={n.nameImg}
      postImg={n.postImg}
      postLike={n.postLike}
      postIcon={n.postIcon}
    />
  ));

  return (
    <div className="newest">
      <div className="container">
        <div className="newest__header">
          <h1>Newest</h1>
        </div>
        <div className="newest__inner">{NewsPostEl}</div>
      </div>
    </div>
  );
}

export default Newest;
