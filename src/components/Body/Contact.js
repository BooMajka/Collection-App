import React from 'react';
import {useState} from 'react';
import fire from '../../firebase';

export const Contact = ({id}) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
 

    const ValidateSubmit = (e) => {
        e.preventDefault();
        let timer;
        let mailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;

        if(userName === "") {
            alert("Write your name");
            setError(true);
        //     setError(true),() => {timer = setTimeout(() => {setError(false), 1000});
        // } 
        if(email === "" && !email.match(mailRegex)) {
            alert("Invalid email");
            setError(true);
        } 
        if(message === "") {
            alert("Write your message"); 
            setError(true);
        }
        if(userName !=="" && email !=="" && message !== "") {
            setSuccess(true);
            const timer = setTimeout(() => {
                setSuccess(false);
                setError(false);
            }, 1000);
        }
    }
    clearTimeout(timer);

        console.log(userName, email, message);


        fire.collection("inbox").add({
            userName,
            email,
            message,
        });

    };

    
    return (
        <>
        <div className="contact-wrapper" id={id}>
            <div className="contact-img"/>
            <div className="contact-form">
                <div className="header-description">
                    <h1>Contact Us</h1>
                    <div className="decoration"/>
                    <form className="contact-form_wrapper" onSubmit={ValidateSubmit} >
                        {
                           success && (
                               <span style={{color:"red"}}> Message has been sent.</span>
                           ) 
                        }
                        <div className="contact-wrapper-input">
                        
                            <div className="label-input-wrapper">
                                <label className="large-label" for="name">Your name</label>
                                <input 
                                className="input-class" id="name" name="your-name" 
                                type="text" placeholder="Krzysztof"
                                onChange={e => setUserName(e.target.value)}
                                value={userName}
                                />
                            </div> 
                            
                            <div className="label-input-wrapper">
                                <label className="large-label" for="email">Your email</label>
                                <input 
                                className="input-class" id="email" 
                                name="your-email" type="text" placeholder="abc@xyz.com"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                />
                            </div>
                            
                        </div>
                        <label className="large-label-txt" for="msg">Write your message</label>
                        <textarea 
                        className="large-textarea" rows="6" 
                        placeholder="Lorem Ipsum Det finnes mange ulike varianter av Lorem Ipsum, men majoriteten av disse har blitt tuklet med et eller annet vis."
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        />
                        <button className="contact-btn">Wyslij</button>
                </form>
                
                </div>
                
            </div>
        </div>
        </>
    );
    };