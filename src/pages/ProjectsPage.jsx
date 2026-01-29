import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

export default function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Section id="all-projects" className="pt-32 pb-20">
            <SEO
                title="All Projects"
                description="Browse the complete list of projects developed by Shamod Oshan, ranging from web apps to full-stack systems."
                url="projects"
            />
            <div className="max-w-7xl w-full mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all duration-300 mb-2"
                        >
                            <HiArrowLeft /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
                            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg">
                            Explore my complete journey through development. From early experiments to complex full-stack applications, each project represents a step forward in my skills.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="px-6 py-3 rounded-[1.5rem] bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold border border-indigo-100 dark:border-indigo-500/20">
                            {projects.length} Projects Total
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
