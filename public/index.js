const socket = io();

const form = document.querySelector('form');
const messageInput = document.querySelector('#m');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    socket.emit('chat message', messageInput.value);

    messageInput.value = '';

    return false;

});

socket.on('chat message', (message) => {

    const li = document.createElement('li');
    li.textContent = message;

    document.querySelector('#messages').append(li);

});