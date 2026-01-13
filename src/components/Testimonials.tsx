"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Research Director",
        company: "Stanford AI Lab",
        content: "ScholarMind AI has revolutionized how our team conducts literature reviews. What used to take weeks now takes hours. The synthesis quality is outstanding.",
        rating: 5,
    },
    {
        name: "James Chen",
        role: "Software Engineer",
        company: "Tech Innovations Inc",
        content: "NanoLez Tech delivered a web solution that exceeded our expectations. Their attention to detail and cutting-edge approach set them apart from the competition.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "PhD Candidate",
        company: "MIT",
        content: "As a graduate student, NanoLez EduAI has been a game-changer. The personalized learning paths helped me master complex topics faster than I ever thought possible.",
        rating: 5,
    },
    {
        name: "Michael Thompson",
        role: "CTO",
        company: "DataFlow Solutions",
        content: "Working with NanoLez Tech was an absolute pleasure. Their technical expertise and innovative solutions helped us scale our platform efficiently.",
        rating: 5,
    },
    {
        name: "Prof. David Lee",
        role: "Department Head",
        company: "Harvard University",
        content: "The AI educational tools from NanoLez are transforming how we teach. Students are more engaged and learning outcomes have improved significantly.",
        rating: 5,
    },
    {
        name: "Alex Johnson",
        role: "Competitive Programmer",
        company: "CodeForces Master",
        content: "The algorithmic training resources and SEO optimization services have helped me level up my skills. Highly recommended for anyone serious about competitive programming.",
        rating: 5,
    },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({
    testimonial,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card variant="glass" glow className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <Quote size={32} className="text-cyber-cyan/30 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className="fill-cyber-cyan text-cyber-cyan"
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 mb-6 flex-1 leading-relaxed font-mono text-sm">
                        &quot;{testimonial.content}&quot;
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-magenta flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-bold text-white font-orbitron text-sm">
                                {testimonial.name}
                            </h4>
                            <p className="text-xs text-gray-500 font-mono">
                                {testimonial.role} @ {testimonial.company}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export const Testimonials: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-cyber-gray/20">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyber-cyan/50 bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono uppercase tracking-[0.3em] mb-6">
                        <Star size={14} />
                        <span>Client Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-orbitron">
                        TRUSTED BY <span className="text-cyber-cyan">INNOVATORS</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
                        Hear from researchers, developers, and learners who are shaping the future with our AI solutions.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-cyber-cyan/20 py-12"
                >
                    {[
                        { value: "10K+", label: "Active Users" },
                        { value: "500+", label: "Research Papers Analyzed" },
                        { value: "98%", label: "Satisfaction Rate" },
                        { value: "24/7", label: "AI Support" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-5xl font-black text-cyber-cyan font-orbitron mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 font-mono uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
