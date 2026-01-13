"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    helpText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, helpText, className, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-semibold text-gray-300 ml-1 block uppercase tracking-wide font-orbitron">
                        {label}
                    </label>
                )}
                <div className="relative group">
                    {icon && (
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/50 group-focus-within:text-cyan-400 transition-colors">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        className={cn(
                            "w-full bg-white/5 border border-gray-700 group-focus-within:border-cyan-400 px-4 py-3 text-white placeholder:text-gray-600 outline-none transition-all duration-300 rounded-lg",
                            error ? "border-red-500 focus:border-red-500" : "focus:shadow-[0_0_20px_rgba(0,243,255,0.2)]",
                            icon && "pl-12",
                            className
                        )}
                        {...props}
                    />
                    {/* Bottom glow line */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-focus-within:w-full transition-all duration-500 rounded-b-lg" />
                </div>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-500 uppercase tracking-tight ml-1 font-mono"
                    >
                        ✗ {error}
                    </motion.p>
                )}
                {helpText && !error && (
                    <p className="text-xs text-gray-500 ml-1 font-mono">
                        {helpText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
