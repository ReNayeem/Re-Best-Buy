import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className='brand-name mt-3'>Best buy</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
            </nav>
        </div>
    );
};

export default Header;