import React from 'react';
import './contact.css';
import contactme from'../assets/contact.png';



function Contact() {
    return (
        <div id="contact">
            <div className="box">
                {/* 叉号图标，点击时返回主页 */}
                <div>
                    <div className='contact'>
                        <img src={contactme} alt="contactme"  className='contactme'/>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Contact;
