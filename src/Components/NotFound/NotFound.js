import React from 'react';
import './NotFound.css'

const notFound = () => {
    return (
        <div className='not-found'>
            <h1 className='h1-404'>404!</h1>
            <h2 className='h2-404'>The page you are looking for is not found</h2>
        </div>
    );
};

export default notFound;