import { useEffect, useRef, useState } from 'react';
import client from 'socket.io-client';

const EVENT = 'new-message-event';
const SERVER_URL = 'http://localhost:3001';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = client(SERVER_URL);
    socketRef.current.on(EVENT, (message) => {
      const newMessage = {
        ...message,
        isOwnMessage: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, newMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (messageBody, username) => {
    socketRef.current.emit(EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      username,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
