"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const sizeStyles = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg"
        };

        const variantStyles = {
            primary: "bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:scale-105",
            secondary: "bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105",
            outline: "border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 hover:border-cyan-300",
            ghost: "text-cyan-400 hover:bg-cyan-400/10 rounded-lg font-semibold"
        };

        const { onDrag, onDragStart, onDragEnd, ...htmlProps } = props as any;

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-orbitron uppercase tracking-wider overflow-hidden group",
                    sizeStyles[size],
                    variantStyles[variant],
                    className
                )}
                disabled={isLoading || htmlProps.disabled}
                {...htmlProps}
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

                {/* Animated background shine */}
                {variant !== "ghost" && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
