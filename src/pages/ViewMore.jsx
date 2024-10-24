import React from 'react'
import './Viewmore.css'
import arrow from '../assets/right-arrow.png';
import circle from '../assets/circle.png';

function ViewMore() {
  return (
    <div className='container'>
        <div className='view-container'>
            <img src={arrow} alt="arrow" className='arrow_top' />
            <h1>About me</h1>
            <div className="education">
                <h2>Education</h2>
                <div className="wrapper">
                    <div className='text-wrapper'>
                        <img src={circle} alt="circile-img" />
                        <div>
                            <h3>My name is </h3>
                            <h3>Hi you are my</h3>
                        </div>
                    </div>
                    <div className='text-wrapper'>
                        <img src={circle} alt="circile-img" />
                        <div>
                            <h3>My name is </h3>
                            <h3>Hi you are my</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education">
                <h2>Work</h2>
                <div className="wrapper">
                    <div className='text-wrapper'>
                        <img src={circle} alt="circile-img" />
                        <div>
                            <h3>My name is </h3>
                            <h3>Hi you are my</h3>
                        </div>
                    </div>
                    <div className='text-wrapper'>
                        <img src={circle} alt="circile-img" />
                        <div>
                            <h3>My name is </h3>
                            <h3>Hi you are my</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMore