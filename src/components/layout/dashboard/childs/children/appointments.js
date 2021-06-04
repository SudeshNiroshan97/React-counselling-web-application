import React, { useEffect, useState } from 'react';
import patient_service from '../../../../../services/appointment_service';
import Session from 'react-session-api';
import '../../dashboard.css';

function Appointments(){
    var [appointments, setAppointments] = useState([]);
    

    useEffect(() => {
        const loadAppointments = async (user) => {
            if(Session.get('role')==="Expert"){
                setAppointments(await patient_service.getAppointByExpert(user));
            } else {
                setAppointments(await patient_service.getAppointByPatient(user));
            }
            
        } 
        loadAppointments(Session.get('username'));
        return () => {
        }
    })

    const removeAppointment = (id) => {
        patient_service.deleteAppointment(id);
    }

    const manageAppointments = (appointments, category) => {
        return (
            <>
            {
                appointments.map(element => {
                                <>
                                    <tr><td colSpan={6}>{element.category}</td></tr>
                                    {
                                        element.category == category?
                                        <>
                                            <tr>
                                            <th scope="row">{element.id}</th>
                                            <td>{element.expert}</td>
                                            <td>{element.brief}</td>
                                            <td>{element.date}</td>
                                            <td>{element.time}</td>
                                            <td><button className="btn ct-btn ct-danger" onClick={()=>{removeAppointment(element.id)}}>Decline</button></td>
                                            </tr>

                                        </>
                                        :<></>
                                    }
                                    
                        
                                </>
                })
            }
            </>
        );
        
    }
    return (
        <>
                    <h2 className="ct-font-secondary ct-font-lg">APPOINTMENTS</h2>
                    <p className="ct-font-secondary">All patients'details </p>
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Doctor / Phychologist</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            appointments.length>0?
                                
                            appointments.map(element=>
                                <>
                                    <tr>
                                    <th scope="row">{element.id}</th>
                                    <td>{element.expert}</td>
                                    <td>{element.state}</td>
                                    <td>{element.date}</td>
                                    <td>{element.time}</td>
                                    <td><button className="btn ct-btn ct-danger" onClick={()=>{removeAppointment(element.id)}}>Decline</button></td>
                                    </tr>
                        
                                </>
                            ):<></>
                        }

                        
                    </tbody>
                    </table>
            
        </>
    )
}

export default Appointments;