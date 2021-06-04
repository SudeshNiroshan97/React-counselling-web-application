import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Session from 'react-session-api';
import NavItem from '../../../../../models/NavItem';
import navitem_service from '../../../../../services/navitems_service';

function Options(props){
    
    var [item, setItem] = useState(null);
    var [url, setUrl] = useState(null);
    var [title, setTitle] = useState('No Title');
    var [content, setContent] = useState("No content yet.");
    var [created, setCreated] = useState(null);
    var [items, setItems] = useState(null);

    const loadNavItems = async () => {
        setItems(await navitem_service.getItems());
    }

    const onAddNav = () => {
        var navItem = new NavItem(item, url, title, Session.get('username'), content);
        navitem_service.addNavItem(navItem);
        loadNavItems();
    }

    const onRemoveNav = () => {
        navitem_service.deleteItem(created);
        loadNavItems();
    }

    useEffect(() => {
        loadNavItems();
    }, [])

    return (
        <>
            
            {
                !props.logged?
                        <>
                            <h2 className="ct-font-secondary ct-font-lg">OPTIONS</h2>
                            <p className="ct-font-secondary">Following options you can proceed </p>

                            <Link to={`/experts/appointment?expert=${props.userinfo.username}`}><button className="btn ct-btn ct-warning">Make Appointment</button></Link>
                            <Link to={`/share/video?receiver=${props.userinfo.username}`}><button className="btn ct-btn">Video Call</button></Link>
                            <br></br>

                        </>
                
                :<></>
            }

            {

                props.role==="Administrator"&&props.logged?
                    <>
                    <h2 className="ct-font-secondary ct-font-lg">Navigation Items</h2>
                    <p className="ct-font-secondary">Manage Additional Navigation Menu Items.</p>

                    <form onSubmit={(event)=>{event.preventDefault(); onAddNav()}}>
                        <div class="form-group ">
                            <input 
                                onChange={(event)=>setItem(event.target.value)}
                                type="text" class="form-control" id="inputitem" placeholder="Enter a Name for Navigation Item"
                            />
                            <br></br>
                            <input 
                                onChange={(event)=>setUrl(event.target.value)}
                                type="text" class="form-control" id="inputurl" placeholder="Enter path for Navigation Item"
                            />
                            <input 
                                onChange={(event)=>setTitle(event.target.value)}
                                type="text" class="form-control" id="inputtitle" placeholder="Enter Title for Page"
                            />
                        </div>
                        <div class="form-group">
                            <textarea 
                                onChange={(event)=>setContent(event.target.value)}
                                type="text" class="form-control" id="inputcont" rows="4" placeholder="Enter Content for Page"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn ct-btn ct-success">Add Nav Item</button>
                    </form>

                    <br></br> <br></br>

                    <form onSubmit={(event)=>{event.preventDefault(); onRemoveNav()}}>
                        <div class="form-group">
                            <select class="form-control" id="exampleFormControlSelect1"
                                onChange={(event)=>{setCreated(event.target.value); }}
                            >
                                {
                                    items&&items.length>0?items.map((elemnet)=><option value={elemnet.item}>{elemnet.item}</option>):<></>
                                }
                            </select>
                                            
                        </div>
                        <br></br>
                        <button type="submit" className="btn ct-btn ct-alternate">Delete Nav Item</button>
                    </form>
                    
                    </>
                
                :<></>
            }
            
            
            
            
            
        </>
    );
}

export default Options;
