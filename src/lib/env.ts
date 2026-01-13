/**
 * Environment variable validation
 * Validates required environment variables at build/runtime
 */

import { z } from 'zod';

const envSchema = z.object({
    // Node environment
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

    // Site configuration
    NEXT_PUBLIC_SITE_URL: z.string().url().optional().or(z.literal('')),

    // Email service (at least one should be configured)
    RESEND_API_KEY: z.string().optional().or(z.literal('')),
    EMAIL_FROM: z.string().optional().or(z.literal('')),
    EMAIL_TO: z.string().optional().or(z.literal('')),

    // SMTP configuration (optional, alternative to Resend)
    SMTP_HOST: z.string().optional().or(z.literal('')),
    SMTP_PORT: z.string().regex(/^\d*$/).optional().or(z.literal('')),
    SMTP_SECURE: z.enum(['true', 'false', '']).optional(),
    SMTP_USER: z.string().optional().or(z.literal('')),
    SMTP_PASSWORD: z.string().optional().or(z.literal('')),
});

// Type for validated environment variables
export type Env = z.infer<typeof envSchema>;

/**
 * Validate environment variables
 * Call this at the start of your application
 */
export function validateEnv(): Env {
    try {
        const env = envSchema.parse(process.env);

        // Check if at least one email service is configured (warning only)
        const hasResend = !!env.RESEND_API_KEY && env.RESEND_API_KEY !== '';
        const hasSMTP = !!(env.SMTP_HOST && env.SMTP_HOST !== '' && env.SMTP_USER && env.SMTP_USER !== '' && env.SMTP_PASSWORD && env.SMTP_PASSWORD !== '');

        if (!hasResend && !hasSMTP && process.env.NODE_ENV !== 'development') {
            console.warn(
                '⚠️  Warning: No email service configured. ' +
                'Set RESEND_API_KEY or SMTP credentials to enable email functionality.'
            );
        }

        if ((env.NODE_ENV === 'production' && (!env.NEXT_PUBLIC_SITE_URL || env.NEXT_PUBLIC_SITE_URL === ''))) {
            console.warn(
                '⚠️  Warning: NEXT_PUBLIC_SITE_URL is not set. ' +
                'This may affect CORS and security features.'
            );
        }

        return env;
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.warn('⚠️  Environment variable validation encountered issues:');
            error.issues.forEach((issue) => {
                console.warn(`  - ${issue.path.join('.')}: ${issue.message}`);
            });
            
            // Only throw in production, allow development to continue
            if (process.env.NODE_ENV === 'production') {
                throw new Error('Invalid environment variables in production');
            }
            
            // Return empty/default values for development
            return envSchema.parse({});
        }
        throw error;
    }
}

/**
 * Get validated environment variables
 * Safe to use after calling validateEnv()
 */
export function getEnv(): Env {
    return envSchema.parse(process.env);
}
