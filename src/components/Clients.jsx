import React from 'react';
import {feedback} from "../constants/index"
import FeedbackCard from './FeedbackCard';
const Clients = () => {
    return (
        <div className='d-flex flex-wrap justify-content-center align-items-center overflow-hidden ' id="clients">
            {
                feedback.map((item, i)=> (
                    <FeedbackCard  key={i} content={item.content} avatar={item.img} name={item.name} title={item.title} />
                ))
            }
        </div>
    );
};

export default Clients;