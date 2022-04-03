import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './AllReviews.css'

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='all-reviews'>
            <div className='second-section pb-5'>
                <h1 className='p-5'>All Customer Reviews</h1>
                <div className='home-reviews container pb-5'>
                    {
                        reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviews;