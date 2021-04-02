const socket = io();

// DOM elements
let username = document.getElementById('username');
let password = document.getElementById('password');
let btn = document.getElementById('login');

btn.addEventListener('click', () => {
    socket.emit('user:login', {
        username: username.value,
        password: password.value
    });
});