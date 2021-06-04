import React, { useEffect, useState } from 'react';
import { experts_sample_list } from '../../../values/content';
import { ButtonSmart } from '../buttons/button-smart';
import { CardProfile } from '../cards/card-smart';
import './container.css';
import '../cards/card.css'

// Common Interface for all containers 
export const ContainerSelector = (props) => {
    const type = props.content.type;

    return (
        <>
            {
                type==="columed"?<ContainerSmart content={props.content}/>
                    :type==="list"?<ContainerSmartList content={props.content}/>
                    :<ContainerSmartV2 content={props.content}/>
            }
        </>
    )
}

export const ContainerSmart = (
    props
) => {
    const title = props.content.title?props.content.title:"No Title Available";
    const subtitle = props.content.subtitle?props.content.subtitle:"";
    const content = props.content.content.text[0]?props.content.content.text[0].content:"No Text Available";

    const id = props.content.title?props.content.title:null;

    // Image Settings


    // Button Settings


    // Other Settings

    const isDark = props.content.theme==="dark"?true:false;
    const isLeft = props.content.align==="left"?true:false;

    // console.log(props.content[0].title);


    return (
        <>

                {/* Font Color Styles ||| -> ct-font-primary | ct-font-secondary */}

                {
                    isLeft?
                        <>
                            <div className={`ct-row-content ${isDark?"ct-cont-secondary":""} text-left`} id={id}>
                                <h1 className={`ct-font-sp ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{title}</h1>
                                <h5 className={`ct-font-lg ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{subtitle}</h5>
                                <div className="hr-spacer"></div>

                                <div className="ct-col-columed">
                                    <div>

                                        <p className={`${isDark?"ct-font-secondary":"ct-font-primary"}`}>
                                            {content}                   
                                        </p>
                                        
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>

                                        {/* <button className="btn ct-btn ct-success">ENTER CREDENTIALS</button> */}

                                        {/* <ButtonSmart model={props.content.content.button[0]}/> */}

                                        {
                                            props.content.content.button.map(element => <ButtonSmart model={element}/>)
                                        }

                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                    </div>

                                    <div className="container-img">

                                    

                                    </div>

                                </div>

                                

                                

                                <div className="hr-spacer"></div>
                                <div className="hr-spacer"></div>
                            </div>
                            <div className="hr-spacer ct-cont-highlight2"></div>
                        </>
                        :
                        <>
                            <div className={`ct-row-content ${isDark?"ct-cont-secondary":""} text-left`} id={id}>
                                

                                <div className="ct-col-columed">
                                    
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>

                                    <div className="container-img">

                                    

                                    </div>

                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                    <div className="hr-spacer"></div>
                                        

                                    <h1 className={`ct-font-sp ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{title}</h1>
                                    <h5 className={`ct-font-lg ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{subtitle}</h5>
                                    <div className="hr-spacer"></div>

                                    <div>

                                        <p className={`${isDark?"ct-font-secondary":"ct-font-primary"}`}>
                                            {content}                   
                                        </p>
                                        
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>

                                        {/* <button className="btn ct-btn ct-success">ENTER CREDENTIALS</button> */}

                                        {/* <ButtonSmart model={props.content.content.button[0]}/> */}

                                        {
                                            props.content.content.button.map(element => <ButtonSmart model={element}/>)
                                        }

                                        
                                    </div>

                                </div>

                                

                                

                                <div className="hr-spacer"></div>
                                <div className="hr-spacer"></div>
                                
                            </div>
                            <div className="hr-spacer ct-cont-highlight2"></div>
                        </>
                }

                

        </>
    );

}

// =============================================================================================================================================
export const ContainerSmartV2 = (
    props
) => {
    const title = props.content.title?props.content.title:"No Title Available";
    const subtitle = props.content.subtitle?props.content.subtitle:"";
    const content = props.content.content.text[0]?props.content.content.text[0].content:"No Text Available";

    const id = props.content.title?props.content.title:null;

    // Image Settings


    // Button Settings


    // Other Settings

    const isDark = props.content.theme==="dark"?true:false;
    const isLeft = props.content.align==="left"?true:false;

    // console.log(props.content[0].title);


    return (
        <>

                {/* Font Color Styles ||| -> ct-font-primary | ct-font-secondary */}

                {
                    isLeft?
                        <>
                            <div className={`ct-row-content ${isDark?"ct-cont-secondary":""} text-left`} id={id}>
                                <div className="ct-col">
                                    <div>
                                        <h1 className={`ct-font-sp ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{title}</h1>
                                        <h5 className={`ct-font-lg ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{subtitle}</h5>
                                        <div className="hr-spacer"></div>

                                        <p className={`${isDark?"ct-font-secondary":"ct-font-primary"}`}>
                                            {content}                   
                                        </p>

                                        {/* {
                                                content.length?
                                                    <>
                                                        {
                                                            content.map(element => <>{element}</>)
                                                        }
                                                    </>
                                                    :<>
                                                        <p className={`${isDark?"ct-font-secondary":"ct-font-primary"}`}>
                                            
                                                            {content}                   
                                                        </p>
                                                    </>
                                        } */}
                                        
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>

                                        {/* <button className="btn ct-btn ct-success">ENTER CREDENTIALS</button> */}

                                        {/* <ButtonSmart model={props.content.content.button[0]}/> */}

                                        {
                                            props.content.content.button.map(element => <ButtonSmart model={element}/>)
                                        }

                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                    </div>

                                    <div className="container-img">

                                    

                                    </div>

                                </div>

                                <div className="hr-spacer"></div>
                                <div className="hr-spacer"></div>
                            </div>
                            <div className="hr-spacer ct-cont-highlight2"></div>
                        </>
                        :
                        <>
                            <div className={`ct-row-content ${isDark?"ct-cont-secondary":""} text-left`} id={id}>
                                

                                <div className="ct-col">
                                    <div className="container-img">

                                    </div>

                                    <div>
                                        <h1 className={`ct-font-sp ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{title}</h1>
                                        <h5 className={`ct-font-lg ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{subtitle}</h5>
                                        <div className="hr-spacer"></div>

                                        <p className={`${isDark?"ct-font-secondary":"ct-font-primary"}`}>
                                            {content}                   
                                        </p>
                                        
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>

                                        {/* <button className="btn ct-btn ct-success">ENTER CREDENTIALS</button> */}

                                        {/* <ButtonSmart model={props.content.content.button[0]}/> */}

                                        {
                                            props.content.content.button.map(element => <ButtonSmart model={element}/>)
                                        }

                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                        <div className="hr-spacer"></div>
                                    </div>
                                </div>

                                

                                

                                <div className="hr-spacer"></div>
                                <div className="hr-spacer"></div>
                                
                            </div>
                            <div className="hr-spacer ct-cont-highlight2"></div>
                        </>
                }

                

        </>
    );

}

// ===========================================================================================================================================



export const ContainerSmartList = (props) => {
    const title = props.content.title?props.content.title:"No Title Available";
    const subtitle = props.content.subtitle?props.content.subtitle:"";
    const content = props.content.content.text[0]?props.content.content.text[0].content:"No Text Available";

    // Container Settings
    // const list = await props.content.list?props.content.list:[];
    var [nlist, setList] = useState([]);

    useEffect(() => {
        const loadAssets = async () => {
            
            setList(await props.content.content.list);
        }

        loadAssets();
        return () => {
            
        }
    })

    const id = props.content.title?props.content.title:null;

    // const type = "";
    // const container = "";
    // const query_mode = "";



    // Button Settings


    // Other Settings

    const isDark = props.content.theme==="dark"?true:false;
    // const isLeft = props.content.align==="left"?true:false;

    return (
        <>
                            <div className={`ct-row-content ${isDark?"ct-cont-secondary":""}`} id={id}>
                                <h1 className={`ct-font-sp ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{title}</h1>
                                <h5 className={`ct-font-lg ${isDark?"ct-font-secondary":"ct-font-primary"}`}>{subtitle}</h5>
                                <div className="hr-spacer"></div>

                                <p className={`${isDark?"ct-font-secondary":"ct-font-primary"}`}>
                                    {content}                   
                                </p>
                                        
                                <div className="hr-spacer"></div>
                                <div className="hr-spacer"></div>
                                <div className="ct-container-item ct-wrap ">
                                    
        

                                        {/* {
                                            props.content.content.button.map(element => <ButtonSmart model={element}/>)
                                        } */}
                                        {
                                            nlist.length>0?
                                                nlist.map(element => <CardProfile model={element}/>)
                                                :<></>
                                        }

                                    

                                </div>

                                <div className="hr-spacer"></div>
                                <div className="hr-spacer"></div>
                                {
                                    props.content.content.button.map(element => <ButtonSmart model={element}/>)
                                }
                                <div className="hr-spacer"></div>
                                <div className="hr-spacer"></div>
                            </div>
                            <div className="hr-spacer ct-cont-highlight2"></div>
        </>
    );
}

export const ContainerSmart3 = () => {}

export const ContainerSmart4 = () => {}

export const ContainerSmart5 = () => {}
