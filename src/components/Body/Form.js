import React from "react";

export const Form = () => {
    return (
        <>
        <div className="hero-wrapper">
            <div className="hero-img" />
            <div>
                <div className="header-description">
                <h1>Give back the things you don't need<br/>
                to those in need.</h1>
                <div className="decoration"/>
                <p className="helping-p hero">Only 4 simple steps:</p>
                <div className="diamonds">
                <span><p>1 <br/> Choose <br/>your <br/>things</p></span>
                <span><p>2 <br/> Pack <br/>them <br/>in bags</p></span>
                <span><p>3 <br/> Select <br/>foundation</p></span>
                <span><p>4 <br/> Order <br/>a courier</p></span>
                </div>
                </div>
            </div>
        </div>
        <div className="important-section">
        <h1>Important!</h1>
        <p>Fill in the details about of your stuff. Thanks to this, we will know better to whom to pass them on.</p>
        </div>
        
        </>
    )
}