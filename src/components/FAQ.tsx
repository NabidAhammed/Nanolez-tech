"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Accordion } from "./ui/Accordion";

const faqItems = [
    {
        title: "What is ScholarMind AI and how does it work?",
        content: "ScholarMind AI is an intelligent research assistant that helps you synthesize complex academic papers, discover hidden connections, and accelerate your research process. It uses advanced natural language processing to analyze papers and provide meaningful insights in seconds.",
    },
    {
        title: "Is NanoLez EduAI suitable for all skill levels?",
        content: "Absolutely! NanoLez EduAI creates personalized learning roadmaps tailored to your current skill level and learning pace. Whether you're a beginner or an advanced learner, our AI adapts to your needs and provides appropriate challenges and resources.",
    },
    {
        title: "What technologies do you use for web development?",
        content: "We specialize in cutting-edge technologies including Next.js, React, TypeScript, TailwindCSS, and modern backend solutions. We focus on building scalable, high-performance web systems that deliver exceptional user experiences.",
    },
    {
        title: "How can your SEO services improve my online presence?",
        content: "Our data-driven SEO approach combines technical optimization, content strategy, and competitive analysis to improve your search rankings. We use advanced analytics and AI-powered insights to ensure your brand stands out in the digital landscape.",
    },
    {
        title: "Do you offer competitive programming training?",
        content: "Yes! We provide comprehensive training in algorithmic problem-solving and competitive programming. Our expert guidance covers data structures, algorithms, and problem-solving strategies used in platforms like Codeforces, LeetCode, and more.",
    },
    {
        title: "What makes NanoLez Tech different from other AI companies?",
        content: "We bridge the gap between academic excellence and practical implementation. Our founder's background in competitive programming, AI research, and web development allows us to deliver solutions that are both theoretically sound and practically effective.",
    },
    {
        title: "Can I integrate your AI tools into my existing workflow?",
        content: "Our AI solutions are designed with flexibility in mind. We offer APIs and integration support to seamlessly incorporate our tools into your existing systems. Contact us to discuss your specific integration needs.",
    },
    {
        title: "What kind of support do you provide?",
        content: "We offer comprehensive support including documentation, tutorials, email support, and for enterprise clients, dedicated account management. Our AI systems also provide 24/7 automated assistance for common queries.",
    },
];

export const FAQ: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyber-cyan/5 blur-[120px]" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyber-magenta/5 blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyber-cyan/50 bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono uppercase tracking-[0.3em] mb-6">
                        <HelpCircle size={14} />
                        <span>Knowledge Base</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-orbitron">
                        FREQUENTLY ASKED <span className="text-cyber-cyan">QUESTIONS</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
                        Find answers to common questions about our AI solutions and services. Can&apos;t find what you&apos;re looking for? Contact us directly.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion items={faqItems} />
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 font-mono mb-6">
                        Still have questions? We&apos;re here to help.
                    </p>
                    <a
                        href="#contact"
                        className="cyber-button inline-block px-8 py-4"
                    >
                        CONTACT SUPPORT
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
