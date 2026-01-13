/**
 * Logger utility for consistent application logging
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogContext {
    [key: string]: unknown;
}

class Logger {
    private isDevelopment = process.env.NODE_ENV === 'development';

    private formatMessage(level: LogLevel, message: string, context?: LogContext): string {
        const timestamp = new Date().toISOString();
        const contextStr = context ? ` | ${JSON.stringify(context)}` : '';
        return `[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`;
    }

    info(message: string, context?: LogContext): void {
        // eslint-disable-next-line no-console
        console.log(this.formatMessage('info', message, context));
    }

    warn(message: string, context?: LogContext): void {
        console.warn(this.formatMessage('warn', message, context));
    }

    error(message: string, error?: Error | unknown, context?: LogContext): void {
        const errorContext = {
            ...context,
            ...(error instanceof Error && {
                errorName: error.name,
                errorMessage: error.message,
                ...(this.isDevelopment && { stack: error.stack })
            })
        };
        console.error(this.formatMessage('error', message, errorContext));
    }

    debug(message: string, context?: LogContext): void {
        if (this.isDevelopment) {
            // eslint-disable-next-line no-console
            console.debug(this.formatMessage('debug', message, context));
        }
    }
}

export const logger = new Logger();
