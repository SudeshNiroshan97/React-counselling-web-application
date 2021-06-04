import React from 'react';
import './items.css';

function Item(){
    return (
        <div className="col-sm-4">
            <div className="cards shadow" style={{backgroundColor:'red'}}>
                <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/>
                <p>Current Project</p>
            </div>
        </div>
    );
}

export default Item;
