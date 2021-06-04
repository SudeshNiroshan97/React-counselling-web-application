import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import Title from '../../layout/title-container/title';
import { CalendarSmart } from '../../plugins/calendar/calendar';
import Session from 'react-session-api';
import Appointment from '../../../models/Appointment';
import appointment_service from '../../../services/appointment_service';



function  AppointmentExpert() {

    let {path, url} = useRouteMatch();
    const history = useHistory();

    const [user, setUsername] = useState(Session.get("username")?Session.get("username"):null);
    const [appointedExpert, setAppointedExpert] = useState();
    const [email, setEmail] = useState('');
    const [brief, setBrief] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    

    useEffect(() => {
        const {expert} = queryString.parse(window.location.search);
        setAppointedExpert(expert);
        return () => {
            
        }
    })

    const submitAppointment = () => {
        console.log("Action Triggered");
        var appointment = new Appointment(
            user, appointedExpert,date, time, email, brief, 'not approved'
        );
        console.log("Quey Sended");

        appointment_service.addAppointment(appointment);
        history.push("/experts/appointment/payment");
    }

    return (
        <>
            <Title model={{ title: "Appointment", path: ["Site 01"] }}/>
            
            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row ct-cont-secondary">
        
                <div className="text-center ct-flex ct-nowrap">
                    <h1 className="ct-font-sp ct-font-secondary">Appointment Form</h1>
                </div>

                <div className="ct-row-content text-left">
                    <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    </p>
                </div>

                <div className="hr-spacer"></div>
                <div className="hr-spacer"></div>
                <div className="ct-card-container">

                    <div className="ct-card-instruction">
                        <div>
                            <h1 className="ct-font-sp">1</h1>
                            <i class="fas fa-search"></i>
                        </div>
                        <div>
                            <h4 className="ct-font-lg">Fill inform</h4>
                            <p>Use given form to fill necessary information.</p>
                        </div>
                    </div>

                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>

                    <div className="ct-card-instruction">
                        <div>
                            <h1 className="ct-font-sp">2</h1>
                            <i class="fas fa-search"></i>
                        </div>
                        <div>
                            <h4 className="ct-font-lg">Select a Date</h4>
                            <p>Use given calendar to select a Date.</p>
                        </div>
                    </div>
                </div>

                <div className="hr-spacer"></div>
                <div className="hr-spacer"></div>
            </div>

            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row-content">
                <div className="ct-col">
                    
                    <div>
                        <div><h4 className="ct-font-lg ct-font-primary">Contact Us</h4></div>
                        <div><p className="ct-font-secondary">Share you ideas and help us to improve.</p></div>
                        <div><input type="email" placeholder="Type Active alternative Email" className="form-control"onChange={(event)=>setEmail(event.target.value)}/></div>
                        {/* <input type="hidden" value={appointedExpert}/> */}
                        <br></br>
                        <div><input 
                            type="date" placeholder="SelectDate" className="form-control" onChange={(event)=>setDate(event.target.value)}/></div>
                        <br></br>
                        <div><input 
                            type="time" placeholder="Select Your Time" className="form-control" onChange={(event)=>setTime(event.target.value)}/></div>
                        <br></br>
                        <div><textarea 
                            rows="10" type="email" placeholder="Share Your Information relating to your matter." className="form-control" onChange={(event)=>setBrief(event.target.value)}></textarea></div>
                        <br></br>
                        
                        <button className="btn ct-btn ct-alternate" onClick={submitAppointment}>Submit</button>
                    </div>
                    <div>

                        <CalendarSmart/>
                        

                    </div>
                </div>
            </div>

        </>
    );
}

export default AppointmentExpert;