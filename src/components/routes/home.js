import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import EventEmitter from '../../utils/EventEmitter';
import { home_content } from '../../values/content';
import Slider from '../layout/slider-container/slider';
import { ContainerSelector } from '../plugins/containers/container-smart';
import Tutorial from '../plugins/popups/tutorial';

function Home(){
    // window.addEventListener('load', patient_service.getPatients());
    
    // Main Button Triggers
    var [tutorial, setTutorial] = useState(false);

    useEffect(() => {
        const showVideo = () => {
            setTutorial(!tutorial);
        }
        var listner = EventEmitter.addListener("Tutorial", showVideo); 
        return () => {
            listner.remove();
        }
    })
    return (
        <>
        <Slider/>

        {
            tutorial?<Tutorial/>:<></>
        }
        

        <div className="hr-spacer ct-cont-highlight"></div>
        <div className="hr-spacer ct-cont-highlight2"></div>

        <div className="ct-row-content ct-cont-secondary" id="Instructions">
            <div className="ct-row">
                <div className="text-center">
                    <h1 className="ct-font-sp ct-font-primary">Mental Health need to be</h1>
                    <h1 className="ct-font-em ct-font-secondary ct-less-height">PREVAILED</h1>
                </div>
            </div>

            <div className="hr-spacer"></div>
            <div className="hr-spacer"></div>
            <div className="hr-spacer"></div>

            <div className="ct-row-content">
                <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                </p>

                <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                </p>

                <div className="container-img"  style={{width: '60%'}}></div>

                <div className="hr-spacer"></div>

                <div className="ct-row">
                    <div className="text-center">
                        <h1 className="ct-font-sp ct-font-primary">3 Steps Process of Aidding</h1>
                    </div>

                    <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    </p>
                </div>

                <div className="ct-card-container">

                    {
                        home_content.map(element => 
                            <div>
                                <div className="ct-card-instruction">
                                    <div>
                                        <Link to={element.title} smooth={true} duration={1000}>
                                        <h1 className="ct-font-sp">{element.id}</h1>
                                        <i class="fas fa-search"></i>
                                        </Link>
                                        
                                        
                                    </div>
                                    <div>
                                        <h4 className="ct-font-lg">{element.subtitle}</h4>
                                        <p >This is some Instructions.</p>
                                    </div>
                                </div>
                                <div className="hr-spacer"></div>
                                <div className="hr-spacer"></div>
                            </div>

                            
                        )
                    }

                    

                </div>
            </div>

            <div className="hr-spacer"></div>
            <div className="hr-spacer"></div>
            <div className="hr-spacer"></div>
        </div>

        

        <div className="hr-spacer ct-cont-highlight2"></div>

        {
            home_content.map(element => <div><ContainerSelector content={element}/></div>)
        }


        {/* <ContainerSmartList/> */}
        
        </>
    );
}

export default Home;
