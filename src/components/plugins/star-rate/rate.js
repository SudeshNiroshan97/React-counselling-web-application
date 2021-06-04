import React, { useEffect, useState } from 'react';
import expert_service from '../../../services/expert_service';
import Session from 'react-session-api';
import './rate.css';

function Rate(props){
    var [starclass, setStarClass] = useState("far fa-star"); //"far fa-star" - "fas fa-star"""

    var [st1, setSt1] = useState(false);
    var [st2, setSt2] = useState(false);
    var [st3, setSt3] = useState(false);
    var [st4, setSt4] = useState(false);
    var [st5, setSt5] = useState(false);

    var [rate, setRate] = useState(Math.round(Math.round(100*props.rate.score/props.rate.raters)/100));

    const transition = (style) => {
        setStarClass(style);
    }

    const onSubmitRate = (event) => {
        if(!Session.get('username')){
            event.preventDefault(); 
            alert("First Log into system in order to proceed.");
        } else {
            expert_service.rateExpert(props.user, rate);
        }
        
    }

    const rateCal = (val) => {
        if(val==="1"){setSt1(true); setSt2(false); setSt3(false); setSt4(false); setSt5(false); setRate(1)}
        if(val==="2"){setSt1(true); setSt2(true); setSt3(false); setSt4(false); setSt5(false); setRate(2)}
        if(val==="3"){setSt1(true); setSt2(true); setSt3(true); setSt4(false); setSt5(false); setRate(3)}
        if(val==="4"){setSt1(true); setSt2(true); setSt3(true); setSt4(true); setSt5(false); setRate(4)}
        if(val==="5"){setSt1(true); setSt2(true); setSt3(true); setSt4(true); setSt5(true); setRate(5)}

    }

    useEffect(() => {
        const loadRate = async () => {
            console.log(props);
            setRate(Math.round(100*props.rate.score/props.rate.raters)/100);
            rateCal(Math.round(Math.round(100*props.rate.score/props.rate.raters)/100).toString());
        }
        // rateCal("2");
        // window.addEventListener('load', rateCal(Math.round(Math.round(100*props.rate.score/props.rate.raters)/100).toString()));
        // window.addEventListener('load', rateCal((props.rate.score/props.rate.raters).toString()));
        loadRate();
        

    }, [])
    return (
        <>

                        <div className="rate-num">
                            <span className="ct-font-sp">{Math.round(100*props.rate.score/props.rate.raters)/100||0}</span><span className="ct-font-md">| {props.rate.raters} VOTES</span>
                        </div>
                        <div className="text-center rate-panel">
                            <i className={st1?"fas fa-star":"far fa-star"} id="1"  onClick={(e)=>{rateCal(e.target.id)}}></i>
                            <i className={st2?"fas fa-star":"far fa-star"} id="2"  onClick={(e)=>{rateCal(e.target.id)}}></i>
                            <i className={st3?"fas fa-star":"far fa-star"} id="3"  onClick={(e)=>{rateCal(e.target.id)}}></i>
                            <i className={st4?"fas fa-star":"far fa-star"} id="4"  onClick={(e)=>{rateCal(e.target.id)}}></i>
                            <i className={st5?"fas fa-star":"far fa-star"} id="5"  onClick={(e)=>{rateCal(e.target.id)}}></i>
                        </div>
                        <button className="btn ct-btn ct-primary" onClick={(event)=>{onSubmitRate(event)}}>Rate</button>

        </>
    )
}

export default Rate;