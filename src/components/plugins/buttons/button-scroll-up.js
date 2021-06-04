import React from 'react';
import './button.css';
import { Link } from 'react-scroll';
import EventEmitter from '../../../utils/EventEmitter';

function ScrollUp() {

    const showChatbot = () => {EventEmitter.emit("chatbot", {close: false})}

    return (
        <div className="fixed-panel ct-flex">
        
        <Link onClick={showChatbot}>
            <div className="ct-fixed text-center">
                <i class="fas fa-info-circle"></i>
            </div>
        </Link>
        <Link to="top-navigation" smooth={true} duration={2000}>
            <div className="ct-fixed text-center">
                <i class="fas fa-chevron-up"></i>
            </div>
        </Link>

        </div>
    )
}

export default ScrollUp;
