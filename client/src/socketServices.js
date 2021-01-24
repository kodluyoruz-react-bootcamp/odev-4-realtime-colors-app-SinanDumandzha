import io from "socket.io-client";

let socket;

export const initSocket = () => {
    socket = io("http://localhost:4000", {
        transports: ["websocket"]
    });

    console.log("Connecting...");

    socket.on("connect", () => console.log("Connected!"));
};

export const disconnectSocket = () => {
    console.log("Disconnecting...");
    if (socket) socket.disconnect();
};

export const setBgColor = (bgColor) => {
    if (socket) socket.emit("bg-color", bgColor);
};

export const subscribeToBgColor = (cb) => {
    if (!socket) return true;

    socket.on("changed-bg-color", (bgColor) => {
        console.log("Background color changed to: ", bgColor);
        cb(bgColor);
    });
};