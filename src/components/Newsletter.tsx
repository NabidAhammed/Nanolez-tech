import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sanitizeEmail } from "@/lib/sanitize";

const NEWSLETTER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT || undefined;

export const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!NEWSLETTER_ENDPOINT) {
            console.warn("VITE_NEWSLETTER_ENDPOINT is not set. Newsletter form will mock success locally.");
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        const sanitizedEmail = sanitizeEmail(email);

        if (!NEWSLETTER_ENDPOINT) {
            setStatus("success");
            setEmail("");
            setMessage("Demo subscription recorded locally. Configure VITE_NEWSLETTER_ENDPOINT to enable live submissions.");
            setTimeout(() => setStatus("idle"), 5000);
            return;
        }

        try {
            const response = await fetch(NEWSLETTER_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: sanitizedEmail }),
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok && data.success !== false) {
                setStatus("success");
                setEmail("");
                setMessage(data.message || "Successfully subscribed to our newsletter!");
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setMessage(data.message || "Failed to subscribe. Please try again.");
            }
        } catch {
            setStatus("error");
            setMessage("Network error. Please try again later.");
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent" />
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyber-cyan/50 bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono uppercase tracking-[0.3em] mb-6">
                            <Mail size={14} />
                            <span>Stay Connected</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 font-orbitron">
                            JOIN THE <span className="text-cyber-cyan">NEXUS</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
                            Get exclusive updates on new AI features, product launches, and industry insights delivered directly to your inbox.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="cyber-card max-w-2xl mx-auto"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative group">
                            <Mail
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan/50 group-focus-within:text-cyber-cyan transition-colors"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                disabled={status === "loading"}
                                className="w-full bg-cyber-dark/60 border border-cyber-cyan/30 pl-12 pr-4 py-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] disabled:opacity-50"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="cyber-button px-8 py-4 flex items-center justify-center gap-2 min-w-[140px] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                                    />
                                    <span>SENDING</span>
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>SUBSCRIBE</span>
                                </>
                            )}
                        </button>
                    </form>

                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-4 bg-green-500/10 border border-green-500/50 text-green-400 text-sm flex items-center gap-2 font-mono"
                        >
                            <CheckCircle2 size={18} />
                            <span>{message}</span>
                        </motion.div>
                    )}

                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-4 bg-red-500/10 border border-red-500/50 text-red-400 text-sm flex items-center gap-2 font-mono"
                        >
                            <AlertCircle size={18} />
                            <span>{message}</span>
                        </motion.div>
                    )}

                    <p className="mt-4 text-xs text-gray-500 font-mono text-center">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 w-32 h-32 bg-cyber-cyan/10 blur-[80px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-32 h-32 bg-cyber-magenta/10 blur-[80px] -translate-y-1/2" />
            </div>
        </section>
    );
};
