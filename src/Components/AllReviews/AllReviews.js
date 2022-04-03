import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './AllReviews.css'

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='second-section all-reviews pb-5'>
            <h1 className='p-5'>All Customer Reviews</h1>
            <div className='home-reviews container'>
                {
                    reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
                }
            </div>
        </div>
    );
};

export default AllReviews;