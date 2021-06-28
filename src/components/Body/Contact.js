import React from 'react';

export const Contact = () => {
    
    return (
        <>
        <div className="contact-wrapper">
            <div className="contact-img"/>
            <div className="contact-form">
                <div className="header-description">
                    <h1>Contact Us</h1>
                    <div className="decoration"/>
                    <form className="contact-form_wrapper">
                        <div className="contact-wrapper-input">
                        
                            <div className="label-input-wrapper">
                                <label className="large-label" for="name">Your name</label>
                                <input className="input-class" id="name" name="your-name" type="text" placeholder="Krzysztof"/>
                            </div> 
                            
                            <div className="label-input-wrapper">
                                <label className="large-label" for="email">Your email</label>
                                <input className="input-class" id="email" name="your-email" type="text" placeholder="abc@xyz.com"/>
                            </div>
                            
                        </div>
                        <label className="large-label-txt" for="msg">Write your message</label>
                        <textarea className="large-textarea" rows="6" placeholder="Lorem Ipsum Det finnes mange ulike varianter av Lorem Ipsum, men majoriteten av disse har blitt tuklet med et eller annet vis."/>
                        <button className="contact-btn">Wyslij</button>
                </form>
                
                </div>
                
            </div>
        </div>
        </>
    );
};