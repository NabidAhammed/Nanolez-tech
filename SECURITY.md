# NanoLez Tech - Security Best Practices

## Overview
This document outlines the security measures implemented in this project.

## Security Features Implemented

### 1. Input Validation & Sanitization
- **Zod Schema Validation**: All user inputs are validated using Zod schemas
- **Input Sanitization**: HTML sanitization to prevent XSS attacks
- **Email Validation**: Proper email format validation and sanitization
- **Text Normalization**: Whitespace and control character removal

**Files**:
- `src/lib/sanitize.ts` - Input sanitization utilities
- `src/app/api/*/route.ts` - Validation in API routes

### 2. Rate Limiting
- **In-memory Rate Limiter**: Prevents abuse and DDoS attacks
- **Per-IP Tracking**: Separate limits for different endpoints
- **Configurable Limits**: Easy to adjust limits per endpoint

**Configuration**:
- Contact Form: 3 requests per minute per IP
- Newsletter: 2 requests per minute per IP

**Files**:
- `src/lib/rate-limiter.ts` - Rate limiting implementation

### 3. Security Headers
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **X-XSS-Protection**: Enables browser XSS protection
- **Content-Security-Policy**: Restricts resource loading
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features

**Files**:
- `src/middleware.ts` - Security headers middleware

### 4. CORS Configuration
- **Restricted Origins**: Only allowed domains can make API requests
- **Proper Methods**: Only POST and OPTIONS for API endpoints
- **Preflight Handling**: Proper CORS preflight support

### 5. Error Handling
- **Error Boundaries**: React error boundaries for client-side errors
- **Structured Logging**: Consistent logging with context
- **No Information Leakage**: Error messages don't expose sensitive data
- **Development vs Production**: More details in dev, generic in production

**Files**:
- `src/components/ErrorBoundary.tsx` - Error boundary component
- `src/lib/logger.ts` - Logging utility

### 6. Environment Variable Validation
- **Schema Validation**: Validates env vars at startup
- **Required Checks**: Ensures critical variables are set
- **Type Safety**: TypeScript types for environment variables

**Files**:
- `src/lib/env.ts` - Environment validation

## Best Practices for Developers

### API Routes
1. Always validate inputs with Zod
2. Sanitize user inputs before processing
3. Use rate limiting on all public endpoints
4. Log errors with context (but not sensitive data)
5. Return generic error messages to users

### Environment Variables
1. Never commit `.env` files (already in `.gitignore`)
2. Use `.env.example` as a template
3. Validate environment variables at startup
4. Use type-safe environment variable access

### Client-Side Security
1. Wrap app with ErrorBoundary
2. Sanitize any user-generated content before rendering
3. Use CSP-compliant inline styles and scripts
4. Avoid storing sensitive data in localStorage

### Dependencies
1. Regularly update dependencies: `npm audit`
2. Review security advisories: `npm audit fix`
3. Use Dependabot or similar tools

## Production Checklist

Before deploying to production:

- [ ] All environment variables are set
- [ ] HTTPS is enabled
- [ ] Rate limiting is configured appropriately
- [ ] Error logging is set up (Sentry, LogRocket, etc.)
- [ ] CSP is configured for your domains
- [ ] CORS is restricted to your domains only
- [ ] Database credentials are secure
- [ ] API keys are not exposed in client code
- [ ] Security headers are enabled
- [ ] Input validation is in place
- [ ] SQL injection prevention (if using raw queries)
- [ ] XSS prevention measures are active

## Security Updates

### Email Service Security
- Email content is sanitized before sending
- Reply-to addresses are validated
- Rate limiting prevents spam abuse

### Future Improvements
1. **Redis Rate Limiting**: Replace in-memory rate limiter with Redis
2. **Database Logging**: Store submissions in database with encryption
3. **Email Verification**: Implement double opt-in for newsletter
4. **CAPTCHA**: Add reCAPTCHA for form submissions
5. **Session Management**: Implement proper session handling if adding auth
6. **2FA**: Two-factor authentication for admin areas
7. **WAF**: Web Application Firewall (Cloudflare, AWS WAF)

## Reporting Security Issues

If you discover a security vulnerability, please email: security@nanolez.tech

Do not create public GitHub issues for security vulnerabilities.

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
