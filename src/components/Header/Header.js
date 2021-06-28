import React from 'react';
import { Link } from "react-scroll";
import {StartHelping} from '../Body/StartHelping';
import {Numbers} from '../Body/Numbers';
import {FourSteps} from '../Body/FourSteps';
import {AboutUs} from '../Body/AboutUs';
import {HelpingWho} from '../Body/HelpingWho';
import {FundForm} from '../Body/FundForm';
import {Contact} from '../Body/Contact';


export const Header = ({handleLogout}) => {
    
    return (
        <>
       
            <div className="menu">
                <ul className="nav">
                    <li className="nav-link current">
                        <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >
                        Start
                        </Link>
                    </li>
                    
                    <li className="nav-link">
                        <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >
                        What's all about?
                        </Link>
                    </li>
                    
                    <li className="nav-link">
                        <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >
                        About us
                        </Link>
                    </li>
                    
                    <li className="nav-link">
                        <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >
                        Foundations & Organizations
                        </Link>
                    </li>
                    
                    <li className="nav-link">
                        <Link
                        activeClass="active"
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >
                        Contact
                        </Link>
                    </li>

                </ul>
            </div>
        
            <StartHelping id="section1"/>
            <Numbers/>
            <FourSteps id="section2"/>
            <AboutUs id="section3"/>
            <HelpingWho id="section4"/>
            <FundForm />
            <Contact id="section5"/>
            
        </>
    );
};