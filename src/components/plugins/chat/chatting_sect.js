import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
// import ScrollToBottom from 'react-scroll-to-bottom';
import './chat.css';
import { Link, useRouteMatch } from 'react-router-dom';

let socket;

export const ChatingSection = ({location}) => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    const {path, url} =  useRouteMatch();
   
    useEffect(()=>{
        const {username, room} = queryString.parse(location.search);
        setUsername(username);
        setRoom(room);

        socket = io(ENDPOINT);

        // socket.emit("join", {username, room}, ()=>{
        //     // alert("Got Error"+error);
        // });
        socket.emit("join", {username, room}, ({error})=>{
            alert("Got Error");
        });
       return () => {
           socket.emit("endit");
           socket.off();
       };
    }, [ENDPOINT, location.search]);

    useEffect(()=>{
        socket.on("message", (message)=>{
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message){
            socket.emit("sendMessage", message, () => setMessage(''));
        }
    }

    // console.log(message, messages);

    return (
        <>
            <div className="ct-chat-section">
                <div className="head">
                    <Link to={`${path}/doc?room=${room}`}><button className="btn ct-btn ct-primary">Create Doc</button></Link>
                </div>
                <div className="body">

                    {
                        messages.map((message, i)=>
                            <div key={i} className={`bubble-row ${message.user===username?'left':'right'}`}>
                                <div className={`ct-bubble ${message.user===username?'l-color':''}`}>
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className="editor">
                    <div>
                        <input type="text" placeholder="Type Message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            onKeyPress={(event) => event.key==='Enter'?sendMessage(event):null}
                        />
                    </div>
                    <div>
                        <button className="btn btn-sm">SEND</button>
                    </div>
                </div>
            </div>
        </>
    );
}
