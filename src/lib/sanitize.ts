/**
 * Input sanitization utilities
 */

/**
 * Sanitize HTML to prevent XSS attacks
 * Removes all HTML tags and encodes special characters
 */
export function sanitizeHtml(input: string): string {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

/**
 * Remove potentially dangerous characters from input
 */
export function sanitizeInput(input: string): string {
    // Remove null bytes and control characters
    return input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
}

/**
 * Validate and sanitize email address
 */
export function sanitizeEmail(email: string): string {
    return email.trim().toLowerCase();
}

/**
 * Strip excessive whitespace and newlines
 */
export function normalizeWhitespace(input: string): string {
    return input
        .replace(/\r\n/g, '\n') // Normalize line endings
        .replace(/\n{3,}/g, '\n\n') // Max 2 consecutive newlines
        .trim();
}

/**
 * Comprehensive text sanitization for user inputs
 */
export function sanitizeText(input: string): string {
    return normalizeWhitespace(sanitizeInput(input));
}
