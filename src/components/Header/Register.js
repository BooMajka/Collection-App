import React from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
    
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;
    
    
    return (
        <>
        
        <section className="wrapper">
        
                <Link to="/">
                <svg className="close-btn" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                </Link>
        
        <div className="logon-form">
            <div className="header-description">
                <h1>Register</h1>
                <div className="decoration"/>
            </div>
            <form className="login-form">
                <label>Username</label>
                <input type="text" autoFocus required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                
                <label>Password</label>
                <input type="password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                
                <p className="errorMsg">{passwordError}</p>
                
                </form>
                
                <div className="toggle">
                <Link to="/logon" className="nav-link" onClick={handleSignup}>Register</Link> 
            
                  
                    </div> 
                </div>
                </section>
        
        </>
            );
            };