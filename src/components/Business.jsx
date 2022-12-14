import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {star, shield, arrowUp} from "../assets"

const Business = () => {

   

    return (
        <div className="container row  overflow-hidden mt-5 mb-5 " id='features'>

            <div className="business-left col-sm-6 overflow-hidden p-5 " data-aos="fade-up" data-aos-delay="200">
                <h2 className='fs-1 text-white fw-bold text-capitalize lh-lg '>You do the business, we’ll handle the money.</h2>
                <p className=''>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button className='btn button text-capitalize'><a href='#start' className='text-dark' >Get Started</a></button>
            </div>

            <div className="business-right col-sm-6 mt-5 pt-3  overflow-hidden  " >

                <div className="business-item" data-aos="fade-up" data-aos-delay="200">

                    <div className="d-flex">
                        <div className="business-icon-container p-4 icon  rounded-circle text-center d-flex justify-content-center align-items-center" style={{ width: "3rem" }}>
                            <FontAwesomeIcon style={{color: "#00f6ff"}} className="fs-3 " icon="fa-solid fa-star" />
                        </div>
                        <h3 className='title ms-2 lh-lg text-white'>Reward</h3>
                    </div>

                    <p className='d-block'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>

                </div>
                <div className="business-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="d-flex">

                        <div className="business-icon-container p-4 icon  rounded-circle text-center d-flex justify-content-center align-items-center" style={{ width: "3.3rem" }}>
                            <FontAwesomeIcon style={{color: "#00f6ff"}} className="fs-3 " icon="fa-solid fa-shield" />
                        </div>
                        <h3 className='title ms-2 lh-lg text-white'>100% Secured</h3>
                    </div>
                    <p className='d-block'>We take proactive steps make sure your information and transactions are secure.</p>


                </div>
                <div className="business-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="d-flex">

                        <div className="business-icon-container p-4 icon  rounded-circle text-center d-flex justify-content-center align-items-center" style={{ width: "3rem" }}>
                            <FontAwesomeIcon style={{color: "#00f6ff"}} className="fs-3 " icon="fa-solid fa-arrow-up" />
                        </div>
                        <h3 className='title ms-2 lh-lg text-white'>Balance Transfer</h3>
                    </div>
                    <p className='d-block'>A balance transfer credit card can save you a lot of money in interest charges.</p>

                </div>

            </div>
        </div>
    );
};

export default Business;