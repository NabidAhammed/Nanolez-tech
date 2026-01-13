# 🚀 QUICK DEPLOY GUIDE - Nanolez Tech to Vercel

## 3-Step Deployment (5 minutes)

### Step 1️⃣: Create Vercel Project
```
Visit: https://vercel.com
Sign in with GitHub
Click: "Add New" → "Project"
Select: Nanolez-Tech repository
Click: "Import"
```

### Step 2️⃣: Set Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `VITE_CONTACT_ENDPOINT` | Your contact form API URL |
| `VITE_API_BASE_URL` | https://api.nanolez.tech |

### Step 3️⃣: Deploy
Click "Deploy" button in Vercel Dashboard
⏳ Wait 30-60 seconds
✅ Live at: `https://nanolez-tech.vercel.app`

---

## Alternative: Using CLI

```bash
# Install Vercel CLI (if needed)
npm install -g vercel

# Deploy to production
vercel --prod
```

---

## Alternative: Using Script (Windows)

```powershell
# PowerShell
.\deploy.ps1

# Select option 2 for production
```

---

## Configuration Already Done ✅

| Item | Status |
|------|--------|
| `vercel.json` | ✅ Configured |
| `vite.config.ts` | ✅ Optimized for production |
| Build Scripts | ✅ Ready |
| Environment Template | ✅ Created |
| Dependencies | ✅ Optimized |
| Code Splitting | ✅ Configured |
| Minification | ✅ Enabled |

---

## Vercel Auto-Detects

These will be automatically detected:
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: `20.x`

---

## After Deployment ✨

1. ✅ Visit your live site
2. ✅ Test all functionality
3. ✅ Check browser console (should be clean)
4. ✅ Verify forms work (if API configured)
5. ✅ View Analytics in Vercel Dashboard

---

## Environment Variables

**What to fill in:**

1. **VITE_CONTACT_ENDPOINT**
   - Example: `https://api.yourservice.com/contact`
   - This is where contact form data goes
   - Leave empty if not using contact form yet

2. **VITE_API_BASE_URL**
   - Default: `https://api.nanolez.tech`
   - Your API backend URL
   - Used for API requests

---

## Monitoring (Optional)

In Vercel Dashboard:
- View Analytics
- Check Core Web Vitals
- Monitor Error Logs
- Review Deployments History

---

## Rollback (If needed)

1. Vercel Dashboard → Deployments
2. Find previous version
3. Click "..." → "Promote to Production"
4. Instant rollback! ⚡

---

## Support Docs

- **Full Guide**: See VERCEL_DEPLOYMENT_GUIDE.md
- **Detailed Guide**: See README_DEPLOYMENT.md
- **Checklist**: See DEPLOYMENT_CHECKLIST.md
- **Status Report**: See DEPLOYMENT_READY.md

---

## Common Issues

**Build Fails?**
```
1. Run: npm run build (locally)
2. Check for errors
3. Try: npm install (fresh install)
```

**Env Variables Not Working?**
```
1. Verify names are EXACT
2. Check they're in Production env
3. Redeploy after adding
```

**Site Not Loading?**
```
1. Clear browser cache
2. Check Vercel build logs
3. Try incognito window
```

---

## Status: ✅ READY TO DEPLOY

Everything is configured and optimized.

### Next Action:
1. Get Vercel account (free!)
2. Follow "3-Step Deployment" above
3. Your site is live! 🎉

---

**Time to Deploy**: ~5 minutes
**Current Status**: Production Ready
**Last Updated**: January 14, 2026
