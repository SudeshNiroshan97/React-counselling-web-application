import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Title from '../layout/title-container/title';

function Test(props){

    var {path, url} = useRouteMatch();

    return (
        <>
                <Title model={{ title: "Error Page", path: ["Site 01"] }}/>

                <div className="hr-spacer ct-cont-highlight2"></div>

                <div className="ct-row ct-cont-secondary">
                    <div className="text-center ct-flex ct-nowrap">
                        <h1 className="ct-font-sp ct-font-secondary">{props.error?props.error.status:"Page"} Error</h1>
                    </div>
                    <div className="ct-row-content text-center">
                        <h4 className="ct-font-secondary">{props.error?props.error.error:"Unknown Error has occured!"}</h4>
                    </div>
                </div>

                <div className="hr-spacer ct-cont-highlight2"></div>

                <div className="ct-row-content text-left">
                    <h1 className="ct-font-lg ct-font-primary text-left">More Information</h1>
                    <div className="hr-spacer"></div>
                    <p>REQUESTED URL : <b className="ct-font-special">{url}</b></p>
                    <p>{props.error?props.error.content:"Occured error is a uncategoried error and need to get expertise to resolve it."}</p>
                    <button className="btn ct-btn ct-alternate ct-tag">Submit error</button>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <h1 className="ct-font-lg ct-font-primary text-left">For More Help</h1>
                    <div className="hr-spacer"></div>
                    <p className="text-left">Contact our crew by using following contact information</p>
                    <span>HOTLINE - (+94) 72 534 7809</span>
                    <br></br>
                    <span>EMAIL - you3342.supper@gmail.com</span>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                </div>
        </>
    )
}

export default Test;
