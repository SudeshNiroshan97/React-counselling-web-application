import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Session from 'react-session-api';
import EventEmitter from '../../../utils/EventEmitter';
import Rate from '../star-rate/rate';
import expert_service from '../../../services/expert_service';
import './card.css';

const card_colors = ['ct-primary', 'ct-alternate', 'ct-success', 'ct-warning', 'ct-danger '];

const card_sizes = ['ct-btn-lg', 'ct-btn-sm'];

const card_mode = ['ct-btn', 'ct-clip-btn'];

export const CardSmart = (
    props

    // Expceted values []

) => {

    const name = props.model?props.model.title:"NO TITLE";
    const info = props.model?props.model.info:"NO DESCRIPTION";
    const price = props.model?props.model.price:0;
    const discount = props.model?props.model.discount:"NO DISCOUNT";

    const image = props.model.image;
    const url = props.settings.url;

    // const type = props.model.type=='clip'?true:false;
    

    // const size = props.model.btn_size=='large'?btn_sizes[0]:'';

    // const color = props.model.color=='primary'?btn_colors[0]:
    //                 props.model.color=='alternate'?btn_colors[1]:
    //                 props.model.color=='success'?btn_colors[2]:
    //                 props.model.color=='warning'?btn_colors[3]:
    //                 props.model.color=='danger'?btn_colors[4]:
    //                                '';
    
    // const classes = {
    //     type: true,
    //     size: true,
    //     color: true
    // };
    
    
    return (
        <>
            <div className="ct-card-item">
                <div className="ct-card-side">
                    <img src="https://www.freeiconspng.com/uploads/add-item-icon-orange-1.png" alt="IMG" />
                </div>
                <div className="ct-card-side">
                    <div className="ct-card-head">
                        <h4 className="ct-font-lg">{name}</h4>
                        <small>Tag Line</small>
                        <div className="hr-spacer"></div>
                        <div className="hr-spacer"></div>
                    </div>
                    <div className="ct-card-body">
                        <p>{info}</p>
                        <div className="text-center">
                            <h4 className="ct-font-lg">Rs.{price}/=</h4><span>{discount}</span>
                            <button className="btn ct-btn ct-success">Buy</button>
                            <button className="btn ct-btn ct-primary">More</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );


}

export const CardSpecial = (props) => {

    const title = props.model.title?props.model.title:"No Title";
    const content = props.model.content?props.model.content: "No Content";//<i class="fas fa-info-circle"></i>
    const icon = props.model.icon?props.model.icon:"fas fa-info-circle";
    // const url = props.model.url? props.model.url: "/";

    const theme = "";

    const event_type = props.model.url? props.model.url: null;;


    return (
        <>
                    <div className="ct-card-special">
                        <div className="ct-profile-im" onClick={()=>{EventEmitter.emit(event_type, {event: true})}}><i class={`${icon}`}></i></div>
                        <div className="ct-cardsp-body text-center">
                            <h4 className="ct-font-secondary">{title}</h4>
                            <p className="ct-font-secondary">{content}</p>
                        </div>
                    </div>
        </>
    );

}

export const CardProfile = (props) => {
    const title = props.model.name?props.model.name:"No Title";
    const uname = props.model.username?props.model.username:"unidentified";
    const content = props.model.content?props.model.content: "Approved member of this service and verfied by Psycologists Union of Sri Lanka";//<i class="fas fa-info-circle"></i>
    const icon = props.model.icon?props.model.icon:"fas fa-info-circle";
    const role =  props.model.profession?props.model.profession:"Not Mentioned";
    const url = props.model.url? props.model.url: "/profile?username="+uname+"&userrole=Expert"; 

    const category = props.model.category?props.model.category:"Not Mentioned";

    // Schedules
    const week_start = props.model.available?props.model.available.week.start:null;
    const week_end = props.model.available?props.model.available.week.end:null;

    const weekend_start = props.model.available?props.model.available.weekend.start:null;
    const weekend_end = props.model.available?props.model.available.weekend.end:null;

    const theme = "";

    var [ratedata, setRateData] = useState({score:0, rate:0});

    useEffect(() => {
        const getInfo = async () => {
            setRateData(await expert_service.getRateExpert(uname));
        }
        getInfo();
    }, [])

    return (
        <>
                    <div className="ct-card-special ct-card-profile">
                        <Link to={url}><div className="ct-profile-im"><i class="fas fa-user-md"></i></div></Link>
                        <div className="ct-cardsp-body text-center">
                            <h4 className="ct-font-secondary">{title}</h4>
                            <small className="ct-simple-tag">{role}</small><br></br>
                            <p className="ct-font-secondary">{content}</p>

                            <div className="hr-spacer"></div>

                            <small className="ct-font-secondary">Specialized For </small> <span className="ct-simple-tag">{category}</span> 

                            <div className="hr-spacer"></div>

                            <small className="ct-font-secondary">Available on Week Days</small>
                            {
                                week_start?<><p className="ct-font-secondary">{week_start} to {week_end}</p></>:<><p className="ct-font-secondary">NOT MENTIONED</p></>
                            }

                            <small className="ct-font-secondary">Available on Weekend Days</small>
                            {
                                weekend_start?<><p className="ct-font-secondary">{weekend_start} to {weekend_end}</p></>:<><p className="ct-font-secondary">NOT MENTIONED</p></>
                            }

                            <br></br>

                            <div className="text-center rate-panel">
                                <Rate user={uname} rate={ratedata}/>
                            </div>

                            <Link to={`/share/video?receiver=${uname}`}><button className="btn ct-btn " onClick={(event)=>{if(!Session.get('username')){event.preventDefault(); alert("First Log into system in order to proceed.")}}}>Video Message</button></Link>
                            <Link to={`/experts/appointment?expert=${uname}`}><button className="btn ct-btn ct-success" onClick={(event)=>{if(!Session.get('username')){event.preventDefault(); alert("First Log into system in order to proceed.")}}}>For appointment</button></Link>
                        </div>
                    </div>
        </>
    );
}

export const CardArticle = (props) => {
    const title = props.model.title?props.model.title:"No Title";
    const content = props.model.content?props.model.content: "No Content";//<i class="fas fa-info-circle"></i>
    const icon = props.model.icon?props.model.icon:"fas fa-info-circle";
    const url = props.model.url? props.model.url: "/";

    const role =  props.model.role?props.model.role:"Not Mentioned";

    const theme = "";

    return (
        <>
                    <div className="ct-card-normal ct-card-profile">
                        <div className="ct-card-img">
                            <img src={'assets/resources/images/background/bannerLI.jpg'} alt="im"/>
                        </div>
                        <div className="ct-cardsp-body-normal text-center">
                            <h4 className="ct-font-secondary">{title}</h4>
                            <small className="ct-simple-tag">{role}</small><br></br>
                            <p className="ct-font-secondary">{content}</p>

                            <div className="hr-spacer"></div>


                            <button className="btn ct-btn ">Read</button>
                        </div>
                    </div>
        </>
    );
}