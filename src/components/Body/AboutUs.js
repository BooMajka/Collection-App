import React from 'react';

export const AboutUs = ({id}) => {
    
    return (
        <>
        <div className="about">
            <div className="header-description" id={id}>
                <h1>About Us</h1>
                <div className="decoration"/>
                <h2>Det finnes mange ulike varianter av Lorem Ipsum, men majoriteten av disse har blitt tuklet med pa et eller annet vis. Det være seg innlagt humor eller tilfeldig genererte ord som ser langt fra troverdige ut.</h2>
                <div className="about-signature"/>
            </div>
            
            <div className="about-pic"/>
            
        </div>
        </>
    );
};