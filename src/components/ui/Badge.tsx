"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "cyber" | "success" | "warning" | "danger" | "primary";
    size?: "sm" | "md" | "lg";
    pulse?: boolean;
}

const variantStyles = {
    default: "bg-gray-800 border border-gray-700 text-gray-300",
    cyber: "bg-cyan-400/10 border border-cyan-400/50 text-cyan-400 font-mono text-xs uppercase",
    success: "bg-green-500/10 border border-green-500/50 text-green-400 font-mono text-xs uppercase",
    warning: "bg-yellow-500/10 border border-yellow-500/50 text-yellow-400 font-mono text-xs uppercase",
    danger: "bg-red-500/10 border border-red-500/50 text-red-400 font-mono text-xs uppercase",
    primary: "bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/50 text-cyan-400 font-mono text-xs uppercase"
};

const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", size = "md", pulse = false, children }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={{ scale: 1.05 }}
                className={cn(
                    "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-default",
                    variantStyles[variant],
                    sizeStyles[size],
                    pulse && "animate-pulse",
                    className
                )}
                style={{ display: "inline-flex" }}
            >
                {pulse && (
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            variant === "default" && "bg-gray-400",
                            variant === "cyber" && "bg-cyan-400",
                            variant === "success" && "bg-green-400",
                            variant === "warning" && "bg-yellow-400",
                            variant === "danger" && "bg-red-400",
                            variant === "primary" && "bg-cyan-400"
                        )}
                    />
                )}
                {children}
            </motion.div>
        );
    }
);

Badge.displayName = "Badge";

