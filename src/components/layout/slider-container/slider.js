import React from 'react';
// import { Link } from 'react-router-dom';
import { slides_list, special_card_list } from '../../../values/content';
import { CardSpecial } from '../../plugins/cards/card-smart';
import './slider.css';

function Slider(){
    // var i = 1;
    return (
        <>
            <div className="ct-slider-container">

                <div className="ct-slider-header ct-flex">
                    <div className="slider-img" >
                        {/* <img src={'assets/resources/bannerLI.jpg'} /> */}
                    </div>
                    <div className="slider-content">

                        <div className="text-right">
                            <h1 className="ct-font-sp ct-font-secondary">{slides_list[0].title}</h1>
                            <h4 className="ct-font-secondary">{slides_list[0].subtitle}</h4>
                            <p className="ct-font-secondary">There are four different syntaxes you can use with this property: the keyword syntax ("auto", "cover" and "contain"), the one-value syntax (sets the width of the image (height becomes "auto"), the two-value syntax (first value: width of the image, second value: height), and the multiple background syntax (separated with comma). There are four different syntaxes you can use with this property: the keyword syntax ("auto", "cover" and "contain"), the one-value syntax (sets the width of the image (height becomes "auto"), the two-value syntax (first value: width of the image, second value: height), and the multiple background syntax (separated with comma).</p>
                            <p className="ct-font-secondary">There are four different syntaxes you can use with this property: the keyword syntax ("auto", "cover" and "contain"), the one-value syntax (sets the width of the image (height becomes "auto"), the two-value syntax (first value: width of the image, second value: height), and the multiple background syntax (separated with comma).</p>
                        </div>
                        
                    </div> 
                </div>

                <div className="ct-slider-footer ct-flex">
                    
                    {
                        special_card_list.map(element => <CardSpecial model={element}/>)
                    }

                </div>
                
            </div>
        </>
    );
}

export default Slider;