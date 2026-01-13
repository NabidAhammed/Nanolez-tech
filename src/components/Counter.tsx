"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({ 
    end, 
    duration = 2, 
    prefix = "", 
    suffix = "" 
}) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, hasAnimated]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setHasAnimated(true)}
        >
            {prefix}{count}{suffix}
        </motion.span>
    );
};
