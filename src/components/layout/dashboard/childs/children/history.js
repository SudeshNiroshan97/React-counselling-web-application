import React, { useEffect, useState } from 'react';
import '../../dashboard.css';

import patient_service from '../../../../../services/patient_service';
import expert_service from '../../../../../services/expert_service';

function History(){
    var [patients, setPatients] = useState([]);
    var [experts, setExperts] = useState([]);


    useEffect(() => {
        const loadAssets = async () => {
            setPatients(await patient_service.getPatients());
            setExperts(await expert_service.getExperts());
        }
        loadAssets();
    })

    return (
        <>
                    <h2 className="ct-font-secondary ct-font-lg">REGISTERED PATIENTS</h2>
                    <p className="ct-font-secondary">All patients'details </p>
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">User_ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th scope="col">Accept</th>
                        <th scope="col">Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            patients.length>0?
                                
                            patients.map(element=>
                                <>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>{element.name}</td>
                                    <td>{element.username}</td>
                                    <td>{element.contact}</td>
                                    <td>{element.email}</td>
                                    <td><button className="btn ct-btn ct-success" onClick={()=>{patient_service.updatePatient(element.username, {state:"Approved"})}}>Accept</button></td>
                                    <td><button className="btn ct-btn ct-danger" onClick={()=>{patient_service.deletePatient(element.username)}}>Decline</button></td>
                                    </tr>
                        
                                </>
                            ):<></>
                        }

                        
                    </tbody>
                    </table>
                    <br></br>


                    <h2 className="ct-font-secondary ct-font-lg">REGISTERED Experts</h2>
                    <p className="ct-font-secondary">All Experts'details </p>
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">User_ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th scope="col">Accept</th>
                        <th scope="col">Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            experts.length>0?
                                
                            experts.map(element=>
                                <>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>{element.name}</td>
                                    <td>{element.username}</td>
                                    <td>{element.contact}</td>
                                    <td>{element.email}</td>
                                    <td><button className="btn ct-btn ct-success" onClick={()=>{expert_service.updateExpert(element.username, {state:"Approved"})}}>Accept</button></td>
                                    <td><button className="btn ct-btn ct-danger" onClick={()=>{expert_service.deleteExpert(element.username)}}>Decline</button></td>
                                    </tr>
                        
                                </>
                            ):<></>
                        }

                        
                    </tbody>
                    </table>
            
        </>
    )
}

export default History;