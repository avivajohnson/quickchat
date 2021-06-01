import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FormControl, Paper, TextField, Typography } from '@material-ui/core';

const Login = () => {
  const [toChat, setToChat] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setToChat(true);
  };

  const handleUsernameInputChange = (event) => {
    setUsernameInput(event.target.value);
  };

  if (toChat === true) {
    return (
      <Redirect
        to={{
          pathname: '/chat',
          state: { username: usernameInput },
        }}
      />
    );
  }

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        QuickChat
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome! What's your name?
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            onChange={handleUsernameInputChange}
            placeholder="Type your name and hit enter"
            value={usernameInput}
            variant="outlined"
          />
        </FormControl>
      </form>
    </>
  );
};

export default Login;
