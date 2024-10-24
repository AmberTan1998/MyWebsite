import React, { useState } from 'react';
import './App.css';
import { Link, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import MediaGallery from './pages/MediaGallery';
import Spline from '@splinetool/react-spline';
import Portfolio from './pages/Portfolio';
import ViewMore from './pages/Viewmore';

function App() {
    return (
        <main>
            <div className="container">
            {/* 左侧文本和按钮 */}
            <div className="text-container">
                <h1 className="title">WELCOME</h1>
                <div className="button-container">
                    <Link to="/About"><button className="button ">About Me</button></Link>
                    <Link to="/MediaGallery"><button className="button">Media Gallery</button></Link>
                    <Link to="/Portfolio"><button className="button">Portfolio</button></Link>
                    <Link to="/"><button className="button">Contact</button></Link>
                </div>
        
            </div>
            <div>
            <Routes>
                <Route path='/About' element={<About/>} />
                <Route path='/MediaGallery' element={<MediaGallery/>} />
                <Route path='/Portfolio' element={<Portfolio />} />
                <Route path='/ViewMore' element={<ViewMore />} />
            </Routes>
            </div>
                {/* 右侧的 3D 资源 */}
                <div className="spline-background">
                    <Spline className="spline" scene="https://prod.spline.design/xPUmhwdLsF5BVkp9/scene.splinecode" />
                </div>
            
            </div>
        </main>
    );
}

export default App;
