import React from 'react';
import { about_content } from '../../values/content';
import Title from '../layout/title-container/title';
import { ContainerSelector } from '../plugins/containers/container-smart';

function About(){
    return (
        <>
            <Title model={{ title: "About us", path: ["Site 01"] }}/>
            
            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row ct-cont-secondary">
        
                <div className="text-center ct-flex ct-nowrap">
                    <h1 className="ct-font-sp ct-font-secondary">About Us</h1>
                </div>

                <div className="ct-row-content text-left">
                    <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    </p>

                    <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    </p>

                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                </div>

                <div>
                    <button className="btn ct-btn">ENTER CREDENTIALS</button>
                    <button className="btn ct-btn ct-primary">ENTER CREDENTIALS</button>
                    <button className="btn ct-btn ct-alternate">ENTER CREDENTIALS</button>
                    <button className="btn ct-btn ct-success">ENTER CREDENTIALS</button>
                    <button className="btn ct-btn ct-warning">ENTER CREDENTIALS</button>
                    <button className="btn ct-btn ct-danger">ENTER CREDENTIALS</button>
                </div>

                <div className="hr-spacer"></div>
            </div>

            <div className="hr-spacer ct-cont-highlight2"></div>

            {/* <ContainerSmart/> */}

            {
               about_content.map(element => <div><ContainerSelector content={element}/></div>)
            }

            {/* <ContainerSmart content={about_content}/> */}
        </>
    );
}

export default About;