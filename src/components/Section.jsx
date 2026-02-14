import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className, fullHeight = false }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full flex flex-col justify-center items-center px-6 py-20 scroll-mt-24 ${fullHeight ? 'min-h-screen' : 'min-h-[80vh]'} ${className}`}
    >
        {children}
    </motion.section>
);

export default Section;
