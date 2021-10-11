import React from 'react';

function ProfileIcon(props) {
  return (
    <div className="profile__icon">
      <img src={props.icon} alt="" />
    </div>
  );
}
export default ProfileIcon;
