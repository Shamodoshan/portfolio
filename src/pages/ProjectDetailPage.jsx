import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiExternalLink, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

export default function ProjectDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!project) {
            navigate('/projects');
        }
    }, [project, navigate]);

    if (!project) return null;


    const nextImage = () => {
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <>
            <Section id="project-detail" className="pt-32 pb-20">
                <SEO
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    url={`project/${project.id}`}
                    type="article"
                />
                <div className="max-w-6xl w-full mx-auto px-6">
                    {/* Navigation & Header */}
                    <div className="mb-12">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all duration-300 mb-8"
                        >
                            <HiArrowLeft /> Back to All Projects
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-4xl md:text-6xl font-bold dark:text-white mb-6"
                                >
                                    {project.title}
                                </motion.h1>

                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-indigo-600 text-white rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center gap-2 font-bold"
                                >
                                    Live Demo <HiExternalLink />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 font-bold"
                                >
                                    GitHub <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
                        <div className="lg:col-span-8 space-y-6">
                            <div className="relative group rounded-[2.5rem] overflow-hidden aspect-video bg-slate-900 shadow-2xl border border-white/5">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImageIndex}
                                        src={project.images[activeImageIndex]}
                                        alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={prevImage}
                                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all"
                                    >
                                        <HiChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all"
                                    >
                                        <HiChevronRight size={24} />
                                    </button>
                                </div>

                                {/* Counter */}
                                <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white text-sm font-medium">
                                    {activeImageIndex + 1} / {project.images.length}
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {project.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`relative flex-shrink-0 w-32 aspect-video rounded-2xl overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-indigo-500 scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="p-8 rounded-[2.5rem] bg-indigo-50/50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 shadow-sm">
                                <h3 className="text-xl font-bold dark:text-white mb-6">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium dark:text-gray-300 border border-gray-100 dark:border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 shadow-sm">
                                <h3 className="text-xl font-bold dark:text-white mb-4">Project Impact</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    This project demonstrates core competencies in {project.tags[0]} and {project.tags[1]},
                                    focusing on delivering a high-quality user experience and scalable architecture.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold dark:text-white mb-6">Detailed Overview</h2>
                                <div className="h-1.5 w-20 bg-indigo-500 rounded-full mb-8"></div>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </div>

                            <div className="pt-8">
                                <h2 className="text-3xl font-bold dark:text-white mb-8">Technical Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 font-bold">
                                                0{index + 1}
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300 font-medium">{feature}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            {/* Sticky Call to Action */}
                            <div className="sticky top-32 p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl">
                                <h3 className="text-2xl font-bold mb-4">Like this project?</h3>
                                <p className="opacity-90 mb-8 leading-relaxed">
                                    I'm currently available for full-stack roles and interesting freelance projects.
                                </p>
                                <Link
                                    to="/#contact"
                                    className="w-full py-4 bg-white text-indigo-600 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                                >
                                    Let's Work Together
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    );
}
