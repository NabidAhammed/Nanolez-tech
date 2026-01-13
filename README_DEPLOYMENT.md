# 🚀 Nanolez Tech - Vercel Deployment Ready

This project is fully configured and optimized for deployment to Vercel.

## Quick Start Deployment

### Option 1: Via Vercel Dashboard (Easiest)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Environment Variables: (see below)

4. **Deploy**
   - Click "Deploy"
   - Wait 30-60 seconds
   - Your site is live! 🎉

### Option 2: Via CLI

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Option 3: Automated Script

**Windows (PowerShell)**:
```powershell
.\deploy.ps1
```

**Mac/Linux (Bash)**:
```bash
chmod +x deploy.sh
./deploy.sh
```

## Configuration Files

All necessary files are already configured:

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel build settings |
| `vite.config.ts` | Production optimization |
| `.env.production` | Environment template |
| `package.json` | Build scripts |
| `.gitignore` | Git exclusions |

## Environment Variables

Set these in Vercel Dashboard → Project Settings → Environment Variables:

```
VITE_CONTACT_ENDPOINT = [Your contact form API endpoint]
VITE_API_BASE_URL = https://api.nanolez.tech
NODE_ENV = production
```

### Getting Your Variables

- **VITE_CONTACT_ENDPOINT**: Your contact form API service URL
- **VITE_API_BASE_URL**: Your API backend URL

## Production Build Optimization

The project is optimized for production:

✅ **Code Minification**: Terser configured
✅ **Code Splitting**: Vendor/framework separation
✅ **Tree Shaking**: Unused code removal
✅ **Console Cleaning**: Debug logs removed
✅ **Source Maps**: Disabled for smaller bundle
✅ **ES2020 Target**: Modern JavaScript support

## Deployment Process

```
1. Push to GitHub main branch
   ↓
2. Vercel webhook triggered
   ↓
3. npm install (dependencies)
   ↓
4. npm run build (TypeScript + Vite)
   ↓
5. Test build output
   ↓
6. Deploy to Vercel edge network
   ↓
7. Site live at nanolez-tech.vercel.app
```

**Build Time**: ~30-60 seconds
**Status**: Automatic updates with each git push

## Domain Setup

### Default Vercel Domain
- Automatically available at: `nanolez-tech.vercel.app`

### Custom Domain
To use `nanolez.tech` or your domain:

1. In Vercel → Project Settings → Domains
2. Click "Add" and enter your domain
3. Follow DNS configuration instructions
4. DNS propagation: 5-30 minutes

### DNS Configuration

If using Vercel name servers:
```
Update your domain registrar:
- Use Vercel's name servers (provided in dashboard)
```

If using current DNS provider:
```
Add CNAME record:
Name: www
Value: cname.vercel-dns.com
```

## Monitoring & Analytics

### Performance Metrics
- View at: Vercel Dashboard → Project → Analytics
- Track Core Web Vitals
- Monitor page performance
- Check database performance

### Error Tracking
- Build logs: Deployments tab
- Runtime errors: Function logs
- Browser errors: Check browser console

### Automatic Rollback
If a deployment fails:
1. Go to Deployments
2. Select previous stable version
3. Click "Promote to Production"

## Auto-Deployments

### Branch Deployments
- **main**: → Production (automatic)
- **PR branches**: → Preview URL (automatic)
- **Other branches**: → On-demand

### Disable Auto-Deploy
In Vercel → Project Settings → Git:
- Uncheck "Deploy on push"
- Deploy manually via dashboard

## Testing Before Production

### Local Test Build
```bash
npm run build
npm run preview
```

### Preview Deployment
```bash
vercel
```

Then share the preview URL before going to production.

## Performance Targets

Goal Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Check your metrics in Vercel Analytics.

## Common Issues & Solutions

### Build Fails
```
Error: npm run build failed
Solution: 
1. Run locally: npm run build
2. Check for TypeScript errors: npm run type-check
3. Verify all dependencies installed
```

### Deployment Hangs
```
Solution:
1. Check Vercel dashboard for build status
2. Clear cache: Settings → Git → Clear Cache
3. Redeploy manually
```

### Environment Variables Not Working
```
Solution:
1. Verify variable names match exactly
2. Check they're in Production environment
3. Redeploy after adding variables
4. Check .env.production format
```

### Custom Domain Not Working
```
Solution:
1. Verify DNS configuration
2. Wait for propagation (5-30 min)
3. Check domain SSL certificate
4. Try clearing browser cache
```

## Rollback to Previous Version

1. Go to Vercel Dashboard → Deployments
2. Find previous stable version
3. Click "..." → "Promote to Production"
4. Confirm rollback

Instant rollback, no rebuild needed!

## CI/CD Pipeline

Automatic checks on every deployment:

- ✅ TypeScript compilation
- ✅ Dependency installation
- ✅ Build verification
- ✅ Code minification
- ✅ Asset optimization

## Security

Already configured:
- ✅ HTTPS (automatic)
- ✅ Secure headers
- ✅ No hardcoded secrets
- ✅ Environment variables for sensitive data
- ✅ CORS properly configured

## Support & Documentation

- **Vercel Docs**: https://vercel.com/docs
- **Vite Guide**: https://vitejs.dev
- **React Docs**: https://react.dev
- **GitHub Issues**: Report bugs with details

## Next Steps

1. **Update Configuration**
   ```bash
   # Edit environment variables
   # Edit VITE_CONTACT_ENDPOINT with your API
   ```

2. **Test Locally**
   ```bash
   npm install
   npm run build
   npm run preview
   ```

3. **Deploy Preview**
   ```bash
   vercel
   ```

4. **Deploy Production**
   ```bash
   vercel --prod
   ```

5. **Monitor Performance**
   - Check Vercel Analytics
   - Review error logs
   - Monitor Core Web Vitals

## Deployment Checklist

- [ ] All environment variables set in Vercel
- [ ] GitHub repository connected
- [ ] Vercel project created
- [ ] Local build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] Preview deployment successful
- [ ] Production deployment complete
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled
- [ ] SSL certificate verified

## Success! 🎉

Your Nanolez Tech website is now deployed and live!

- 🌐 **Live Site**: https://nanolez-tech.vercel.app
- 📊 **Analytics**: vercel.com/dashboard
- ⚙️ **Settings**: vercel.com/dashboard/[project]
- 📝 **Logs**: vercel.com/dashboard/[project]/deployments

---

**Status**: ✅ Production Ready
**Last Updated**: January 14, 2026
**Node Version**: 20.x
**Framework**: React 19 + Vite 6
