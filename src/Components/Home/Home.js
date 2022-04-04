import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    let navigate = useNavigate()

    const clickToAllReviews = () => {
        navigate('/reviews')
    }
    return (
        <div>
            {/* product section start */}
            <div className='first-section'>
                <div className='home-first-section container d-flex'>
                    <div className='first-order'>
                        <h1 className='product-name-text'><span className='h1-text-highlight'>SONY - WH-XB900N</span> <span className='h1-text-highlight-2'>Wireless Noise Cancelling Over-the-Ear Headphones - Gray</span></h1>
                        <br />
                        <p className='product-detail'>Effectively blocks out distracting background noises, so you can enjoy a focused, immersive sound environment. Offers up to 30 hours of use and lasts up to 300 hours on standby mode. Enables simple wireless pairing with your Bluetooth-enabled device. Supports HFP, HSP, A2DP and AVRCP Bluetooth profiles. Deliver powerful sound. Along with a 50Hz - 8kHz microphone frequency response ensures faithful sound reproduction.</p>
                        <button className="first-section-button">
                            <span className="hover-underline-animation"> Click here </span>
                            <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='second-order'>
                        <img className='product-image' src="Resources/headphone.png" alt="" />
                    </div>
                </div>
            </div>
            {/* product section end */}

            {/* review section start */}
            <div className='second-section pb-5'>
                <h1 className='p-5'>Customer Reviews</h1>
                <div className='home-reviews container'>
                    {
                        reviews.slice(0, 3).map(review => <Reviews key={review.id} review={review}></Reviews>)
                    }
                </div>

                <button onClick={clickToAllReviews} className="first-section-button mt-4">
                    <span className="hover-underline-animation"> Show all reviews </span>
                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                    </svg>
                </button>
            </div>
            {/* review section end */}
        </div>
    );
};

export default Home;