import React from 'react';

export const StartHelping = ({id}) => {
    
    return (
        <>
        <header>
        <div className="stuff"/>
        <div className="header-description" id={id}>
            <h1>Start Helping!<br/>
            Give away unwanted items in trusted hands</h1>
            <div className="decoration"/>
            <div className="buttons">
                <button className="btn-main">Give away items</button>
                <button className="btn-main">organize a collection</button>
            </div>
        </div>
        </header>
        </>
    );
};