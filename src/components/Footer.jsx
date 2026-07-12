import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="py-10 text-center">
            <div className="flex justify-center space-x-6 mb-6">
                <a href="https://github.com/oshanperera03" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="GitHub"><FaGithub className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/oshanperera03/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6" /></a>
                <a href="https://www.instagram.com/oshanperera03/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors" aria-label="Instagram"><FaInstagram className="w-6 h-6" /></a>
                <a href="https://web.facebook.com/oshanperera03" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors" aria-label="Facebook"><FaFacebook className="w-6 h-6" /></a>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
                © 2026 Oshan Perera. All rights reserved.
            </div>
        </footer>
    );
}
