import React, { useEffect, useState } from 'react';
import navitem_service from '../../../services/navitems_service';
import Session from 'react-session-api';
import Title from '../../layout/title-container/title';

function BlogSingle(props){
    
    var [item, setItem] = useState(props.content);
    var [title, setTitle] = useState('No Title');
    var [content, setContent] = useState("No content yet.");

    const submitContent = async () => {
        await navitem_service.updateNavItem(props.content.item, {item: title, content:content});
        setItem({title: title, content: content});
    }
    useEffect(() => {
        // const loadResource = async () => {
        //     setItem(await navitem_service.getItem(props.title));
        //     console.log(item);
        // }

        // loadResource();
    }, [item])
    return (
            <>
                <Title model={{ title: item.title||"No Title", path: ["Site 01"] }}/>
            
                <div className="hr-spacer ct-cont-highlight2"></div>

                <div className="ct-row ct-cont-secondary">
        
                    <div className="text-center ct-flex ct-nowrap">
                        <h1 className="ct-font-sp ct-font-secondary">{item.title||"No Title"}</h1>
                    </div>
                </div>
                <div className="ct-row ct-cont-primary">
                    <div className="text-left ct-row-content">
                        <p className="ct-font-primary">{item.content||"No Content"}</p>
                    </div>

                </div>

                <div className="hr-spacer ct-cont-highlight2"></div>
                {
                    Session.get("role")==="Administrator"?
                    
                    <>
                    <div className="ct-row ct-cont-secondary">
        
                        <div className="text-center ct-flex ct-nowrap">
                            <h4 className="ct-font-secondary">Add Content</h4>
                        </div>

                        <form onSubmit={(event)=>{event.preventDefault(); submitContent();}}>
                            <div class="form-group ct-input-padding-fix">
                                <input 
                                    onChange={(event)=>setTitle(event.target.value)}
                                    type="text" class="form-control" id="inputitem" placeholder="Enter Title for Page"
                                />
                                <br></br>
                                <textarea 
                                    onChange={(event)=>setContent(event.target.value)}
                                    type="text" class="form-control" id="inputurl" rows="10" placeholder="Enter Content for Page"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn ct-btn ct-success">Update Nav Item</button>
                        </form>

                        <div className="hr-spacer"></div>
                    </div>
                    
                    
                    </>
                    
                    
                    :<></>
                }
                
            </>
    )
}

export default React.memo(BlogSingle);
