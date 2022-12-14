import React from 'react';

const GetStarted = () => {
    return (
        <div className=' row get-started m-5 p-5' id="start">
            <div className="left col-sm-9">
                <h2 
                className='fs-1 text-white fw-bold text-capitalize lh-lg'
                >Let’s try our service now!</h2>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="right col-sm-3 mt-5">
            <button className='btn button text-capitalize'><a href='#start' className='text-dark' >Get Started</a></button>

            </div>
            
        </div>
    );
};

export default GetStarted;