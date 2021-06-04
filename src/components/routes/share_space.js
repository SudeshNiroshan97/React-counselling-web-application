import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch, Link, Redirect } from 'react-router-dom';
import Session from 'react-session-api';
import Title from '../layout/title-container/title';
import { ChatingSection } from '../plugins/chat/chatting_sect';
import { ChattingJoin } from '../plugins/chat/chatting-join';

// import PatientService from '../../services/patient_service';
import ExpertService from '../../services/expert_service';
import VideoChat from '../plugins/videochat/video-chat';
import EventEmitter from '../../utils/EventEmitter';
import TestForm from './forms/test-form';

function ShareSpace(){
    let {path, url} = useRouteMatch();
    
    var [experts, setExperts] = useState([]);
    var [logged, setLogged] = useState(Session.get("username")?true:false);

    useEffect(() => {
        const changeLog = () => {setLogged(!logged)}
        const listner = EventEmitter.addListener("loginCompleted", changeLog);
        
        return () => {
            listner.remove();
        }
    });

    // Use load Querries
    const loadAssets = async () => {
        setExperts(await ExpertService.getExperts());
        console.log("Loading!");
    }
    window.addEventListener('keypress', loadAssets);
    return (
        <>
            <Title model={{ title: "Share Space", path: ["Site 01"] }}/>
            
            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row ct-cont-secondary">
        
                <div className="ct-option-pannel text-center ct-flex ct-nowrap">
                    <div>
                        <h1 className="ct-font-secondary" >Choose any option</h1> 
                    </div>
                    <div>
                    <p className="ct-font-secondary">Are you an institution looking to<br></br> create a happier community?</p>

                    </div>
                    {
                        logged?
                            <>
                                <div>
                                    <div className="hr-spacer"></div>
                                    <i class="fas fa-comments ct-font-sp"></i><br></br>
                                    <h4 className="ct-font-secondary" >Normal Chat</h4> 
                                    <div className="hr-spacer"></div>
                                </div>
                                <div>
                                    <div className="hr-spacer"></div>
                                    <Link to={`${url}/video`}>
                                        <i class="fas fa-video ct-font-sp"></i><br></br>
                                        <h4 className="ct-font-secondary" >Video Chat</h4> 
                                    </Link>
                                    <div className="hr-spacer"></div>
                                </div>
                                <div>
                                    <div className="hr-spacer"></div>
                                    <Link to={`${url}/doc`}>
                                        <i class="fas fa-user-md ct-font-sp"></i><br></br>
                                        <h4 className="ct-font-secondary" >Other</h4> 
                                    </Link>
                                    <div className="hr-spacer"></div>
                                </div>

                            </>
                            :
                            <></>
                    }
                    
                    
                </div>
            </div>

            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-chat-area ">

                <div className="ct-chat-sidebar">
                    <div className="chat-options">
                        <div className="hr-spacer"></div>
                        <button className="btn ct-btn ct-alternate">Join Chat</button>
                        <div className="hr-spacer"></div>
                        <button className="btn ct-btn ct-alternate">Group Chat</button>
                    </div>

                    <div className="contact-box">

                        {
                            experts.length>0?experts.map(element=>{
                                return (
                                        <div className="item">
                                            <div className="contact-im">
                                                <Link to={url}><div className="ct-profile-im ct-neutral-im"><i class="fas fa-user-md"></i></div></Link>
                                            </div>
                                            <div className="contact-desc">
                                                <h4>{element.name} | <span>{element.profession}</span></h4>
                                                <p>Active</p>
                                            </div>
                                        </div>
                                )
                            }):<></>
                        }


                    </div>
                    
                </div>
                <div className="ct-chat">
                    <Switch>
                        <Route path={path} exact component={ChattingJoin}/>
                        <Route path={`${path}/chat`} exact component={ChatingSection}/>
                            {/* {Session.get('username')?<ChatingSection/>:<Redirect to={path}/>}
                        </Route> */}
                        <Route path={`${path}/video`} exact component={VideoChat}>
                            {Session.get('username')?<VideoChat/>:<Redirect to={path}/>}
                        </Route>
                        <Route path={`${path}/chat/doc`} exact >
                            {Session.get('username')?<TestForm/>:<Redirect to={path}/>}
                        </Route>
                    </Switch>
                </div>
                
            </div>
        </>
    )
}

export default ShareSpace;
