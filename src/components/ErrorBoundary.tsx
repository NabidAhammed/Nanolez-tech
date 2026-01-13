"use client";

import React, { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // Log error to console in development
        if (process.env.NODE_ENV === 'development') {
            console.error('ErrorBoundary caught an error:', error, errorInfo);
        }
        
        // In production, you would send this to an error tracking service
        // Example: Sentry, LogRocket, etc.
    }

    render(): ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen bg-cyber-dark flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md w-full text-center"
                    >
                        <div className="mb-6 flex justify-center">
                            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-10 h-10 text-red-500" />
                            </div>
                        </div>
                        
                        <h1 className="text-3xl font-bold font-orbitron text-white mb-4">
                            Something Went Wrong
                        </h1>
                        
                        <p className="text-gray-400 mb-8 font-mono">
                            We encountered an unexpected error. Our team has been notified.
                        </p>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded p-4 mb-6 text-left">
                                <p className="text-red-400 font-mono text-sm mb-2">
                                    {this.state.error.name}: {this.state.error.message}
                                </p>
                                {this.state.error.stack && (
                                    <pre className="text-xs text-red-300/70 overflow-auto max-h-40">
                                        {this.state.error.stack}
                                    </pre>
                                )}
                            </div>
                        )}

                        <button
                            onClick={() => window.location.reload()}
                            className="cyber-button"
                        >
                            Reload Page
                        </button>
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}
