

const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));  // Correct setup for static files

io.on("connection", (socket) => {
    socket.on("send-location", function(data) {
        console.log("Client Connected")
        io.emit("receive-location", {id: socket.id, ...data });
    });

    /*socket.on("disconnect", function() {
        io.emit("user-disconnected", socket.id);
    });*/

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        io.emit("user-disconnected", socket.id);
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

// Function to find an available port
function findAvailablePort(startPort, callback) {
    const net = require("net");
    const server = net.createServer();
    server.listen(startPort, () => {
        server.once("close", () => {
            callback(startPort);
        });
        server.close();
    });
    server.on("error", () => {
        findAvailablePort(startPort + 1, callback);
    });
}

// Find an available port starting from 3000
findAvailablePort(3000, (port) => {
    server.listen(port, '0.0.0.0', () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});