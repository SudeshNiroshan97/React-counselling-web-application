import React from 'react';
// import { AiFillCloseSquare } from 'react-icons/ai';
import './popup.css';

function Tutorial(){

    const closePannel = () => {}

    return (
        <div className="ct-popup-box">
            {/* <div className="ct-close" onClick={closePannel} ><AiFillCloseSquare/></div> */}
            <div className="form-col">
            <div className="hr-spacer"></div>
            <div className="hr-spacer"></div>
            <video  controls>
                <source src={'assets/videos/sample.mp4'} type="video/mp4"/>
                {/* <source src="movie.ogg" type="video/ogg"> */}
                Your browser does not support the video tag.
            </video>
            <div className="text-center">
                <h1 className="ct-font-secondary">Watch Tutorial Video Before Start</h1>
            </div>
                
            </div>

        </div>
    );
}

export default Tutorial;
