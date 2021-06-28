import React from 'react';

export const FundForm = ({id}) => {
    
    return (
        
        <>
        <div className="fund-form">
        <section className="fund-section">
        <div className="fund-wrapper" id={id}>
            <div><h1>"Care about health" Fundation</h1> <br/>
            <p>Mission: Helping people who are in a difficult life situation.</p></div>
            <div><p>clothes, food, equipment, furniture, toys</p></div>
            </div>
        </section>
        
        <section className="fund-section">
        <div className="fund-wrapper">
            <div><h1>"For Kids" Fundation</h1><br/>
            <p>Mission: helping children from poverty families.</p></div>
            <div><p>clothes, furniture, toys</p></div>
            </div>
        </section>
        
        <section className="fund-section">
        <div className="fund-wrapper">
            <div><h1>"No Home" Fundation</h1><br/>
            <p>Mission: helping homeless.</p></div>
            <div><p>clothes, food, warm blankets</p></div>
            </div>
        </section>
        
            </div>
            <ul className="fund-nav">
                    <li className="fund-link current-fund"><a href="section4">1</a></li>
                    <li className="fund-link"><a href="section4">2</a></li>
                    <li className="fund-link"><a href="section4">3</a></li>
            </ul>
        
        </>
    );
};