import React from 'react';
import {useHistory} from 'react-router-dom';
import Title from '../../layout/title-container/title';



function  PaymentForm() {
    const history = useHistory();

    const confirmPayment = () => {
        history.push("/experts");
    }
    return (
        <>
            <Title model={{ title: "Payment Form", path: ["Site 01"] }}/>
            
            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row ct-cont-secondary">
        
                <div className="text-center ct-flex ct-nowrap">
                    <h1 className="ct-font-sp ct-font-secondary">Payment Form</h1>
                </div>

                <div className="ct-row-content text-left">
                    <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    If your image is located somewhere online, you can set the background image of your element by placing the URL like this.
                    </p>
                </div>

                <div className="hr-spacer"></div>
                <div className="hr-spacer"></div>
                <div className="ct-card-container">

                    <div className="ct-card-instruction">
                        <div>
                            <h1 className="ct-font-sp">2</h1>
                            <i class="fas fa-search"></i>
                        </div>
                        <div>
                            <h4 className="ct-font-lg">Complete Payment</h4>
                            <p >Fill card details accordingly and Confirm</p>
                        </div>
                    </div>
                </div>

                <div className="hr-spacer"></div>
                <div className="hr-spacer"></div>
            </div>

            <div className="hr-spacer ct-cont-highlight2"></div>

            <div className="ct-row-content">
                <div className="ct-col">
                    <div>
                        <div><h4 className="ct-font-lg ct-font-primary">Charges</h4></div>
                        <div><p className="ct-font-primary">Choose your payment card method</p></div>
                        <div>
                            <div>
                                <span className="ct-decimal ct-font-lg">Rs. </span><span className="ct-pricetag ct-font-em">1200</span><span className="ct-decimal ct-font-lg">.00</span> <small>per session</small>
                                <br></br>
                                <span>Including Service charges</span>
                            </div>
                        </div>

                        <div className="hr-spacer"></div>
                        <div className="hr-spacer"></div>

                        <div><h4 className="ct-font-lg ct-font-primary">Choose Card Type</h4></div>
                        <div><p className="ct-font-primary">Choose your payment card method</p></div>
                        
                        <div className="ct-flex">
                                <div className="form-col text-center">
                                    <i class="fab fa-cc-visa"></i><br></br>
                                    <h1 className="ct-font-primary">Visa Card</h1>
                                </div>
 
                                <div className="form-col text-center">
                                    <i class="fab fa-cc-mastercard"></i><br></br>
                                    <h1 className="ct-font-primary">Master Card</h1>
                                </div>
                        </div>

                    </div>
                    <div className="ct-cont-secondary">
                        <div><h4 className="ct-font-secondary">Contact Us</h4></div>
                        <div><p className="ct-font-secondary">Share you ideas and help us to improve.</p></div>
                        <div><input type="email" placeholder="Card Name" className="form-control"/></div>
                        <br></br>
                        <div><input type="email" placeholder="Type Code" className="form-control"/></div>
                        <br></br>
                        <div><input type="email" placeholder="Type Passcode" className="form-control"/></div>
                        <br></br>
                        <button className="btn ct-btn ct-alternate" onClick={()=>confirmPayment()}>Confirm Payment</button>
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default PaymentForm;