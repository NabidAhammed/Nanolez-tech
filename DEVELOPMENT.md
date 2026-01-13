# NanoLez Tech - Development Guide

## Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── newsletter/    # Newsletter subscription endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with error boundary
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (Button, Input, Card)
│   └── ErrorBoundary.tsx # Error boundary component
└── lib/                  # Utility libraries
    ├── env.ts            # Environment variable validation
    ├── logger.ts         # Logging utility
    ├── rate-limiter.ts   # Rate limiting
    ├── sanitize.ts       # Input sanitization
    └── utils.ts          # General utilities (cn helper)
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Nanolez-Tech
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Edit `.env` and add your configuration.

4. Run development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Environment Variables

See `.env.example` for required variables.

### Required for Email Functionality

Choose ONE email service:

**Option 1: Resend (Recommended)**
```env
RESEND_API_KEY=your_api_key
EMAIL_FROM="NanoLez Tech <noreply@yourdomain.com>"
EMAIL_TO="contact@nanolez.tech"
```

**Option 2: SMTP (Gmail, etc.)**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM="NanoLez Tech <noreply@yourdomain.com>"
EMAIL_TO="contact@nanolez.tech"
```

## Code Quality

### TypeScript
- Strict mode enabled
- No explicit `any` (use `unknown` instead)
- Proper type annotations for function parameters

### ESLint
- Configured for Next.js 15 and TypeScript
- Security rules enabled
- Run `npm run lint` before committing

### Code Style
- Use functional components with hooks
- Use proper React patterns (forwardRef for components)
- Prefer named exports over default exports (except pages)
- Use proper error boundaries

## Security Guidelines

1. **Never commit sensitive data**
   - `.env` is in `.gitignore`
   - Never hardcode API keys

2. **Validate all user inputs**
   - Use Zod schemas
   - Sanitize inputs before processing

3. **Rate limit all public endpoints**
   - Already implemented for contact and newsletter

4. **Use proper error handling**
   - Don't expose sensitive info in errors
   - Log errors with context

See [SECURITY.md](./SECURITY.md) for detailed security documentation.

## API Documentation

### POST /api/contact
Contact form submission

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We'll get back to you soon."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Invalid email address" }
  ]
}
```

**Rate Limit:** 3 requests per minute per IP

### POST /api/newsletter
Newsletter subscription

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter!"
}
```

**Rate Limit:** 2 requests per minute per IP

## Styling

### Tailwind CSS
- Custom cyber-themed colors in `tailwind.config.js`
- Custom animations and utilities
- Component-specific classes

### Custom Fonts
- Orbitron - Headings
- Rajdhani - Body text
- JetBrains Mono - Code/technical text

### Cyber Button
```tsx
<button className="cyber-button">Click Me</button>
```

Custom button style with cyber theme animations.

## Components

### CyberButton
```tsx
import { CyberButton } from '@/components/ui/CyberButton';

<CyberButton variant="primary" isLoading={false}>
  Submit
</CyberButton>
```

### Input
```tsx
import { Input } from '@/components/ui/Input';

<Input 
  label="Email" 
  error={errors.email}
  icon={<Mail size={16} />}
/>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

<Card variant="cyber" hover glow>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Build
```bash
npm run build
npm start
```

## Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npx tsc --noEmit`

### Email Not Working
- Check environment variables are set
- Verify API keys are valid
- Check logs in terminal
- For Gmail: use app-specific password

### Rate Limiting Issues
- Clear rate limit: restart server (in-memory)
- For production: use Redis rate limiter

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint`
4. Test your changes
5. Create a pull request

## License

Proprietary - All rights reserved

## Support

For questions or issues:
- Email: contact@nanolez.tech
- GitHub Issues: (if repository is public)
