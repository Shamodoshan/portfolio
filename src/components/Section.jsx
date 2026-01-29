import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`min-h-screen w-full flex flex-col justify-center items-center px-6 py-20 ${className}`}
    >
        {children}
    </motion.section>
);

export default Section;
