import React from 'react';
import { NavLink } from 'react-router-dom';

function MessagesItem(props) {

  let messagesId = '/messages/' + props.id;

  return (
    <NavLink  to={messagesId} className="messages__name">
      <div className="messages__name-item">
        <img src={props.img} alt="" />
        <p>{props.name}</p>
      </div>
    </NavLink>
  );
}
export default MessagesItem;
