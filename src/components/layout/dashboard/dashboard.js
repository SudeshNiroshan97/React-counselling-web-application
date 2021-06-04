import React, { useEffect, useState } from 'react';
import Introduction from './childs/introduction';
import expert_service from '../../../services/expert_service';
import './dashboard.css';

function Dashboard(props){

    
    var [ weekst, setWeekSt ] = useState(null);
    var [ weeken, setWeekEn ] = useState(null);
    var [ weenst, setWeenSt ] = useState(null);
    var [ weenen, setWeenEn ] = useState(null);    
    
    const onUpdateTime = (cat, value) => {
        expert_service.addAvailableTime(props.userinfo.username, cat, value)
    }

    useEffect(() => {
        const loadTimeInfo = async () => {
            setWeekSt(await expert_service.getAvailableTime(props.userinfo.username, 'week-start'));
            setWeekEn(await expert_service.getAvailableTime(props.userinfo.username, 'week-end'));
            setWeenSt(await expert_service.getAvailableTime(props.userinfo.username, 'weekend-start'));
            setWeenEn(await expert_service.getAvailableTime(props.userinfo.username, 'weekend-end'));
        }
        loadTimeInfo();
    }, []);

    return (
        <div className="container-dashboard ct-flex">
            <div className="side-panel">
                <div className="panel-head text-center">
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <i class="fas fa-user-md ct-font-em" style={{fontSize:35}}></i><br></br>
                    <small className="ct-font-secondary">DASHBAORD</small>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer ct-cont-highlight2"></div>
                    
                </div>
                <div className="panel-items">
                    <div className="item text-center">
                        <i class="fas fa-user-md ct-font-em"></i><br></br>
                        <small>[ITEM TITLE]</small>
                    </div>

                    <div className="item text-center">
                        <i class="fas fa-user-md ct-font-em"></i><br></br>
                        <small>[ITEM TITLE]</small>
                    </div>

                    <div className="item text-center">
                        <i class="fas fa-user-md ct-font-em"></i><br></br>
                        <small>[ITEM TITLE]</small>
                    </div>

                </div>
                <div className="panel-footer">

                </div>
            </div>
            <div className="main-container">
                <div className="intro ct-row-content text-left">
                    <h2 className="ct-font-primary ct-font-lg">Brief Introduction</h2>
                    <p className="ct-font-primary">Username     : {props.userinfo.name}</p>

                    {
                        props.role === "Patient"?<p className="ct-font-primary">Age          : {props.userinfo.age}</p>:<></>
                    }

                    {
                        props.role === "Expert"?
                            <>
                            <p className="ct-font-primary">Profession          : {props.userinfo.profession}</p>
                            <p className="ct-font-primary">Category          : {props.userinfo.category}</p>
                            </>
                            :<></>
                    }
                    <p className="ct-font-primary">Addresss     : {props.userinfo.address}</p>
                    <p className="ct-font-primary">Contact No.  : {props.userinfo.contact}</p>
                    
                    {
                        !props.logged||props.role==="Expert"?
                        
                        <>
                            <div><h4 className="ct-font-lg ct-font-primary">Define Schedule</h4></div>
                            <div><p className="ct-font-primary">Share your available time</p></div>
                            <div className="ct-flex">
                                <div className="ct-col">
                                    <div className="text-center">
                                        <h6 className="ct-font-md ct-font-primary">Week Days</h6>
                                        <br></br>
                                        {
                                            weekst&&weeken?<><h4>{weekst} <span  className="ct-font-md">to</span> {weeken}</h4></>:<></>
                                        }
                                        
                                    </div>
                                </div>
                                {
                                    props.role === "Expert" && props.logged ?

                                    <>
                                        <div className="ct-col">
                                            <div>
                                                <p className="ct-font-sm ct-font-primary">Start</p>
                                                <div className="ct-flex-row">
                                                    <input 
                                                    type="time" placeholder="Select Time" className="form-control" 
                                                    onChange={(event)=>setWeekSt(event.target.value)}/>
                                                    <a class="ct-btn-sm" onClick={()=>onUpdateTime('week-start', weekst)}>Up</a>
                                                </div>
                                                
                                                <p className="ct-font-sm ct-font-primary">End</p>
                                                <div className="ct-flex-row">
                                                    <input 
                                                    type="time" placeholder="Select Time" className="form-control" 
                                                    onChange={(event)=>setWeekEn(event.target.value)}/>
                                                    <a class="ct-btn-sm" onClick={()=>onUpdateTime('week-end', weeken)}>Up</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                    :<></>
                                }
                                
                                <div className="ct-col">
                                    <div className="text-center">
                                        <h6 className="ct-font-md ct-font-primary">Weekend Days</h6>
                                        <br></br>
                                        {
                                            weenst&&weeken?<><h4>{weenst} <span  className="ct-font-md">to</span> {weenen}</h4></>:<></>
                                        }
                                    </div>
                                </div>
                                {
                                    props.role === "Expert" && props.logged ?
                                    <>

                                    <div className="ct-col">
                                        <div>
                                            <p className="ct-font-sm ct-font-primary">Start</p>
                                            <div className="ct-flex-row">
                                                <input 
                                                type="time" placeholder="Select Time" className="form-control" 
                                                onChange={(event)=>setWeenSt(event.target.value)}/>
                                                <a class="ct-btn-sm" onClick={()=>onUpdateTime('weekend-start', weenst)}>Up</a>
                                            </div>
                                            
                                            <p className="ct-font-sm ct-font-primary">End</p>
                                            <div className="ct-flex-row">
                                                <input 
                                                type="time" placeholder="Select Time" className="form-control" 
                                                onChange={(event)=>setWeenEn(event.target.value)}/>
                                                <a class="ct-btn-sm" onClick={()=>onUpdateTime('weekend-end', weenen)}>Up</a>
                                            </div>
                                        </div>
                                    </div>

                                    </>
                                    :
                                    <></>
                                }
                                
                            </div>
                        
                        </>
                        
                        :<></>
                    }
                    
                </div>
                <div className="user-records ct-cont-secondary">
                    <Introduction role={props.role} userinfo={props.userinfo} logged={props.logged}/>
                </div>
                {/* <div className="user-history">


                </div> */}

                
            </div>
        </div>
    );
}

export default Dashboard;
