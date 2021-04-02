module.exports = function (io){
    io.on('connection', (socket) => {
        console.log('new connection', socket.id);
    
        socket.on('chat:message', (data) => {
            console.log(data)
            io.sockets.emit('chat:message', data);
        });
    });
}
