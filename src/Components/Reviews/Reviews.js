import React from 'react';
import './Reviews.css'

const Reviews = ({ review }) => {
    const { name, comment, rating } = review
    return (
        <div className='reviews-style'>
            <h4>{name}</h4>
            <div className='reviews-position'>
                <h5>{comment}</h5>
                <h6>{rating}</h6>
            </div>
        </div>
    );
};

export default Reviews;