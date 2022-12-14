import React from 'react';
import {airbnb, binance, coinbase, dropbox} from "../assets"
const CTA = () => {
    return (
        <div className='w-100 row  d-flex align-items-center justify-content-center mt-5 pt-5'  data-aos="fade-up" data-aos-delay="200">
            <img src={airbnb} alt="airbnb" className='col-3 me-3 p-5 pointer ' style={{width: "20%"}}/>
            <img src={binance} alt="binance" className='col-3 me-3 p-5 pointer ' style={{width: "20%"}}/>
            <img src={coinbase} alt="coinbase" className='col-3 me-3 p-5 pointer ' style={{width: "20%"}}/>
            <img src={dropbox} alt="dropbox" className='col-3 me-3 p-5 pointer ' style={{width: "20%"}}/>

        </div>
    );
};

export default CTA;