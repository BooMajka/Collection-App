import React from 'react';

export const FourSteps = ({id}) => {
    
    return (
        <>
        <div className="header-description" id={id}>
            <h1>Four simple steps are enough</h1>
            <div className="decoration"/>
        </div>
        <div className="four-steps_main">
            <div className="four-steps_unit">
                <div className="four-steps_icon icon1"/>
                <h3>Select items</h3>
                <p>clothes, toys, equipment, etc.</p>
            </div>
            
            <div className="four-steps_unit">
                <div className="four-steps_icon icon2"/>
                <h3>Pack it</h3>
                <p>use garbage bags</p>
            </div>
            
            <div className="four-steps_unit">
                <div className="four-steps_icon icon3"/>
                <h3>Decide who you want help</h3>
                <p>choose a trusted place</p>
            </div>
            
            <div className="four-steps_unit">
                <div className="four-steps_icon icon4"/>
                <h3>Order a courier</h3>
                <p>courier will arrive at a convenient time</p>
            </div>
        </div>
        <div className="buttons">
            <button className="btn-main">Give away items</button>
        </div>
        </>
    );
};