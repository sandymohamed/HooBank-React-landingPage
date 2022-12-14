
import {card} from '../assets'


const CardDeal = () => {

   

    return (
        <div className="container row  overflow-hidden mt-5 mb-5 " id='product'>

            <div className="deal-left col-sm-6 overflow-hidden p-5 mt-5 " data-aos="fade-up" data-aos-delay="200">
                <h2 className='fs-1 text-white fw-bold text-capitalize lh-lg '>Find a better card deal in few easy steps.</h2>
                <p className=''>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <button className='btn button text-capitalize'><a href='#start' className='text-dark' >Get Started</a></button>
            </div>

            <div className="deal-right col-sm-6 mt-5 pt-3  overflow-hidden  " >
                <img src={card} alt="card" className='w-100'  data-aos="flip-right" data-aos-delay="400" />



            </div>
        </div>
    );
};

export default CardDeal;