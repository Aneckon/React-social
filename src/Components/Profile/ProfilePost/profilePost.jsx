import React from 'react';

function ProfilePost(props) {
  return (
    <div className="profile__post-item">
      <div className="profile__post-title">
        <div className="profile__post-icon">
          <img src={props.icon} alt="" />
        </div>
        <div className="profile__post-head">
          <p>{props.name}</p>
        </div>
      </div>
      <div className="profile__post-text">
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}
export default ProfilePost;
