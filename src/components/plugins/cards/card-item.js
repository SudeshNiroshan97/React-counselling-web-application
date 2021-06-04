import React from 'react';
import './card.css';

function CardItem(){
    return (
        <div className="ct-card-item">
             <div className="ct-card-side">
                 <img src="http://pngimg.com/uploads/triangle/triangle_PNG44.png" alt="IMG" />
             </div>
             <div className="ct-card-side">
                 <div className="ct-card-head">
                     <h4 className="ct-font-lg">ITEM NAME</h4>
                     <small>Tag Line</small>
                     <div className="hr-spacer"></div>
                     <div className="hr-spacer"></div>
                 </div>
                 <div className="ct-card-body">
                     <p>A group of high school misfits who cant stay out of trouble are given an assignment in their broadcasting class in order to graduate. 
                         all hell breaks loose. late nights and crazy antics are a thing of the past for these friends. well, maybe not. for Stephen, Kevin and 
                         Ryan, making the transition to stoner slackers to high school grads can be tricky, since they don't take anyone or anything seriously.</p>
                    <div className="text-center">
                        <h4 className="ct-font-lg">Rs.25/=</h4>
                        <button className="btn ct-btn ct-success">Buy</button>
                        <button className="btn ct-btn ct-primary">More</button>
                    </div>
                 </div>
             </div>
        </div>
    );
}

export default CardItem;
