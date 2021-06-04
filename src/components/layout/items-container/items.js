import React from 'react';
import Item from './item';
import './items.css';

function Items(){
    return (
        <div className="container text-center">
            <h3>What We Do</h3>
            <div className="row">
                
                <div className="col-sm-4">
                    <div className="cards shadow" style={{backgroundColor:'red'}}>
                        <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/>
                        <p>Current Project</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="cards shadow" style={{backgroundColor:'red'}}>
                        <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/>
                        <p>Current Project</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="cards shadow" style={{backgroundColor:'red'}}>
                        <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:"100%"}} alt="Image"/>
                        <p>Current Project</p>
                    </div>
                </div>

                <Item/>
                <Item/>
            </div>
        </div>
    );
}

export default Items;
