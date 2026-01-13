"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    isLoading?: boolean;
}

export const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
    ({ className, variant = "primary", isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "cyber-button group relative disabled:opacity-50 disabled:cursor-not-allowed",
                    variant === "secondary" && "border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]",
                    variant === "outline" && "border-white/30 text-white hover:border-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading && (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        />
                    )}
                    {children}
                </span>

                {/* Animated background highlights */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
        );
    }
);

CyberButton.displayName = "CyberButton";
