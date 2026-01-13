import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap,
    Brain,
    BookOpen,
    Cpu,
    Globe,
    Search,
    Terminal,
    ChevronRight,
    Github,
    Twitter,
    Linkedin,
    Mail,
    Menu,
    X,
    Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Tooltip } from "@/components/ui/Tooltip";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";
import { PageLoader } from "@/components/PageLoader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { sanitizeEmail, sanitizeText } from "@/lib/sanitize";
import { useConfig, getSocial, getCompanyInfo } from "@/lib/useConfig";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || undefined;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const config = useConfig();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#products", label: "Products" },
        { href: "#services", label: "Services" },
        { href: "#features", label: "Features" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled 
                ? "bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-cyan/20 shadow-[0_8px_32px_rgba(0,243,255,0.1)]" 
                : "bg-cyber-dark/50 backdrop-blur border-b border-cyber-cyan/5"
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-lg font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyan-400 flex items-center gap-3 cursor-pointer"
                >
                    <div className="relative">
                        <Zap className="fill-cyan-400" size={24} />
                        <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30" />
                    </div>
                    <span>{config.company.name.toUpperCase()}</span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-1 items-center">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            whileHover={{ color: "#00f3ff" }}
                            className="px-4 py-2 text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm uppercase tracking-tight relative group"
                        >
                            {link.label}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyan-400 group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-cyber-cyan to-cyan-400 text-black font-bold rounded-lg text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
                    >
                        Get Started
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-cyber-cyan p-2 hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-cyber-dark/95 backdrop-blur-xl border-t border-cyber-cyan/10 p-6 space-y-3"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-gray-300 hover:text-cyber-cyan hover:bg-white/5 transition-all rounded-lg font-mono text-sm uppercase tracking-tight"
                            >
                                {link.label}
                            </a>
                        ))}
                        <motion.button 
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-6 py-3 bg-gradient-to-r from-cyber-cyan to-cyan-400 text-black font-bold rounded-lg text-sm uppercase tracking-wider mt-4"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    animate={{ 
                        x: [0, 100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 blur-3xl rounded-full opacity-10"
                />
                <motion.div 
                    animate={{ 
                        x: [0, -100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-purple-500 to-pink-600 blur-3xl rounded-full opacity-10"
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-widest"
                    >
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Welcome to the Future
                    </motion.div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter font-orbitron">
                            <span className="text-white">Building</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
                                The Future
                            </span>
                            <br />
                            <span className="text-white">of Intelligence</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 font-rajdhani max-w-2xl mx-auto leading-relaxed">
                            We bridge the gap between human curiosity and artificial brilliance. Architecting next-generation AI ecosystems for education and industry.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 243, 255, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl text-base uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all font-orbitron"
                        >
                            Explore Solutions
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, borderColor: "#00f3ff" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 sm:px-10 py-4 border-2 border-gray-600 text-white hover:border-cyan-400 hover:bg-cyan-400/5 font-bold rounded-xl text-base uppercase tracking-wider transition-all font-orbitron flex items-center justify-center gap-2"
                        >
                            View Roadmap
                            <ChevronRight size={20} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute left-10 top-1/2 text-cyber-cyan/10 hidden lg:block"
            >
                <Cpu size={80} />
            </motion.div>
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                className="absolute right-10 top-1/3 text-purple-400/10 hidden lg:block"
            >
                <Brain size={80} />
            </motion.div>
        </section>
    );
};

const Products = () => {
    const config = useConfig();

    const productIcons: { [key: string]: React.ReactNode } = {
        "scholarmind-ai": <BookOpen className="text-cyan-400" size={40} />,
        "eduai": <Brain className="text-purple-400" size={40} />
    };

    const productColors: { [key: string]: string } = {
        "scholarmind-ai": "from-cyan-400 to-blue-500",
        "eduai": "from-purple-400 to-pink-500"
    };

    return (
        <section id="products" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 font-orbitron">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Products</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Cutting-edge AI solutions designed for the next generation of learners and enterprises.</p>
                </motion.div>

                {/* Product Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {config.products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 p-8"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${productColors[product.id] || "from-cyan-400 to-blue-500"} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="mb-6"
                                >
                                    <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${productColors[product.id] || "from-cyan-400 to-blue-500"} bg-opacity-10`}>
                                        {productIcons[product.id] || <Sparkles className="text-cyan-400" size={40} />}
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-3xl font-bold mb-4 font-orbitron text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
                                    {product.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                                    {product.description || "Innovative AI-powered solution for modern challenges"}
                                </p>

                                {/* Features */}
                                {(product.features || []).length > 0 && (
                                    <div className="mb-8 space-y-2">
                                        {product.features.slice(0, 3).map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3 text-gray-300"
                                            >
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${productColors[product.id] || "from-cyan-400 to-blue-500"}`} />
                                                <span className="text-sm font-mono">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {/* CTA Button */}
                                <motion.a
                                    whileHover={{ x: 10 }}
                                    href={`https://${product.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${productColors[product.id] || "from-cyan-400 to-blue-500"} text-black font-bold rounded-lg hover:shadow-[0_0_20px] transition-all text-sm uppercase tracking-wider`}
                                >
                                    Access System
                                    <motion.span whileHover={{ x: 5 }}>
                                        <Sparkles size={16} />
                                    </motion.span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    const config = useConfig();

    const serviceIcons: { [key: string]: React.ReactNode } = {
        "enterprise-web": <Globe className="text-cyan-400" size={40} />,
        "seo": <Search className="text-purple-400" size={40} />,
        "competitive": <Terminal className="text-green-400" size={40} />
    };

    return (
        <section id="services" className="py-32 relative bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 font-orbitron">
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs</p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {config.services.map((service, idx) => (
                        <motion.div 
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-black border border-gray-700 hover:border-cyan-400/50 backdrop-blur-sm p-8 transition-all duration-300"
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />

                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: -5 }}
                                className="mb-6 inline-block p-4 bg-cyan-400/10 rounded-xl group-hover:bg-cyan-400/20 transition-colors"
                            >
                                {serviceIcons[service.id] || <Sparkles className="text-cyan-400" size={40} />}
                            </motion.div>

                            {/* Content */}
                            <h4 className="text-2xl font-bold mb-3 font-orbitron text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
                                {service.name}
                            </h4>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Features */}
                            {(service.features || []).length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {service.features.slice(0, 3).map((feature, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono uppercase rounded-full cursor-help hover:border-cyan-400/60 transition-all"
                                        >
                                            {feature}
                                        </motion.span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Team = () => {
    const config = useConfig();
    const founderTeam = config.team[0] || {
        name: "NABID AHAMMED LIMON",
        role: "Founder & CTO",
        description: "A visionary developer and innovator specialized in AI-driven educational technology. With expertise in competitive programming and enterprise-scale web architecture."
    };

    return (
        <section id="founder" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10"
                            />
                            <Brain size={140} className="text-cyan-400 opacity-30 relative z-10" />
                        </div>
                        {/* Decorative corners */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-400" />
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-blue-500" />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Label */}
                        <div className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
                            Meet the Visionary
                        </div>

                        {/* Name */}
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 font-orbitron text-white">
                                {founderTeam.name}
                            </h2>
                            <p className="text-2xl text-cyan-400 font-semibold">{founderTeam.role}</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed font-rajdhani">
                            {(founderTeam as any).description || "A visionary developer and innovator specialized in AI-driven educational technology."}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-700">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-cyan-400 font-orbitron">5+</div>
                                <p className="text-gray-400 text-sm mt-2">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-cyan-400 font-orbitron">100+</div>
                                <p className="text-gray-400 text-sm mt-2">Projects</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-cyan-400 font-orbitron">10k+</div>
                                <p className="text-gray-400 text-sm mt-2">Users</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            {founderTeam.github && (
                                <motion.a
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    href={founderTeam.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 bg-white/5 hover:bg-cyan-400/10 text-gray-400 hover:text-cyan-400 transition-all"
                                >
                                    <Github size={24} />
                                </motion.a>
                            )}
                            <motion.a
                                whileHover={{ scale: 1.1, y: -5 }}
                                href="#"
                                className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 bg-white/5 hover:bg-cyan-400/10 text-gray-400 hover:text-cyan-400 transition-all"
                            >
                                <Linkedin size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -5 }}
                                href="#"
                                className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 bg-white/5 hover:bg-cyan-400/10 text-gray-400 hover:text-cyan-400 transition-all"
                            >
                                <Twitter size={24} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!CONTACT_ENDPOINT) {
            console.warn("VITE_CONTACT_ENDPOINT is not set. Contact form will mock success locally.");
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const payload = {
            name: sanitizeText(formData.name),
            email: sanitizeEmail(formData.email),
            message: sanitizeText(formData.message),
        };

        if (!CONTACT_ENDPOINT) {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 4000);
            return;
        }

        try {
            const response = await fetch(CONTACT_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok && data.success !== false) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Failed to send message");
            }
        } catch (error) {
            console.error("Contact submission error", error);
            setStatus("error");
            setErrorMessage("Network error. Please try again.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 font-orbitron">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Have a question or project idea? We'd love to hear from you.</p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700 shadow-2xl"
                >
                    {/* Top gradient line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent" />

                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                        {/* Status Messages */}
                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 font-mono flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    Message sent successfully! We'll get back to you soon.
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 font-mono flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    {errorMessage}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Form Fields */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-2"
                            >
                                <label className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    minLength={2}
                                    className="w-full bg-white/5 border border-gray-700 focus:border-cyan-400 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 outline-none transition-all focus:shadow-[0_0_20px_rgba(0,243,255,0.1)]"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-2"
                            >
                                <label className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-white/5 border border-gray-700 focus:border-cyan-400 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 outline-none transition-all focus:shadow-[0_0_20px_rgba(0,243,255,0.1)]"
                                />
                            </motion.div>
                        </div>

                        {/* Message Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <label className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project or inquiry..."
                                required
                                minLength={10}
                                rows={6}
                                className="w-full bg-white/5 border border-gray-700 focus:border-cyan-400 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 outline-none transition-all focus:shadow-[0_0_20px_rgba(0,243,255,0.1)] resize-none"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg uppercase tracking-wider text-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all font-orbitron"
                        >
                            {status === "loading" ? (
                                <span className="flex items-center justify-center gap-3">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                                    />
                                    Sending...
                                </span>
                            ) : (
                                "Send Message"
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = () => {
    const config = useConfig();
    const social = getSocial();

    return (
        <footer className="relative z-10 border-t border-gray-700 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="text-lg font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center gap-2">
                            <Zap className="fill-cyan-400 text-cyan-400" size={24} />
                            <span>{config.company.name.toUpperCase()}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building the future of AI-driven technology and innovation.
                        </p>
                    </motion.div>

                    {/* Products */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="font-bold text-white uppercase text-sm tracking-wider">Products</h4>
                        <ul className="space-y-2">
                            {config.products.slice(0, 3).map((product) => (
                                <li key={product.id}>
                                    <a href={`https://${product.url}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                        {product.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="font-bold text-white uppercase text-sm tracking-wider">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#products" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Features</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Services</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
                        </ul>
                    </motion.div>

                    {/* Newsletter Signup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h4 className="font-bold text-white uppercase text-sm tracking-wider">Stay Updated</h4>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/5 border border-gray-700 border-r-0 px-3 py-2 text-sm text-white placeholder:text-gray-600 outline-none rounded-l-lg"
                            />
                            <button className="px-3 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm rounded-r-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all">
                                →
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
                            © 2025 {config.company.name}. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {social.github && (
                                <motion.a
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    href={social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all"
                                >
                                    <Github size={18} />
                                </motion.a>
                            )}
                            {social.twitter && (
                                <motion.a
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    href={social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all"
                                >
                                    <Twitter size={18} />
                                </motion.a>
                            )}
                            {social.github && (
                                <motion.a
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    href={`https://github.com/${social.github}`}
                                    className="p-2 rounded-lg border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all"
                                >
                                    <Mail size={18} />
                                </motion.a>
                            )}
                            <motion.a
                                whileHover={{ scale: 1.1, y: -3 }}
                                href="#"
                                className="p-2 rounded-lg border border-gray-700 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-all"
                            >
                                <Linkedin size={18} />
                            </motion.a>
                        </div>

                        {/* Links */}
                        <div className="flex gap-6 text-gray-500 text-xs font-mono uppercase tracking-widest">
                            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
    return (
        <ErrorBoundary>
            <div className="scanlines" />
            <div className="fixed inset-0 bg-grid pointer-events-none" />
            <PageLoader />
            <ScrollProgress />
            <ScrollToTop />
            <main className="relative bg-cyber-dark text-white font-rajdhani">
                <Navbar />
                <Hero />
                <Products />
                <Services />
                <Features />
                <Testimonials />
                <Team />
                <FAQ />
                <Newsletter />
                <Contact />
                <Footer />
            </main>
        </ErrorBoundary>
    );
}
