import React from 'react'

import './footer.css';

function Footer(){
    return (
        <div>
            <footer class="footer-dark">
                <div class="links-row" >
                <div class="links-col">
                    <div><h4 className="ct-font-secondary">EXCORP</h4></div>
                    <div>
                        <p className="ct-font-secondary">If your image is located somewhere online, you can set the background image of your element by placing the 
                            URL like this. </p>
                    </div>
                    <div style={{display:'flex'}}>
                        <img src="https://i.pinimg.com/originals/c2/61/eb/c261eb4f5b4d38cf4f320f9188430c41.png" alt="LOGO" height="200"/>
                    </div>
                </div>
                <div class="links-col">
                    <div><h4 className="ct-font-secondary">Contact Related</h4></div>
                    <div><a href='#'>Selfcare Service</a></div>
                    <div><a href='#'>Hotline</a></div>
                    <div><a href='#'>Smart Connect</a></div>
                </div>
                <div class="links-col">
                    <div><h4 className="ct-font-secondary">Site Related</h4></div>
                    <div><a href='#'>Selfcare Service</a></div>
                    <div><a href='#'>Hotline</a></div>
                    <div><a href='#'>Smart Connect</a></div>
                </div>
                <div class="links-col">
                    <div><h4 className="ct-font-secondary">Contact Us</h4></div>
                    <div><p className="ct-font-secondary">Share you ideas and help us to improve.</p></div>
                    <div><input type="email" placeholder="Type your Email" className="form-control"/></div>
                    <br></br>
                    <div><textarea rows="3" type="email" placeholder="Share Your thoughts" className="form-control"></textarea></div>
                    <br></br>
                    <button className="btn ct-btn ct-alternate">Submit</button>
                </div>
                </div>
                
            </footer>
            <div className="footer-bottom">
                    <div className="hr-spacer"></div>
                    <small>If your image is located somewhere online, you can set the background image of your element by placing the <a href="#">Privacy Policy</a>
                    </small>
                   <div className="links-row">
                    <div class="ct-social ct-flex">
                        <a href='#'><i class="fab fa-facebook"></i></a>
                        <a href='#'><i class="fab fa-twitter"></i></a>
                        <a href='#'><i class="fab fa-instagram"></i></a>
                        <a href='#'><i class="fab fa-linkedin-in"></i></a>
                    </div>
                   </div>
                    
            </div>
        </div>
    );
}

export default Footer;