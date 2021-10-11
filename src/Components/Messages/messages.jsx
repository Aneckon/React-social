import React from 'react';
import MessagesItem from './MessagesItem/messagesItem';
import MassegesMessag from './MessagesItem/messagesMessag';
import './messages.css';

function Messages(props) {
  let messagesElements = props.messagesData.map((m) => (
    <MessagesItem name={m.name} id={m.id} img={m.img} />
  ));
  let messagesMessagesEletemt = props.messagesMessagData.map((md) => (
    <MassegesMessag id={md.id} messagesLeft={md.messagesLeft} />
  ));

  let addMessagesEl = React.createRef();

  let addMessages = () => {
    let messagesText = addMessagesEl.current.value;
    alert(messagesText);
  }

  return (
    <div className="messages">
      <div className="container">
        <div className="newest__header">
          <h1>Messages</h1>
        </div>
        <div className="messages__inner">
          <div className="messages__item">{messagesElements}</div>
          <div className="messages__messages">
            {messagesMessagesEletemt}
            <div className="messages__input">
              <input type="text" ref={addMessagesEl} />
              <button onClick={addMessages}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messages;
