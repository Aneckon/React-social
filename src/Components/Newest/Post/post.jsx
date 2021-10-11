import React from 'react';
import './post.css';

function Post(props) {

  return (
    <div className="post__item">
      <div className="post__name">
        <img src={props.nameImg}
        alt="" />
        <p>{props.name}</p>
      </div>
      <div className="post__img">
        <img
          src={props.postImg}
          alt=""
        />
      </div>
      <div className="post__like">
        <button>Like</button>
        <span>{props.postLike}</span>
      </div>
      <div className="post__coments">
        <div className="post__icon">
          <img src={props.postIcon} alt="" />
        </div>
        <div className="post__input">
          <input type="text" placeholder="Comment"/>
        </div>
        <div className="post__send">
          <img src="https://cdn-icons-png.flaticon.com/512/2767/2767834.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Post;
