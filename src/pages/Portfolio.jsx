import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import arrow from '../assets/right-arrow.png';
import close from '../assets/close.png';
import pic4 from '../assets/po1.jpg';

import pic6 from '../assets/po3.jpg';
import picnew from'../assets/po4.jpg';

import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate(); // 创建导航函数

  // 关闭按钮点击事件，返回主页
  const handleClose = () => {
    navigate('/'); // 导航到主页
  };

  return (
    <div id="Portfolio">
      <div className="box">
        <img 
          src={close} 
          alt="close" 
          className="close" 
          onClick={handleClose} // 为关闭按钮添加点击事件
        />
        <h1>Portfolio</h1>
        {/* 其他内容 */}
        <div className="grid-portcontainer">
          <div className="grid-portphoto">
             <img src={pic4} alt="pic4" />
             <p className="caption">Body Field System</p>
        </div>
        <div className="grid-portphoto">
             <img src={pic6} alt="pic6" />
             <p className="caption">Urban Depression Stress</p>
        </div>
         <div className="grid-portphoto">
              <img src={picnew} alt="picnew" />
              <p className="caption">Car Learning</p>
         </div>


        </div>

        <div className="more">
          <Link to="/ViewMore3"><span>View More </span></Link>
          <img src={arrow} alt="arrow" className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
