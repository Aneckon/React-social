import React from 'react';
import './profile.css';
import ProfileImages from './ProfileImages/profileImages';
import ProfileIcon from './ProfileImages/profileIcon';
import ProfilePost from './ProfilePost/profilePost';

function Profile(props) {
  let profileImg = props.profileImg.map((p) => <ProfileImages id={p.id} img={p.img} />);
  let profileIcon = props.profileIcon.map((picon) => (
    <ProfileIcon id={picon.id} icon={picon.icon} />
  ));
  
  let profilePost = props.profilePost.map((post) => <ProfilePost id={post.id} name={post.name} icon={post.icon} text={post.text} />)

  let addPostEl = React.createRef();

  let addPost = () => {
    let postText = addPostEl.current.value;
    props.newsPost(postText);
  }

  return (
    <div className="profile">
      <div className="container">
        <div className="profile__inner">
          <div className="profile__bgaund">
            {profileImg}
            {profileIcon}
          </div>
          <div className="profile__name">
            <h1>Andrew</h1>
          </div>
          <div className="profile__post">
            <p>Публікації</p>
          </div>
          <div className="profile__input">
            <div className="profile__input-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" />
            </div>
            <div className="profile__input-input">
              <input type="text" ref={addPostEl}/>
            </div>
            <button className="input__btn" onClick={ addPost }>Add post</button>
          </div>
          <div className="profile__post">
            {profilePost}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
