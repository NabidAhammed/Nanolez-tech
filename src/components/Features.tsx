"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users, Target, Rocket } from "lucide-react";

const features = [
    {
        icon: <Code2 className="text-cyber-cyan" size={32} />,
        title: "Modern Tech Stack",
        description: "Built with cutting-edge technologies for optimal performance and scalability.",
    },
    {
        icon: <Palette className="text-cyber-magenta" size={32} />,
        title: "Stunning Design",
        description: "Eye-catching cyberpunk aesthetics that captivate and engage users.",
    },
    {
        icon: <Zap className="text-cyber-lime" size={32} />,
        title: "Lightning Fast",
        description: "Optimized for speed with minimal load times and smooth interactions.",
    },
    {
        icon: <Users className="text-cyber-cyan" size={32} />,
        title: "User-Centric",
        description: "Designed with user experience at the forefront of every decision.",
    },
    {
        icon: <Target className="text-cyber-magenta" size={32} />,
        title: "Goal-Oriented",
        description: "Strategic approach to achieving your business objectives effectively.",
    },
    {
        icon: <Rocket className="text-cyber-lime" size={32} />,
        title: "Future-Ready",
        description: "Scalable solutions that grow with your vision and ambitions.",
    },
];

export const Features: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/20 to-cyber-dark" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-orbitron">
                        WHY CHOOSE <span className="text-cyber-cyan">US</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
                        We combine technical expertise with creative innovation to deliver exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group p-8 bg-cyber-gray/30 border border-cyber-cyan/20 hover:border-cyber-cyan/60 transition-all relative overflow-hidden"
                        >
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative z-10">
                                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold font-orbitron mb-3 text-white group-hover:text-cyber-cyan transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
