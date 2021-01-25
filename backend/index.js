const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get('/', (req, res) => {
    res.end('start');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("bg-color", (bgColor) => {
        socket.broadcast.emit("changed-bg-color", bgColor);
    });

    socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT || 3000, () => {
    console.log('listening...');
});