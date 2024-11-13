import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import { FaHome, FaWallet, FaCog, FaUser, FaBell, FaEnvelope, FaChartLine, FaHeart, FaSearch } from 'react-icons/fa';

const BottomNavbar = () => {
    return (
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-transparent backdrop-blur-lg border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-black dark:bg-opacity-20 dark:backdrop-blur-xl dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-9 mx-auto">
                {/* Replace the icons with NavLink components for routing */}
                <NavLink
                    to="/"
                    data-tip="Home"
                    className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaHome className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>

                <NavLink
                    to="../components/HeroSection.jsx"
                    data-tip="Wallet"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaWallet className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>

                <NavLink
                    to="/settings"
                    data-tip="Settings"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaCog className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>

                <NavLink
                    to="/profile"
                    data-tip="Profile"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaUser className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>

                <NavLink
                    to="/notifications"
                    data-tip="Notifications"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaBell className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>

                <NavLink
                    to="/messages"
                    data-tip="Messages"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaEnvelope className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>

                <NavLink
                    to="/analytics"
                    data-tip="Analytics"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaChartLine className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>

                <NavLink
                    to="/favorites"
                    data-tip="Favorites"
                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaHeart className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>

                <NavLink
                    to="/search"
                    data-tip="Search"
                    className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <FaSearch className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 group-hover:transform group-hover:translate-y-[-5px] transition-transform duration-300" />
                </NavLink>
            </div>

            {/* Add another div for horizontal navigation links */}
            <div className="hidden lg:flex items-center space-x-1 mt-2">
                <NavLink to="/" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">Home</NavLink>
                <NavLink to="/about" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">About</NavLink>
                <NavLink to="/info" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">Info</NavLink>
                <NavLink to="/services" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">Services</NavLink>
                <NavLink to="/weather-search" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">Current Weather</NavLink>
                <NavLink to="/5-day-forecast" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">5-Day Forecast</NavLink>
                <NavLink to="/TenDayForecast" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">10-Day Forecast</NavLink>
                <NavLink to="/disaster-prediction" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">Disaster Prediction</NavLink>
                <NavLink to="/chart" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">Charts</NavLink>
                <NavLink to="/weather-news" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">Weather News</NavLink>
                <NavLink to="/contact" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">Contact Us</NavLink>
            </div>
        </div>
    );
};

export default BottomNavbar;
