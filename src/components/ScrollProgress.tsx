"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-cyber-cyan/30 z-[200] origin-left"
            style={{ scaleX: scrollProgress / 100 }}
        >
            <div className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
        </motion.div>
    );
};
