const cors = require('cors');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const EVENT = 'new-message-event';
const PORT = 3001;
const ROOM = 'chatroom';

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
  cors: true,
  origins: ['*'],
});

app.use(cors());

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
  socket.join(ROOM);

  socket.on(EVENT, (eventData) => {
    io.emit(EVENT, eventData);
  });

  socket.on('disconnect', () => {
    socket.leave(ROOM);
  });
});
