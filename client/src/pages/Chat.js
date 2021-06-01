import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Box,
  Paper,
  TextField,
  makeStyles,
  FormControl,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import useChat from '../useChat';

const useStyles = makeStyles({
  userInfo: {
    alignContent: 'flex-end',
  },
  messageWindow: {
    marginBottom: 15,
    maxHeight: '50vh',
    overflowY: 'scroll',
  },
  messageList: {
    listStyle: 'none',
    margin: 0,
    padding: 15,
  },
  message: {
    backgroundColor: '#efefef',
    borderRadius: 20,
    color: '#1d1d1d',
    marginBottom: 5,
    maxWidth: '70%',
    padding: 10,
    width: 'fit-content',
  },
  ownMessage: {
    backgroundColor: '#2e8cff',
    color: '#fff',
    marginLeft: 'auto',
  },
});

const Chat = (props) => {
  const { username } = (props.location && props.location.state) || {};
  const { messages, sendMessage } = useChat();
  const [messageInput, setMessageInput] = useState('');
  const classes = useStyles();

  const handleMessageInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (messageInput.length) {
      sendMessage(messageInput, username);
      setMessageInput('');
    }
  };

  const renderMessage = (message, i) => (
    <li
      key={i}
      className={clsx(
        classes.message,
        message.isOwnMessage ? classes.ownMessage : null
      )}
    >
      <Typography variant="caption" display="block" gutterBottom>
        {message.username} says:
      </Typography>
      {message.body}
    </li>
  );

  if (!username) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  return (
    <>
      <Box textAlign="right" my={2} className={classes.userInfo}>
        Logged in as: <span fontWeight="bold">{username}</span>
      </Box>
      <Paper className={classes.messageWindow} elevation={1}>
        <ol className={classes.messageList}>
          {messages.map((message, i) => renderMessage(message, i))}
        </ol>
      </Paper>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            onChange={handleMessageInputChange}
            placeholder="Type a message and hit enter"
            variant="outlined"
            value={messageInput}
          />
        </FormControl>
      </form>
    </>
  );
};

export default Chat;
