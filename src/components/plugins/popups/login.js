import React, { useEffect, useState } from 'react';
import './popup.css';
import { AiFillCloseSquare } from 'react-icons/ai';
import Session from 'react-session-api';
import EventEmitter from '../../../utils/EventEmitter';
import patient_service from '../../../services/patient_service';
// import users_service from '../../../services/users_service';
import Register from './register';

function Login(props){

    var form_state = props.formSwap;

    // Form Values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const swapPannel = () => {
        EventEmitter.emit("swapPannel", {swap:true});
    }

    const closeLogPannel = () => {
        EventEmitter.emit("closePannel", {close:true});
        
    }

    const onLogin = async (username, pass) => {
        await patient_service.getUserByUsername(username, pass).then(result=>{
            console.log("USA - " + Session.get("username"));
        });
        
    }

    useEffect(() => {
        
        var listner = EventEmitter.addListener('loginCompleted', closeLogPannel);
        return () => {
            listner.remove();
        }
    })

    return (
            <div className="ct-popup-box">
                <div className="ct-close" onClick={closeLogPannel} ><AiFillCloseSquare/></div>
                
                {
                    form_state?
                        <>
                            <div className="ct-pupup-head text-center">

                                <h1 className="ct-font-secondary">LOGIN</h1>
                                <p>Some Description</p>

                                </div>

                                <div className="ct-popup-body text-left ct-flex">

                                <div className="form-col">
                                <form onSubmit={(event)=>{event.preventDefault(); onLogin(username, password);}}>
                                    <div class="form-group ">
                                        <label for="inputusername">Username</label>
                                        <input 
                                            onChange={(event)=>setUsername(event.target.value)}
                                            type="text" class="form-control" id="inputusername" placeholder="Enter Username"
                                        />
                                        <small id="emailHelp" className="form-text text-muted ct-font-secondary">Use Username that was given by you in Registration.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputpassword">Password</label>
                                        <input
                                            onChange={(event)=>setPassword(event.target.value)}
                                            type="password" class="form-control" id="inputpassword" placeholder="Enter Password"
                                        />
                                    </div>
                                    
                                    <div className="text-center">
                                    <button type="submit" class="btn ct-btn ct-success">Login</button>
                                    </div>
                                </form>
                                </div>

                                <div className="ct-flex-br">
                                |
                                </div>
                                        
                                        
                                <div className="form-col">
                                <h1 className="ct-font-secondary">Do You Know?</h1>
                                <p className="ct-font-secondary">Are you an institution looking to create a happier community? We have helped colleges, corporates, incubators, government bodies in building emotionally resilient communities of more than 2 million people.</p>
                                <p className="ct-font-secondary">Haven't got an <a href="#" onClick={swapPannel}>Account</a>?</p>
                                </div>



                            </div>
                        </>
                        :
                        <>
                            <div className="ct-pupup-head text-center">

                                <h1 className="ct-font-secondary">Choose Your Role</h1>
                                <p>Some Description</p>

                            </div>

                            <div className="ct-popup-body text-left ct-flex">

                                <Register/>

                            </div>
                            <div className="text-center">
                                <p className="ct-font-secondary">Hava an <a onClick={swapPannel}>Account</a>?</p>
                            </div>
                        </>
                }

            </div>
    ); 
}

export default Login;
