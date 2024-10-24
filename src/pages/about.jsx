import React from 'react';
import "./about.css";
import arrow from '../assets/right-arrow.png';
import close from '../assets/close.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div id="About">
            <div className="box">
                <img src={close} alt="close" className='close' />
                <div>
                    <h1>About Me</h1> {/* 标题部分 */}
                    <p>
                        Hello! I'm Amber Tan, currently studying Interaction and Experience Design. I enjoy creating interactive user experiences and exploring the intersection of design and technology.
                    </p> {/* 文本部分 */}
                </div>
                <div>
                    <h1>Education</h1>
                    <p>Currently: University of Limerick---Interaction and experience design</p>
                    <p>Bechlor: Beijing City University---digital and media arts</p>
                </div>
                <div>
                    <h1>Personal</h1>
                    <p>Currently: University of Limerick---Interaction and experience design</p>
                    <p>Bechlor: Beijing City University---digital and media arts</p>
                </div>
                <Link to="/ViewMore">
                    <div className='more'>
                        <span> View More </span>
                        <img src={arrow} alt="arrow" className='arrow' />
                    </div>
                </Link>
            </div>
        </div>
        
    );
};

export default About;
