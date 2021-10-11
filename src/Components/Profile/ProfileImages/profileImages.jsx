import React from 'react';

function ProfileImages(props) {
  return (
      <div className="profile__img">
        <img src={props.img} alt="" />
      </div>
  );
}
export default ProfileImages;
