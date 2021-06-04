import React, { useEffect, useRef, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import appointment_service from '../../../services/appointment_service';
import Session from 'react-session-api';
import './chat.css';
import EventEmitter from '../../../utils/EventEmitter';

export const ChattingJoin = () => {

    const getTime24 = (Date) => {
        var hours = Date.getHours();
        var mins = Date.getMinutes();

        if(mins<10) mins = '0'+mins;

        var timenow = hours + ':' + mins;
        return timenow;
    }

    const [username, setUsername] = useState(Session.get("username")||null);
    const [room, setRoom] = useState('');
    const [appointments, setAppointments] = useState([]);

    var [timenow, setTimeNow] = useState(getTime24(new Date()));

    let {path, url} = useRouteMatch();

    const logged = Session.get("username")?true: false;

    const handleUsername = () => {
        setUsername(Session.get("username"));
        console.log("Username - " + username);
    }

    

    const initialRender = useRef(true);
    useEffect(() => {
        const loadAppointments = async () => {
            setAppointments(await appointment_service.getAppointOrderByDate(username));
        } 
        const listner = EventEmitter.addListener("loginCompleted", loadAppointments);
        
        if(initialRender.current){
            loadAppointments();
        }
        
        return () => {
            listner.remove();
        }
    })

    

    return (
        <>
            <div className="ct-chat-section">
                        <div className="text-center">
                            <h4 className="ct-font-secondary ct-font-sp">Join Chat</h4>
                        </div>
                        <div className="text-left ct-flex">

                                <div className="form-col">

                                {
                                    logged?
                                            <>
                                                <div className="text-center">
                                                    <h1 className="ct-font-secondary">Welcome {Session.get("username")}!</h1>
                                                    <small>Select your chat Room</small><br></br>
                                                </div>

                                                <div class="form-group ">
                                                    <input type="hidden" name="username" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username" value={Session.get("username")}/>                    
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Room Number</label>
                                                    <input type="text" name="room" class="form-control" id="exampleInputPassword1" placeholder="Room" onChange={(event) => setRoom(event.target.value)}/>
                                                </div>
                                                
                                                <div className="text-center">
                                                    <Link to={`${path}/chat?username=${Session.get("username")}&room=${room}`} onClick={(event)=>(!Session.get("username")||!room)?event.preventDefault():null} >
                                                        <button type="submit" class="btn ct-btn ct-success" >Join Chat</button>
                                                    </Link>
                                                </div>
                                            </>
                                        :
                                            <>
                                                <div class="text-center">
                                                    <h1 className="ct-font-secondary">Need to LOG before Chat</h1>
                                                    <p className="ct-font-secondary">Select your chat Room</p><br></br>
                                                    <button class="btn ct-btn ct-warning" >Login</button>
                                                </div>
                                            </>
                                }
                                

                                
                                
                                </div>

                                <div className="ct-flex-br">
                                |
                                </div>
                                        
                                        
                                <div className="form-col">
                                <h1 className="ct-font-secondary">Do You Know?</h1>
                                <p className="ct-font-secondary">Are you an institution looking to create a happier community? We have helped colleges, corporates, incubators, government bodies in building emotionally resilient communities of more than 2 million people.</p>
                                <div>
                                <h1 className="ct-font-secondary">Recent Appointments
                                </h1>
                                    {
                                        appointments.length > 0?appointments.map(element => (
                                            <div className="ct-btn-box ct-flex">
                                                <h4 className="ct-font-secondary">{element.expert}</h4>
                                                <div className="text-center">
                                                    <small className="ct-font-secondary">Now</small> <span className="ct-font-secondary">{timenow} / </span>
                                                    <small className="ct-font-secondary">{element.time}</small>
                                                    <br></br>
                                                    <small className="ct-font-secondary">{element.date}</small>
                                                </div>

                                                <Link to={`${path}/chat?username=${Session.get("username")}&room=${element.id}`} onClick={(event)=>(!Session.get("username")||!element.id)?event.preventDefault():null} >
                                                    <button className="btn ct-btn ct-success ct-tag">Join</button>
                                                </Link>
                                                
                                                
                                            </div>
                                        )):<></>
                                    }
                                    
                                </div>
                                </div>



                        </div>
            </div>
        </>
    );
}