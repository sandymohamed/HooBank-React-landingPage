import React from 'react';

import { robot } from '../assets'
import { stats } from "../constants/index"
import "../App.css"


const Hero = () => {

    return (
        <div className='hero-container d-flex flex-row w-100 row' id='home'>
            <div className='hero col-sm-6 p-2 ' data-aos="fade-left" data-aos-delay="200">
                <div className='blur'></div>
                <h1 className='hero-title text-white  p-2 '>
                    The Next
                    <br /> <span className='hero-title-span'> Generation </span> <br />
                    Payment Method.
                </h1>
                <p className='para p-2 fs-5'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.</p>
            </div>

            <div className='col-sm-6 ' data-aos="fade-right" data-aos-delay="200">
                <div className='img-blur'></div>
                <img src={robot} alt="robot-image" className='w-100' />
            </div>
            <div className="hero-footer d-flex flex-row  justify-content-center align-items-center">
            <div className="row mt-3 overflow-hidden">
                {
                    stats.map((stat, i) =>
                    (
                        <h2  
                        key={i} 
                        className='lh-1 text-white mb-3 col-xs-12 col-lg-4 text-center border-none '
                        style={{ overflow: 'hidden' }} 
                        data-aos="fade-up">
                            {stat.value}  
                            <span className='hero-title-span fs-5'>
                                {stat.title}
                            </span>
                        </h2>

                    
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default Hero;