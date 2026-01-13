"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, position = "top" }) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                            "absolute z-50 px-3 py-1.5 text-xs font-mono bg-cyber-dark border border-cyber-cyan/50 text-cyber-cyan whitespace-nowrap pointer-events-none",
                            positionClasses[position]
                        )}
                    >
                        {content}
                        <div
                            className={cn(
                                "absolute w-2 h-2 bg-cyber-dark border-cyber-cyan/50 rotate-45",
                                position === "top" && "bottom-[-5px] left-1/2 -translate-x-1/2 border-b border-r",
                                position === "bottom" && "top-[-5px] left-1/2 -translate-x-1/2 border-t border-l",
                                position === "left" && "right-[-5px] top-1/2 -translate-y-1/2 border-r border-t",
                                position === "right" && "left-[-5px] top-1/2 -translate-y-1/2 border-l border-b"
                            )}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
