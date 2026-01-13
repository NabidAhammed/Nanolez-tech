# NanoLez Tech Website - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Nanolez-Tech/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts      # Contact form API
│   │   │   └── newsletter/route.ts   # Newsletter API
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Homepage
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Accordion.tsx         # FAQ accordion
│   │   │   ├── Badge.tsx             # Status badges
│   │   │   ├── Card.tsx              # Card components
│   │   │   ├── CyberButton.tsx       # Styled buttons
│   │   │   ├── Input.tsx             # Form inputs
│   │   │   └── Tooltip.tsx           # Tooltips
│   │   ├── Counter.tsx               # Animated counter
│   │   ├── FAQ.tsx                   # FAQ section
│   │   ├── Features.tsx              # Features section
│   │   ├── Newsletter.tsx            # Newsletter signup
│   │   ├── PageLoader.tsx            # Initial loader
│   │   ├── ScrollProgress.tsx        # Scroll indicator
│   │   ├── ScrollToTop.tsx           # Back to top button
│   │   └── Testimonials.tsx          # Client testimonials
│   └── lib/
│       └── utils.ts                  # Utility functions
├── tailwind.config.js                # Tailwind config
├── tsconfig.json                     # TypeScript config
└── package.json                      # Dependencies
```

## 🎨 Components Usage

### Badge
```tsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="cyber" pulse>New Feature</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Beta</Badge>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

<Card variant="cyber" glow>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Tooltip
```tsx
import { Tooltip } from '@/components/ui/Tooltip';

<Tooltip content="Helpful information" position="top">
  <button>Hover me</button>
</Tooltip>
```

### Accordion
```tsx
import { Accordion } from '@/components/ui/Accordion';

<Accordion 
  items={[
    { title: "Question 1", content: "Answer 1" },
    { title: "Question 2", content: "Answer 2" }
  ]}
/>
```

## 🎯 Customization

### Colors
Edit [tailwind.config.js](tailwind.config.js) to change the color scheme:

```js
colors: {
  cyber: {
    dark: "#050505",
    gray: "#121212",
    cyan: "#00f3ff",      // Primary accent
    magenta: "#ff00ff",   // Secondary accent
    lime: "#ccff00",      // Tertiary accent
    blue: "#0066ff",
  },
}
```

### Fonts
Fonts are configured in [src/app/layout.tsx](src/app/layout.tsx):
- **Orbitron** - Headings
- **Rajdhani** - Body text
- **JetBrains Mono** - Code/Terminal

### Animations
Custom animations are in [src/app/globals.css](src/app/globals.css):
- `.fade-in` - Fade in effect
- `.fade-in-up` - Fade from bottom
- `.float` - Floating animation
- `.glitch-text` - Glitch effect

## 🔧 API Integration

### Contact Form
The contact form sends to `/api/contact`. Configure email service:

1. **Using Resend:**
```env
RESEND_API_KEY=your_api_key
EMAIL_FROM=NanoLez Tech <hello@yourdomain.com>
EMAIL_TO=contact@yourdomain.com
```

2. **Using SMTP:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASSWORD=your_password
EMAIL_FROM=NanoLez Tech <hello@yourdomain.com>
EMAIL_TO=contact@yourdomain.com
```

### Newsletter
Configure newsletter service in `/api/newsletter/route.ts`:
- Mailchimp
- ConvertKit
- SendGrid
- Or custom solution

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm run start
```

## 🎭 Features Included

✅ Responsive design  
✅ Dark theme with cyberpunk aesthetics  
✅ Smooth animations  
✅ Contact form with validation  
✅ Newsletter subscription  
✅ FAQ accordion  
✅ Client testimonials  
✅ Feature showcase  
✅ Loading states  
✅ Scroll progress indicator  
✅ Back to top button  
✅ SEO optimized  
✅ TypeScript support  

## 📝 Environment Variables

Create a `.env.local` file:

```env
# Email Configuration (choose one)
RESEND_API_KEY=re_xxxxx
# OR
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASSWORD=your_password

# Email Addresses
EMAIL_FROM=NanoLez Tech <hello@yourdomain.com>
EMAIL_TO=contact@yourdomain.com

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🛠️ Development Tips

1. **Hot Reload**: Changes auto-reload in dev mode
2. **Component Testing**: Test components in isolation
3. **Performance**: Use Next.js Image for optimization
4. **SEO**: Update metadata in `layout.tsx`
5. **Analytics**: Add Google Analytics or similar

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clean build
rm -rf .next
npm run build
```

## 📧 Support

For questions or issues:
- Email: contact@nanolez.tech
- GitHub: [Your Repository]
- Documentation: See UI_UX_DOCUMENTATION.md

---

**Built with ❤️ by NanoLez Tech**
