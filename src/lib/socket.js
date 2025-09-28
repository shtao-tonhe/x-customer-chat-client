// src/lib/socket.js
import { io } from 'socket.io-client';

let socket;

export const initSocket = (userId, token) => {
  socket = io('http://localhost:3001', {
    auth: { userId, token },
    transports: ['websocket'],
  });
  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};