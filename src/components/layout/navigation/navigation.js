import React, {useEffect, useState} from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';
import Session from 'react-session-api';
import { FaBars } from 'react-icons/fa';
import { AiFillCloseSquare } from 'react-icons/ai';
import EventEmitter from '../../../utils/EventEmitter';

function Navigation() {
    const [icon, setIcon] = useState(false);
    const [nav, setNav] = useState(true);
    const [logged, setLogged] = useState(Session.get("username")?true:false);
    var [username, setUsername] = useState(Session.get("username")||null);
    var [userrole, setRole] = useState(Session.get("role")||null);
    

    const handleIcon = () => {setIcon(!icon)};

    const showNav = () => {
        if(window.innerWidth <= 1000) {
            setNav(false);
        } else {
            setNav(true);
        }
    }

    window.addEventListener('load', showNav);
    window.addEventListener('resize', showNav);

    const showLogPannel = () => {
        EventEmitter.emit("closePannel", {close:false});
    }



    useEffect(() => {
        const changeLog = () => {setLogged(!logged); setUsername(Session.get("username")); setRole(Session.get("role"));}
        const listner = EventEmitter.addListener("loginCompleted", changeLog);
        
        return () => {
            listner.remove();
        }
    });

    const showExtendedNav = () => {EventEmitter.emit("extendnav", {swipe: true})}

    const onLogout = () => {
        Session.clear();
        setUsername(null);
        setRole(null);
        setLogged(false);
    }

    return (
        <div>
            
            <nav className="navbar ct-navbar" id="top-navigation">
                <div className="ct-flex ct-navbar-inside ">
                    <div className="ct-navbar-header">
                        {/* <a className="ct-navbar-brand" href="#">Logo</a> */}
                        <Link to="/">
                            <img src="https://i.pinimg.com/originals/c2/61/eb/c261eb4f5b4d38cf4f320f9188430c41.png" alt="LOGO" height="40"/>
                        </Link>
                    </div>
                    <div className="ct-navbar-log">
                        <form>
                            <div class="ct-clip-btn">
                                <input type="text" placeholder="Type Item, Brand etc."/>
                                <a href="#" class="ct-btn-sm"><i class="fas fa-search"></i></a>
                            </div>
                        </form>
                    
                    </div>
                    <div className="ct-navbar-body">

                        {
                            nav? 
                                <>
                                <Link className="ct-main-link" to="/experts">Experts</Link>
                                <Link className="ct-main-link" to="/share">Discussion</Link>
                                <Link className="ct-main-link" to="#" onClick={showExtendedNav}>Other</Link>
                                <Link className="ct-main-link" to="/about">About Us</Link>
                                <Link className="ct-main-link" to="/contact">Contact Us</Link>
                                </>
                            :<></>
                        }
                        
                        
                    </div>
                    <div className="ct-navbar-log">
                        
                        {
                            nav?
                                <>
                                    {
                                        logged?
                                                <>
                                                    {/* <button className="btn ct-btn " onClick={onLogout}>LOGOUT</button> */}
                                                    <div className="ct-clip-btn">
                                                        <button className="btn ct-btn half-curved" ><Link to={`/profile?username=${username}&userrole=${userrole}`}>{username}</Link></button>
                                                        <a href="#" class="ct-btn-sm" onClick={onLogout}><i class="fas fa-search"></i></a>
                                                    </div>
                                                </>
                                            :
                                            
                                                <>
                                                    <button className="btn ct-btn " onClick={showLogPannel}>LOGIN</button>
                                                </>
                                    }
                                    
                                </>
                                :<></>
                        }
                    </div>
                    <div className="ct-navbar-bar">
                        {
                            !nav?
                                <>
                                    <div className="ct-main-link" onClick={handleIcon}>{icon?<FaBars />:<AiFillCloseSquare/>}</div>
                                </>
                                :<></>
                        }
                    </div>
                </div>

                {/* Mobile Navigation */}
                {
                    (!nav&&!icon)?
                    <>
                        <div className="ct-flex ct-navbar-mobile">
                                <div className="ct-main-link" to="#">
                                    <div className="ct-profile-container">

                                        <button className="btn ct-btn ">LOGIN</button> 
                                        <br></br>
                                        <button className="btn ct-btn ct-warning">Create Account</button>
                                        <br></br>
                                        
                                    </div>
                                </div>
                                <Link className="ct-main-link" to="/experts">Experts</Link>
                                <Link className="ct-main-link" to="/share">Discussion</Link>
                                <Link className="ct-main-link" to="#">Other</Link>
                                <Link className="ct-main-link" to="/about">About Us</Link>
                                <Link className="ct-main-link" to="/contact">Contact Us</Link>
                        </div>
                    </>
                    :<></>
                }
            </nav>

        </div>
    );
}

export default Navigation;
