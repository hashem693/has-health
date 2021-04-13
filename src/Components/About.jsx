import React from 'react';
import AboutServices from './AboutServices';
import AboutText from './AboutText';
import './About.scss'
import Testimonials from './Testimonials';
import Blog from './Blog';
import AboutBg from './AboutBg';

const About = () => {
    return (
        <div className=" about">
            <AboutBg/>
            <AboutText/>   
            <AboutServices/>     
            <Testimonials/>
            <Blog/>
        </div>
    )
}

export default About
