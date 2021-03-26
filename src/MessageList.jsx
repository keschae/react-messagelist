import React from 'react'
import { useState } from 'react'


import Message from './Message';

const MessageList = () => {

    const initialValues = [
      {
        _id: 'd2504a54',
        from: 'John',
        content: 'The event will start next week',
        status: 'unread'
      },
      {
        _id: 'fc7cad74',
        from: 'Martha',
        content: 'I will be traveling soon',
        status: 'read'
      },
      {
        _id: '876ae642',
        from: 'Jacob',
        content: 'Talk later. Have a great day!',
        status: 'read'
      }
    ];
  
    const [messages] = React.useState(initialValues);
    const messageViews = messages.map(
      message => <Message key={message._id} message={message} />
    );
  
    return (
      <div className="container">
        <h1>List of Messages</h1>
        {messageViews}
      </div>
    );
  };

  export default MessageList;