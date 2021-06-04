import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import navitem_service from '../../../services/navitems_service';
import './navigation.css';

function ExtendNav(){

    var [items, setItems] = useState([]);

    useEffect(() => {
        const loadResourcee = async () => {
            setItems(await navitem_service.getItems());
        }

        loadResourcee();
    }, [])

    return (
        <>
            <div className="container-title">
                {
                    items.length > 0? items.map((element)=>
                    <><span className="ct-braker">|</span><Link to={element.url}><span className="tag-sp">{element.item}</span></Link></>)
                        
                        
                        :<></>
                }
                
                <span className="ct-braker">|</span>
            </div>
        </>
    );
}

export default ExtendNav;
