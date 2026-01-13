/**
 * Simple in-memory rate limiter
 * For production, use Redis or a proper rate limiting service
 */

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up old entries every 5 minutes
setInterval(() => {
    const now = Date.now();
    for (const [key, value] of rateLimitMap.entries()) {
        if (value.resetTime < now) {
            rateLimitMap.delete(key);
        }
    }
}, 5 * 60 * 1000);

export interface RateLimitConfig {
    windowMs: number; // Time window in milliseconds
    maxRequests: number; // Maximum requests allowed in the time window
}

export function checkRateLimit(
    identifier: string,
    config: RateLimitConfig = { windowMs: 60000, maxRequests: 5 }
): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const entry = rateLimitMap.get(identifier);

    // No existing entry or expired entry
    if (!entry || entry.resetTime < now) {
        const resetTime = now + config.windowMs;
        rateLimitMap.set(identifier, { count: 1, resetTime });
        return { allowed: true, remaining: config.maxRequests - 1, resetTime };
    }

    // Check if limit exceeded
    if (entry.count >= config.maxRequests) {
        return { allowed: false, remaining: 0, resetTime: entry.resetTime };
    }

    // Increment count
    entry.count++;
    rateLimitMap.set(identifier, entry);
    return { allowed: true, remaining: config.maxRequests - entry.count, resetTime: entry.resetTime };
}
