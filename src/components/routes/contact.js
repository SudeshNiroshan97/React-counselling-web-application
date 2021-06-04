import React from 'react';
import { contact_content } from '../../values/content';
import Title from '../layout/title-container/title';
import { ContainerSelector } from '../plugins/containers/container-smart';

function Contact(){
    return (
        <>
            <Title model={{ title: "Contact us", path: ["Site 01"] }}/>
            
            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row ct-cont-secondary">
        
                <div className="text-center ct-flex ct-nowrap">
                    <h1 className="ct-font-sp ct-font-secondary">Contact Us</h1>
                </div>

                <div className="ct-row-content text-left">
                    <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    </p>

                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                </div>

                <div className="hr-spacer"></div>
            </div>
            <div className="hr-spacer ct-cont-highlight2"></div>

            {
            contact_content.map(element => <div><ContainerSelector content={element}/></div>)
            }

            
        </>
    );
}

export default Contact;