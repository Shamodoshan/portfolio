import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HiMoon, HiSun } from 'react-icons/hi';

const Navbar = ({ darkMode, toggleTheme }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const scrollToSection = (id) => {
        if (isHomePage) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
            <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-white/10 rounded-xl px-6 py-3 flex justify-between items-center shadow-xl">
                <Link
                    to="/"
                    onClick={() => scrollToSection('home')}
                    className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                    OSHAN PERERA<span className="text-indigo-500">.</span>
                </Link>
                <div className="hidden md:flex gap-10 text-sm font-medium">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={isHomePage ? `/#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="relative group text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/80 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <HiSun className="text-indigo-400 text-xl transition-transform hover:rotate-12" />
                        ) : (
                            <HiMoon className="text-indigo-600 text-xl transition-transform hover:rotate-12" />
                        )}
                    </button>
                    <Link
                        to="/#contact"
                        onClick={() => scrollToSection('contact')}
                        className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
