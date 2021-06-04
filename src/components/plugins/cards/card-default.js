import React from 'react';
import './card.css';

function CardDefault({card_title, card_subtitle, card_content, card_icon, card_btn_cap}) {
    return (
        <div className="ct-card">
            <div className="ct-card-head">
                <h4>{card_title}</h4>
                <small>{card_subtitle}</small>
                <hr></hr>

            </div>
            <div className="ct-card-body">
                <p>{card_content}</p>
                <div className="text-center">
                    <button className="btn ct-btn ct-alternate">{card_btn_cap}</button>
                </div>
            </div>

        </div>
    );
}

export default CardDefault;

