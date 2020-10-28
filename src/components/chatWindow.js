import React from 'react'
import Form from './form'
export default function ChatWindow({ user, messages, addMessage }) {



  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>

      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === user.username ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
      <Form user={user} addMessage={addMessage}/>

    </div>
  )
}
