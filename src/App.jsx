import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <HelmetProvider>
      <Router>
        <div className="bg-gray-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-300 transition-colors duration-500 font-sans selection:bg-purple-500 selection:text-white min-h-screen">

          {/* Background Blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 hidden dark:block">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
          </div>

          <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>

          {/* Global Footer (mostly in HomePage, but could be shared if needed) */}
        </div>
      </Router>
    </HelmetProvider>
  );
}