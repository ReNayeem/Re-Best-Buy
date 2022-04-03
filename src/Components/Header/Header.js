import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className='navbar-design fixed-top'>
            <h1 className='brand-name mt-3'>Best buy</h1>
            <nav className='mb-4'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/reviews">Reviews</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/dashboard">Dashboard</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blogs">Blogs</NavLink>
            </nav>
        </div>
    );
};

export default Header;