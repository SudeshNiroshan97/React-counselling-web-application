import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import Dashboard from '../layout/dashboard/dashboard';
import Session from 'react-session-api';
import expert_service from '../../services/expert_service';
import patient_service from '../../services/patient_service';
import user_service from '../../services/users_service';
import Title from '../layout/title-container/title';
import Rate from '../plugins/star-rate/rate.js'

function Profile(){
    var {path, url} = useRouteMatch();
    const {username} = queryString.parse(window.location.search);
    const {userrole} = queryString.parse(window.location.search);
    var [user, setUser] = useState(username||null);
    var [role, setRole] = useState(userrole||null);
    var [info, setInfo] = useState(null);
    var [rate, setRate] = useState({score: 0, raters: 0});
    const [logged, setLogged] = useState(Session.get("username")===username?true:false);


    useEffect(() => {


        const getInfo = async () => {
            if(role === "Patient"){
                setInfo(await patient_service.getPatient(user));
                
            } else if(role === "Expert"){
                setInfo(await expert_service.getExpert(user));
                setRate(await expert_service.getRateExpert(user));
            } else if(role === "Administrator"){
                setInfo(await user_service.getAdmin(user));
            }
            
            
        }
        getInfo();
        console.log("LOGGED - "+ logged + " | Username - "+username);
        
        return () => {
        }
    }, []);

    return (
        <>
            <Title model={{ title: "Your Profile", path: ["Site 01"] }}/>

            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row ct-cont-secondary">

                <div className="hr-spacer"></div>
                <div className="hr-spacer"></div>
                <div className="hr-spacer"></div>
        
                <div className="ct-profile-intro">
                    <div className="intro-im">
                        <div className="ct-profile-im-default ct-im-scale-high"></div>
                    </div>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <div className="intro-desc">
                        <h1 className="ct-font-secondary">{info?info.name:"No Name"}</h1>
                        <span className="ct-font-secondary">{role}</span>
                        <br></br>
                        {
                            rate?
                                <>
                                {
                                    role==="Expert"?<Rate user={info?info.username:null} rate={rate?rate:null}/>:<></>
                                }

                                </>
                                :
                                <></>
                        }
                        
                        
                    </div>

                </div>
                <div className="hr-spacer"></div>
            </div>

            <div className="hr-spacer ct-cont-highlight2"></div>

            {
                info?<Dashboard userinfo={info} role={Session.get("role")} logged={logged}/>:<></>
            }
            
        </>
    );
}

export default Profile;