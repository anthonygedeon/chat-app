const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

express.static(__dirname);

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname, './index.html');
});

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('User disconnected')
    });

    socket.on('chat message', (message) => {
        io.emit('chat message', message);
    });

});

http.listen(3000, () => {
	console.log('listening on *:3000');
});
