const express = require('express');
const bp = require('body-parser');
const http = require('http');

// ENVIRONMENT SETUP
require('dotenv').config();
if(require('dotenv').config().error){consol.log("Environment Varaible Error Occured")}

const { addUser, getUsersInRoom, getUser, removeUser } = require('./opperations/chat/chat');


const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

//BODY PARSER
app.use(bp.json());

//BODY PARSER
app.use(bp.urlencoded({extended: true}));

// ROUTING
require('./router')(app);
// const router = require('./router');
// app.use(router);

// SOCKET.IO
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
});

io.on("connection", (socket)=>{
    socket.on("join", ({username, room}, callback)=>{

        // Initiation
        const {error, user} = addUser({id:socket.id, username, room}); 

        // const error = true;
        // Error Handling
        if(error){
            return callback(error);
        }

        socket.emit("message", {user: "system", text: `${user.username}, Welcome to the Chat Room ${user.room}`});
        socket.broadcast.to(user.room).emit("message", {user: "system", text: `${username} has joined`});

        socket.join(user.room);

        callback();

    });

    socket.on("sendMessage", (messeage, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("message", {user: user.username, text: messeage });

        callback();
    })

    socket.on("endit", ()=>{
        console.log("User left!");
    });

    // Video Call
    socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

    socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
});



server.listen(PORT, () => {console.log("Server is running on "+ PORT)});