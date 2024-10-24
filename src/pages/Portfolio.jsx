import React from 'react';
import "./about.css";
import arrow from '../assets/right-arrow.png';
import close from '../assets/close.png';
import pic1 from '../assets/business-shot-small.jpeg';
import pic2 from '../assets/aesthetic-shot-small.jpeg';
import pic3 from '../assets/passion in life-small.jpeg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div id="Portfolio">
            <div className="box">
                <img src={close} alt="close" className='close' />
                <h1>Portfolio</h1> {/* 标题部分 */}
                <div className="grid-container">
                    <div className="grid-photo">
                        <img src={pic1} alt="buiness-small" />
                        <img src={pic2} alt="aesthetic-small" />
                        <img src={pic3} alt="passion-small" />
                    </div>
                    
                </div>
                
                <div className='more'>
                    <span> View More </span>
                    <img src={arrow} alt="arrow" className='arrow' />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
