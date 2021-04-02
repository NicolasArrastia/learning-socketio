const socket = io();

// DOM
let message = document.getElementById('message');
let btn = document.getElementById('send');
let output = document.getElementById('output');

let username = prompt('Nickname');

while ((username.length > 16) || (username.length < 1)){
    username = prompt('Nickname inválido, otra vez');
}

function sendMessage(){
    if(message.value != ''){
        let date = new Date();
        socket.emit('chat:message', {
            username: username,
            message: message.value,
            date:{
                hours:date.getHours(),
                minutes:date.getMinutes()
            }
        });
    };
};

btn.addEventListener('click', function(){
    sendMessage()
});
message.addEventListener('keypress', function(e){
    if(e.keyCode==13){
        sendMessage()
        message.value=''
    }
})

socket.on('chat:message', (data) => {
    message.value = '';
    let hours = data.date.hours.toString();
    let minutes = data.date.minutes.toString();
    
    output.innerHTML += `
    <div class="message-bubble">
        <div><span class="message-bubble__username">${data.username}</span><span class="message-bubble__time">${hours.padStart(2,'0')}:${minutes.padStart(2,'0')}<span></div>
        </p class="message-bubble__message">${data.message}</p>
    </div>`;
});