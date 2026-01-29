import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col"
        >
            <Link to={`/project/${project.id || 'portfolio-website'}`} className="block overflow-hidden relative aspect-video">
                <div className={`h-full bg-gradient-to-tr ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>
                    <motion.div
                        className="absolute -bottom-10 left-10 right-10 h-full bg-white dark:bg-slate-800 rounded-t-xl shadow-2xl overflow-hidden"
                        initial={{ y: 40 }}
                        whileHover={{ y: 16 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top"
                        />
                    </motion.div>
                </div>
            </Link>
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <Link to={`/project/${project.id || 'portfolio-website'}`}>
                        <h3 className="text-xl font-bold dark:text-white group-hover:text-purple-500 transition">{project.title}</h3>
                    </Link>
                    <div className="flex gap-3 text-gray-400">
                        <a href={project.github || "https://github.com/Shamodoshan?tab=repositories"} className="hover:text-purple-500 transition" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                        <a href={project.link || "https://github.com/Shamodoshan?tab=repositories"} className="hover:text-purple-500 transition" target="_blank" rel="noopener noreferrer"><HiExternalLink size={22} /></a>
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    to={`/project/${project.id || 'portfolio-website'}`}
                    className="mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center gap-1 group/btn"
                >
                    Explore Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
