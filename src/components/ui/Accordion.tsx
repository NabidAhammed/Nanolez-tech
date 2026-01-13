"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border border-cyber-cyan/20 bg-cyber-gray/30 overflow-hidden">
            <button
                onClick={onClick}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-cyber-cyan/5 transition-colors group"
            >
                <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {title}
                </h3>
                <div className="text-cyber-cyan">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 py-4 border-t border-cyber-cyan/20 bg-black/20">
                            <p className="text-gray-400 font-mono leading-relaxed">{content}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    items: Array<{ title: string; content: string }>;
    allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openItems.includes(index)}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};
