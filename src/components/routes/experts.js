import React, { useState } from 'react';
import Title from '../layout/title-container/title';
import { CardProfile } from '../plugins/cards/card-smart';

import expert_service from '../../services/expert_service'

function Experts(){
    var [experts, setExperts] = useState([]);

    // Use load Querries
    const loadAssets = async () => {
        setExperts(await expert_service.getExperts());
        console.log("Loading!");
    }
    const loadAssetsByCat = async (category) => {
        setExperts(await expert_service.getExpertsByCategory(category));
        console.log("Loading!");
    }
    window.addEventListener('load', loadAssets);
    return (
        <>
            <Title model={{ title: "Experts", path: ["Site 01"] }}/>
            
            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row ct-cont-secondary">
        
                <div className="text-center ct-flex ct-nowrap">
                    <h1 className="ct-font-sp ct-font-secondary">Experts</h1>
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
                    <button className="btn ct-btn ct-success ct-tag" onClick={()=>loadAssetsByCat("Family")}>Family / Friends</button>
                    <button className="btn ct-btn ct-success ct-tag" onClick={()=>loadAssetsByCat("Kids")}>Kids</button>
                    <button className="btn ct-btn ct-alternate ct-tag" onClick={()=>loadAssetsByCat("Relationship")}>Love / Relationship</button>
                    <button className="btn ct-btn ct-alternate ct-tag" onClick={()=>loadAssetsByCat("Career")}>Academic / Career</button>
                    <button className="btn ct-btn ct-success ct-tag" onClick={()=>loadAssetsByCat("Sexual")}>Sexual Welness</button>
                    <button className="btn ct-btn ct-warning ct-tag" onClick={()=>loadAssetsByCat("Self")}>Self-Improvement</button>
                    <button className="btn ct-btn ct-danger ct-tag" onClick={()=>loadAssets()}>All</button>
                </div>

                <div className="hr-spacer"></div>
            </div>

            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row-content">

                <div className="ct-container-item ct-wrap ">

                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>

                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>
                    <div className="hr-spacer"></div>

                    {
                        experts.length>0?
                         experts.map(element => <CardProfile model={element} />)
                         :<></>
                    }


                </div>

            </div>

        </>
    );
}

export default Experts;
