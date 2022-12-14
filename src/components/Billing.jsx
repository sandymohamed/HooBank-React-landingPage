import {bill, google, apple} from "../assets"


const Billing = () => {

 

    return (
        <div className='billing container row mt-5 mb-5 overflow-hidden'>
            <div className="right col-sm-6 overflow-hidden">
                <img src={bill} alt="bill" className='w-100  ' data-aos="flip-left" data-aos-delay="400" />

            </div>

            <div className="left col-sm-6 overflow-hidden mt-5" data-aos="fade-up" data-aos-delay="200">
                <h2 className='title text-white lh-lg fs-1 fw-bolder'>Easily control your billing & invoicing.</h2>
                <p >Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
                    Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className="d-flex">
                    <img src={google} alt="google" />
                    <img src={apple} alt="apple" />

                </div>

            </div>

            
        </div>
    );
};

export default Billing;