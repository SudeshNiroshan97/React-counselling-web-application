import React, { useEffect } from 'react';
import './chatbot.css';
// import '/responsive.css';



function ChatBot(){
    // function loadBooking(stateWrapper, ready)  {
    //     console.log("REDIRECT");
    //     ready();
    // }

    return (
        <>
            <div class="chat_box">
                <div class="my-conv-form-wrapper">
                <form action="" method="GET" class="hidden">

                <input type="text" name="" data-conv-question="Hello!"/>     
                    
                <select data-conv-question="Hello! How can I help you" name="category" >
                    <option value="WebDevelopment" >Booking a counsellor ?</option>
                    <option value="DigitalMarketing">Others ?</option>
                </select>
                {/* data-callback="loadBooking" */}
                
                <input type="text" name="name" data-conv-question="Please, Enter your name"/>
                        
                <select data-conv-question="Hi {name}, <br> It's a pleasure to meet you.,can i ask some few questions from you?" name="category">
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>      


                <select data-conv-question="what are you doing at this stage?" name="category">
                    <option value="DigitalMarketing">Working ?</option>
                    <option value="WebDevelopment">Studying ?</option>
                </select>

                <input data-conv-question="Enter your e-mail" data-pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" type="email" name="email" required placeholder="What's your e-mail?"/>

                <select data-conv-question="Please Conform">
                    <option value="Yes">Confirm</option>
                </select>
                
                    <select data-conv-question="Noted! we will be update You,Thank You">
                    <option value="Yes">You're Welcome!</option>
                    <option value="yes">Good Bye!</option>
                </select>

                </form>
                </div>
            </div>

        </>
    )
}

export default ChatBot;
