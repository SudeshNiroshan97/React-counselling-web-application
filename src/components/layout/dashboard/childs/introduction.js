import React from 'react';
import { Route, Switch, useRouteMatch, Link, Redirect } from 'react-router-dom';
import '../dashboard.css';
import History from './children/history';
import Medical from './children/medical';
import Appointments from './children/appointments';
import Options from './children/options';



function Introduction(props){
    let {path, url} = useRouteMatch();

    return (
        <>
            <div className="ct-tabview">
                <div>
                    <div className="tab-nav">
                        <div><Link to={path}><h4 className="ct-font-secondary">Medical</h4></Link></div>
                        {/* <div><Link to={`${path}/history`}><h4 className="ct-font-secondary">User History</h4></Link></div> */}
                        {
                            props.role === "Administrator"?<div><Link to={`${path}/history`}><h4 className="ct-font-secondary">Users</h4></Link></div>:<></>
                        }
                        {
                            props.logged?<div><Link to={`${path}/appointments`}><h4 className="ct-font-secondary">Appointments</h4></Link></div>:<></>
                        }
                        
                        <div><Link to={`${path}/options`}><h4 className="ct-font-secondary">Options</h4></Link></div>
                    </div>
                    <div></div>
                </div>
                <div className="tab-content text-left">

                    <Switch>
                        <Route path={path} exact component={Medical}/>
                        <Route path={`${path}/history`} exact>{props.role==="Administrator"?<History/>:<Redirect to={path}/>}</Route>
                        <Route path={`${path}/appointments`} exact >{props.logged?<Appointments />:<Redirect to={path}/>}</Route>
                        <Route path={`${path}/options`} exact component={()=><Options logged={props.logged} userinfo={props.userinfo} role={props.role}/>}/>
                    </Switch>
                    {/* <History/> */}
                    
                </div>
            </div>
            
        </>
    )
}

export default Introduction;