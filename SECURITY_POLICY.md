# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of NanoLez Tech seriously. If you discover a security vulnerability, please follow these steps:

### 1. Do Not Disclose Publicly
Please do not create public GitHub issues for security vulnerabilities.

### 2. Contact Us Privately
Email us at: **security@nanolez.tech**

Include in your report:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### 3. Response Time
- We will acknowledge receipt within 48 hours
- We will provide an initial assessment within 5 business days
- We will work with you to understand and resolve the issue

### 4. Disclosure Policy
- We request that you give us adequate time to address the issue before public disclosure
- We will credit you in our security advisory (unless you prefer to remain anonymous)
- We will publish a security advisory once a fix is released

## Security Best Practices for Users

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm audit fix
   ```

2. **Use Strong Environment Variables**
   - Use strong, unique API keys
   - Never commit `.env` files
   - Rotate keys regularly

3. **Enable HTTPS**
   - Always use HTTPS in production
   - Use secure cookies

4. **Monitor Logs**
   - Regularly check application logs
   - Set up error monitoring (Sentry, etc.)

5. **Review Access**
   - Limit API access to known domains
   - Use proper CORS configuration
   - Review rate limits regularly

## Known Security Features

- ✅ Input validation with Zod
- ✅ XSS prevention via input sanitization
- ✅ CSRF protection via Next.js
- ✅ Rate limiting on public endpoints
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ CORS configuration
- ✅ Environment variable validation
- ✅ Error boundary implementation
- ✅ Structured error logging

## Security Checklist for Deployment

- [ ] All environment variables are set securely
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] Rate limiting is active
- [ ] CORS is restricted to your domain
- [ ] Error monitoring is set up
- [ ] Dependencies are up to date
- [ ] Regular security audits are scheduled

## Contact

For security-related questions or concerns:
- Email: security@nanolez.tech
- Response Time: Within 48 hours

Thank you for helping keep NanoLez Tech secure!
