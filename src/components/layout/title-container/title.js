import React from 'react';
import './title.css';

function Title(props) {

    const title = props.model?props.model.title:"No Title";
    return (
        <>
            <div className="container-title">
                <button className="btn ct-btn">Back</button> <span className="ct-braker">|</span>    <span>{title}</span>
            </div>

        </>
        
    );
}

export default Title;
