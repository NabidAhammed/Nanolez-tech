# Nanolez Tech - Vercel Deployment Guide

## Quick Start

### Prerequisites
- Vercel Account (https://vercel.com)
- GitHub repository connected to Vercel
- Node.js 20.x or higher

### Step 1: Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" > "Project"
3. Select your GitHub repository "Nanolez-Tech"
4. Click "Import"

### Step 2: Configure Build Settings

The project is pre-configured in `vercel.json`:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `20.x`

These will be auto-detected, but verify in Project Settings if needed.

### Step 3: Set Environment Variables

In Vercel Project Settings > Environment Variables, add:

```
VITE_CONTACT_ENDPOINT = [Your contact form API endpoint]
VITE_API_BASE_URL = https://api.nanolez.tech
NODE_ENV = production
```

### Step 4: Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete (usually 30-60 seconds)
3. Your site will be live at `nanolez-tech.vercel.app`

## Automatic Deployments

Every push to the main branch will:
1. Trigger a new build automatically
2. Run tests and checks
3. Deploy to production if successful
4. Generate a unique preview URL for testing

## Custom Domain Setup

To connect a custom domain:

1. In Vercel > Project Settings > Domains
2. Click "Add" and enter your domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (usually 5-30 minutes)

### DNS Configuration for nanolez.tech

If using Vercel's name servers:
- Update your domain registrar to use Vercel's name servers

If using your current registrar's DNS:
- Add CNAME record pointing to `cname.vercel-dns.com`

## Monitoring & Analytics

### View Deployment Logs
1. Go to Vercel Dashboard > Project > Deployments
2. Click on any deployment to see build logs
3. Check the "Functions" tab for API performance

### Performance Analytics
1. Go to Project Settings > Analytics
2. Monitor Core Web Vitals
3. Check page performance metrics

## Troubleshooting

### Build Failures
1. Check build logs in Vercel Dashboard
2. Verify all environment variables are set
3. Run `npm run build` locally to test

### Deployment Issues
1. Clear Vercel cache: Settings > Git > Clear Cache
2. Redeploy manually from Deployments tab
3. Check GitHub Actions logs for branch protection rules

### Environment Variable Issues
1. Verify variables are in correct environment (Production/Preview)
2. Check for typos in variable names
3. Ensure values don't have extra spaces

## File Structure for Vercel

```
nanolez-tech/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── public/
│   ├── index.html
│   └── ...
├── package.json
├── vite.config.ts
├── vercel.json           # Vercel config
├── .env.example          # Environment template
└── tsconfig.json
```

## GitHub Integration

### Auto-Deploy Configuration

The project is configured for:
- ✅ Automatic deployments on main branch push
- ✅ Preview deployments for pull requests
- ✅ Automatic rollback on failed builds
- ✅ Production deployments only from main

### Branch Protection Rules

Recommended GitHub Settings:
1. Require status checks to pass before merging
2. Dismiss stale pull request approvals
3. Require branches to be up to date

## Performance Optimization

### Already Configured
- ✅ Vite production build (optimized bundles)
- ✅ React Fast Refresh for development
- ✅ Tree-shaking for unused code removal
- ✅ CSS minification
- ✅ Image optimization ready

### Recommended Next Steps
1. Add image compression
2. Enable Vercel Analytics
3. Set up error tracking (Sentry)
4. Configure caching headers

## Security Checklist

- [x] No sensitive data in code
- [x] Environment variables properly configured
- [x] HTTPS enabled (automatic on Vercel)
- [x] Secure headers configured
- [x] CORS properly configured
- [ ] Add Content Security Policy
- [ ] Set up DDoS protection

## Rollback Procedure

If you need to rollback to a previous version:

1. Go to Vercel Dashboard > Deployments
2. Find the previous stable deployment
3. Click "Promote to Production"
4. Confirm the rollback

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com

## Contact & Support

For deployment issues, contact:
- **Email**: contact@nanolez.tech
- **GitHub Issues**: Submit detailed bug reports

---

**Status**: ✅ Ready for Production Deployment
**Last Updated**: January 14, 2026
