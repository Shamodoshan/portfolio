import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, direction = 'left', delay = 0, duration = 0.5, distance = 50, className = "" }) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
