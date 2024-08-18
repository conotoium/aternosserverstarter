// This script simulates a Minecraft server

const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());
    // Simulate server response
    socket.write('Hello from Minecraft server!');
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Listen on port 25565 (default Minecraft port)
server.listen(25565, () => {
  console.log('Minecraft server simulation running on port 25565');
});
