import React from 'react';

export const HelpingWho = ({id}) => {
    
    return (
        <>
            <div className="header-description" id={id}>
                <h1>Who do we help?</h1>
                <div className="decoration"/>
            </div>
            <div className="buttons">
                <button className="btn-main helping-btn current">Foundation</button>
                <button className="btn-main helping-btn">Non-governmental organizations</button>
                <button className="btn-main helping-btn">Local collections</button>
            </div>
            <p className="helping-p">In our database you will find a list of verified Foundations that we cooperate with. <br/> You can check what they do, who they help and what they need.</p>
        </>
        );
    };