"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "cyber" | "glass" | "gradient";
    glow?: boolean;
    hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", glow = true, hover = true, children, ...props }, ref) => {
        const variantStyles = {
            default: "bg-gradient-to-br from-gray-900 to-black border border-gray-700",
            cyber: "cyber-card",
            glass: "bg-white/5 backdrop-blur-md border border-white/10",
            gradient: "bg-gradient-to-br from-gray-900/50 to-black border border-gray-700/50"
        };

        const { onDrag, onDragStart, onDragEnd, ...htmlProps } = props as any;

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
                className={cn(
                    "relative rounded-xl overflow-hidden transition-all duration-300 p-6",
                    variantStyles[variant],
                    glow && "hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]",
                    className
                )}
                {...htmlProps}
            >
                {/* Top accent line */}
                {variant !== "default" && (
                    <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                )}
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("mb-6 space-y-2", className)}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn("text-2xl font-bold font-orbitron tracking-tight text-white", className)}
            {...props}
        />
    )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-gray-400 text-sm leading-relaxed", className)}
            {...props}
        />
    )
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("space-y-4", className)}
            {...props}
        />
    )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex gap-4 pt-6 border-t border-gray-700", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";
