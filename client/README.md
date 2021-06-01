# QuickChat

This is a basic app that allows users to send messages back and forth.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Material-UI](https://material-ui.com/). 


## Prerequisites
- [Node](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/getting-started/install)

## Installation
From the project directory, run `yarn` to install server dependencies.
From the `/client/` folder, run `yarn` to install client dependencies.

## Usage
### Start the server
From the project directory, run `yarn start`. On successful start, the server will indicate `listening on *:3001`.

### Start the web app
From the project directory, run `cd client && yarn start`. This will run the React app in development mode.

### Sending and receiving messages
Open [http://localhost:3000](http://localhost:3000) in your browser in two different tabs to simulate two concurrent users. After entering a name for each user, you'll be able to send messages back and forth between them.


## TODO
- Add tests.
- Set up linting and code formatting with ESLint and Prettier.
- Group messages, so multiple messages from a user appear under a single "[Name] says:" header (instead of repeating the user's name with each message).
- Automatically scroll to bottom of chat window when a new message appears.
- Implement actual user accounts, authentication, etc.
- Allow users to select who they're sending messages to. Right now, all chat messages appear in the same "room" and there's no way to send a message directly to a single, specific user.
- Implement storage so messages persist beyond the current session. If the second user starts a session after the first user has already sent a message, the second user won't see that message. Similarly, if you reload the page, previous messages disappear.
