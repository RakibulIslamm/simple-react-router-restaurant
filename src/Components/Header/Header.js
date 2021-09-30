import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="w-full py-3 shadow sticky top-0 bg-white z-50">
            <div className="w-10/12 mx-auto flex justify-between items-center">
                <div className="logo">
                    <a href="/" className="text-3xl font-bold uppercase">Restaurant</a>
                </div>
                <nav className="flex gap-8 uppercase font-medium text-base">
                    <Link to="/home">Home</Link>
                    <Link to="/categories">Categories</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;