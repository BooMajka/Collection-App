import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {Header} from '../Header/Header';
import {Logon} from '../Header/Logon';
import {Register} from '../Header/Register';
import {Hero} from './Hero';
import fire from '../../firebase';

export const MainDeal = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
 
    
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
   
    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };
    
    const handleLogin = () => {
        let FormIsValid = true;

        if(!email) {
            setEmailError("Please enter your email");
            FormIsValid = false;
        }
        if (typeof email !== "undefined") {
            //regular expression for email validation
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            
        if(!pattern.test(email)) {
            setEmailError("Please enter valid email"); 
            FormIsValid = false;
        }
        }
        
        if(!password) {
            setPasswordError("Please enter your password");
            FormIsValid = false;
        }

        if(typeof password !== "undefined") {

            if (password.length < 6) {
                setPasswordError("Please enter 6 digits password");
                FormIsValid = false;
            }
        }

       

        if (FormIsValid === true) {

            clearErrors();

            fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch(err.code){
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                      setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                }
            });

        }
        
    
    };
    
    
    const handleSignup = () => {

        let FormIsValid = true;
        
        if(!email) {
            setEmailError("Please enter your email");
            FormIsValid = false;
        }
        if (typeof email !== "undefined") {
            //regular expression for email validation
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            
        if(!pattern.test(email)) {
            setEmailError("Please enter valid email"); 
            FormIsValid = false;
        }
        }
        
        if(!password) {
            setPasswordError("Please enter your password");
            FormIsValid = false;
        }

        if(typeof password !== "undefined") {
            if (password.length < 6) {
                setPasswordError("Please enter 6 digits password");
                FormIsValid = false;
            }
        }
       
        if (FormIsValid === true) {

            clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            console.log(err);
            switch(err.code){
                case 'auth/email-already-in-use':
                case 'auth/invalid-email':
                  setEmailError(err.message);
                    break;
                case 'auth/weak-password':
                    setPasswordError(err.message);
                    break;
            }
        });

        }
        
    
} 


    const handleLogout = () => {
        fire.auth().signOut();
    };
    
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                clearInputs();
                setUser(user); 
            } else {
                setUser('');
            }
        });
    };
    useEffect(() => {
        authListener();
    },[]);
    
    return (
        <>
        <Router>

        {/* <Hero email={email} handleLogout={handleLogout}/> */}
        
            <div className="btn-log">
            <Link to="/logon" className="btn-log_link">Logon</Link>
            <Link to="/register" className="btn-log_link current-log">Register</Link> 
            </div>
            <Switch>
                <Route path="/" exact component={Header} />
            
            
            {user ? (
                <Route path="/hero"><Hero email={email} handleLogout={handleLogout}/></Route>
            ):(
                <Route path="/" exact component={Header} />
            )}
    
                <Route path="/logon">
                    <Logon 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    />
                    </Route>
                    
                    <Route path="/register">
                    <Register 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    />
                    </Route>
            </Switch>
        </Router>
       
        </>
        
    )
}