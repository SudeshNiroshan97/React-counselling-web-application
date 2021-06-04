import React from 'react';
import  { Redirect } from 'react-router-dom';
import Test from '../components/routes/test';


export const handleErrors = (error) =>{
    // console.log(error);
    alert(error);
    // return (<Redirect to="/error"/>)
    // return <Redirect path={Test} to="*"/>
}


// RESPONSE CHECK
// if(!res.ok){throw new Error("Message")}
