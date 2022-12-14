
import 'aos/dist/aos.css';import {quotes} from "../assets"


const FeedbackCard = ({content, avatar, name, title}) => {
 

    
    return (
        <div className=' feedback-card p-5 m-2 col-sm-3 overflow-hidden ' data-aos="fade-left" data-aos-delay="200">
            <img src={quotes} alt="quote" className='mb-5'/>
            <p style={{height: "25vh"}}>{content}</p>
            <div data-aos="fade-up" data-aos-delay="500" className=''>
                <img src={avatar} alt="logo" />
                <h4 className='overflow-hidden'>{name}</h4>
                <p >{title}</p>
            </div>
            
        </div>
    );
};

export default FeedbackCard;