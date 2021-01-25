const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get('/', (req, res) => {
    res.end('start');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("bg-color", (bgColor) => {
        console.log(b);
        socket.broadcast.emit("changed-bg-color", bgColor);
    });

    socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(4000, () => {
    console.log('listening on *:4000');
});