# Vercel Serverless Deployment Guide

## 📋 Overview

This guide walks you through deploying your NanoLez Tech Next.js application with serverless API routes to Vercel. Your API routes (`/api/contact` and `/api/newsletter`) will automatically become serverless functions.

---

## 🎯 Pre-Deployment Checklist

### 1. **Verify Project Structure**
```
Nanolez-Tech/
├── src/
│   └── app/
│       └── api/
│           ├── contact/route.ts    ✅ Serverless Function
│           └── newsletter/route.ts ✅ Serverless Function
├── package.json
├── tsconfig.json
├── .env.example
└── .gitignore
```

### 2. **Environment Variables Ready**
- [ ] `RESEND_API_KEY` or SMTP credentials
- [ ] `EMAIL_FROM`
- [ ] `EMAIL_TO`
- [ ] `NEXT_PUBLIC_SITE_URL` (will be your Vercel URL)

### 3. **Git Repository**
- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] `.env.local` in `.gitignore` (sensitive data protected)
- [ ] All dependencies in `package.json`

---

## 🚀 Deployment Methods

## Method 1: Vercel Dashboard (Recommended for First Time)

### Step 1: Sign Up/Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended) or email
3. Connect your GitHub account

### Step 2: Import Project
1. Click **"Add New Project"**
2. Import from your Git repository
3. Select **"Nanolez-Tech"** repository
4. Vercel auto-detects Next.js configuration

### Step 3: Configure Project Settings

**Framework Preset:** Next.js (auto-detected)

**Root Directory:** `./` (leave as default)

**Build Settings:**
- **Build Command:** `npm run build` or `next build` (auto-filled)
- **Output Directory:** `.next` (auto-filled)
- **Install Command:** `npm install` (auto-filled)

**Node.js Version:** 20.x (recommended)

### Step 4: Configure Environment Variables

Click **"Environment Variables"** and add:

```bash
# Required - Email Service (Choose one)
RESEND_API_KEY=re_your_actual_api_key_here

# Or SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Email Configuration
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=contact@nanolez.tech

# Site URL (will be updated after first deployment)
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

**Important:** Select environment scope:
- ✅ **Production** (live site)
- ✅ **Preview** (PR deployments)
- ⚠️ **Development** (optional, for local `vercel dev`)

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait 2-5 minutes for build
3. Get your live URL: `https://your-project.vercel.app`

### Step 6: Update Site URL
1. Go to **Settings > Environment Variables**
2. Update `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL
3. Redeploy from **Deployments** tab

---

## Method 2: Vercel CLI (Quick Deployments)

### Step 1: Install Vercel CLI
```powershell
npm install -g vercel
```

### Step 2: Login
```powershell
vercel login
```

### Step 3: Deploy from Terminal
```powershell
# Navigate to project
cd "d:\Desktop\knowledge War\Apps and websites\Nanolez-Tech"

# First deployment (interactive)
vercel

# Follow prompts:
# - Link to existing project? No
# - What's your project's name? nanolez-tech
# - Which directory is your code located? ./
```

### Step 4: Add Environment Variables via CLI
```powershell
# Production environment
vercel env add RESEND_API_KEY production
vercel env add EMAIL_FROM production
vercel env add EMAIL_TO production
vercel env add NEXT_PUBLIC_SITE_URL production

# Preview environment
vercel env add RESEND_API_KEY preview
# ... repeat for other vars
```

### Step 5: Deploy to Production
```powershell
# Deploy to production
vercel --prod
```

---

## Method 3: vercel.json Configuration (Advanced)

Create `vercel.json` for fine-tuned control:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 10,
      "memory": 1024
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "Content-Type"
        }
      ]
    }
  ]
}
```

**Configuration Options:**
- `maxDuration`: Function timeout (10s free, up to 300s on Pro)
- `memory`: RAM allocation (128-3008 MB)
- `regions`: Edge deployment regions (default: all)

---

## 📡 Understanding Serverless Functions on Vercel

### How Your API Routes Work

**Before Deployment (Local):**
```
http://localhost:3000/api/contact → Node.js server
```

**After Deployment (Vercel):**
```
https://your-project.vercel.app/api/contact → Serverless Function (AWS Lambda)
```

### Key Characteristics:
- ✅ **Auto-scaling:** Handles traffic spikes automatically
- ✅ **Cold starts:** ~300-500ms on first request (then fast)
- ✅ **Execution limits:** 10s timeout (Hobby), 60s (Pro)
- ✅ **Stateless:** Each request is independent
- ✅ **Cost-efficient:** Pay only for execution time

### Your API Routes Become:
- `/api/contact` → Serverless function in `iad1` region
- `/api/newsletter` → Serverless function in `iad1` region

Each function:
- Spins up on demand
- Executes your Next.js route handler
- Returns response
- Shuts down automatically

---

## 🔐 Environment Variables Management

### Security Best Practices

**✅ DO:**
- Use Vercel's encrypted environment variables
- Separate Production/Preview/Development values
- Use different API keys for prod/staging

**❌ DON'T:**
- Commit `.env.local` to Git
- Share API keys in code or comments
- Use production keys in preview deployments

### Adding Variables After Deployment

**Via Dashboard:**
1. Project Settings → Environment Variables
2. Add/Edit variable
3. Select environments (Production/Preview/Development)
4. Redeploy for changes to take effect

**Via CLI:**
```powershell
# Add to production
vercel env add VARIABLE_NAME production

# Pull env vars for local dev
vercel env pull .env.local
```

### Required Variables for Your Project

| Variable | Example | Purpose |
|----------|---------|---------|
| `RESEND_API_KEY` | `re_abc123...` | Resend email API |
| `EMAIL_FROM` | `noreply@domain.com` | Sender address |
| `EMAIL_TO` | `contact@nanolez.tech` | Recipient address |
| `NEXT_PUBLIC_SITE_URL` | `https://nanolez.vercel.app` | Your site URL |

---

## 🧪 Testing Serverless Functions

### 1. Test Locally with Vercel Dev
```powershell
# Install dependencies
npm install

# Run with Vercel's environment
vercel dev

# Test API at http://localhost:3000
```

### 2. Test Preview Deployments
Every Git push creates a preview URL:
```
https://nanolez-tech-git-feature-branch.vercel.app
```

Test API endpoints:
```bash
curl -X POST https://your-preview.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Testing serverless function"}'
```

### 3. Monitor Function Logs
- **Dashboard:** Project → Logs tab
- **Real-time:** See function executions
- **Errors:** Check runtime failures

---

## 📊 Monitoring & Performance

### Vercel Analytics
1. Go to **Analytics** tab in your project
2. Monitor:
   - Function execution time
   - Cold start frequency
   - Error rates
   - Traffic patterns

### Performance Tips
- **Optimize cold starts:** Keep dependencies minimal
- **Edge functions:** Use for latency-sensitive endpoints
- **Caching:** Leverage Vercel's edge cache
- **Connection pooling:** Reuse database connections

---

## 🔄 Continuous Deployment

### Automatic Deployments
Vercel automatically deploys when you:
- Push to `main` branch → Production
- Push to other branches → Preview deployments
- Open Pull Requests → Preview URLs

### Deployment Workflow
```
Git Push → Vercel Detects → Build → Test → Deploy → Live URL
```

### Rollback Strategy
1. Go to **Deployments** tab
2. Find previous successful deployment
3. Click **Promote to Production**
4. Instant rollback (no rebuild needed)

---

## 🐛 Troubleshooting

### Common Issues

#### 1. **Build Failed**
```
Error: Module not found
```
**Solution:** Ensure all dependencies in `package.json`
```powershell
npm install --save missing-package
git commit -am "Add missing dependency"
git push
```

#### 2. **Serverless Function Timeout**
```
Error: Function execution timed out
```
**Solution:** Optimize function or upgrade plan
- Free tier: 10s max
- Pro tier: 60s max
- Check long-running operations (email sending)

#### 3. **Environment Variable Not Found**
```
Error: RESEND_API_KEY is not defined
```
**Solution:**
1. Add variable in Vercel Dashboard
2. Select correct environment (Production/Preview)
3. Redeploy project

#### 4. **CORS Errors**
```
Access to fetch blocked by CORS policy
```
**Solution:** API routes auto-handle CORS, but if needed:
```typescript
// In route.ts
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
```

#### 5. **Cold Start Latency**
**Symptoms:** First request slow (~500ms), subsequent fast
**Solution:**
- Expected behavior on free tier
- Upgrade to Pro for Edge Functions
- Implement loading states in frontend

---

## 💰 Pricing & Limits

### Hobby (Free) Tier
- ✅ 100GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Serverless function execution: 100 GB-hours
- ✅ 10s max function duration
- ⚠️ No commercial use

### Pro Tier ($20/month)
- ✅ 1TB bandwidth/month
- ✅ 1000 GB-hours function execution
- ✅ 60s max function duration
- ✅ Advanced analytics
- ✅ Commercial use
- ✅ Custom domains
- ✅ Password protection

**Your API usage estimate:**
- Contact form: ~50ms per request
- Newsletter: ~30ms per request
- Expected: 1000 submissions/month → ~1-2 GB-hours (well within free tier)

---

## 🌐 Custom Domain Setup

### Step 1: Add Domain
1. Project Settings → Domains
2. Enter your domain: `nanolez.tech`
3. Click **Add**

### Step 2: Configure DNS
Add these records to your DNS provider:

**For apex domain (nanolez.tech):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Verify & Deploy
- Vercel auto-provisions SSL certificate
- Usually takes 5-60 minutes
- HTTPS enabled automatically

---

## 🔒 Security Checklist

- [x] Environment variables encrypted on Vercel
- [x] `.env.local` in `.gitignore`
- [x] Rate limiting implemented in API routes
- [x] Input validation with Zod
- [x] HTTPS enforced automatically
- [x] CORS headers configured
- [ ] Add authentication for admin features (future)
- [ ] Implement CAPTCHA for forms (optional)

---

## 📚 Additional Resources

### Official Documentation
- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)
- [Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [Environment Variables](https://vercel.com/docs/environment-variables)

### Your Project Docs
- [BACKEND_SETUP.md](BACKEND_SETUP.md) - Backend configuration
- [QUICK_START.md](QUICK_START.md) - Local development
- [DEVELOPMENT.md](DEVELOPMENT.md) - Full development guide

---

## 🎬 Quick Deploy Summary

```powershell
# 1. Ensure code is pushed to Git
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Deploy via CLI (optional)
vercel --prod

# 3. Or use Vercel Dashboard
# → Import project from GitHub
# → Add environment variables
# → Deploy
```

**Your serverless functions will be live at:**
- `https://your-project.vercel.app/api/contact`
- `https://your-project.vercel.app/api/newsletter`

---

## ✅ Post-Deployment Verification

### 1. Test Contact Form
```bash
curl -X POST https://your-project.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing serverless deployment"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### 2. Check Function Logs
- Vercel Dashboard → Logs
- Verify email sent successfully
- Check for any errors

### 3. Test Newsletter Signup
```bash
curl -X POST https://your-project.vercel.app/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

### 4. Performance Check
- Open DevTools → Network tab
- Submit form
- Verify API response time < 1s

---

## 🎯 Next Steps After Deployment

1. **Update Frontend:**
   - Verify `NEXT_PUBLIC_SITE_URL` in production
   - Test all forms and API integrations

2. **Set Up Monitoring:**
   - Enable Vercel Analytics
   - Configure error tracking (Sentry optional)

3. **Configure Email Service:**
   - Verify Resend domain
   - Set up SPF/DKIM records for better deliverability

4. **Optimize Performance:**
   - Review function execution times
   - Optimize cold start duration if needed

5. **Plan for Scale:**
   - Monitor usage vs. limits
   - Consider Pro tier if approaching limits

---

## 📞 Support

**Deployment Issues:**
- Vercel Status: [vercel-status.com](https://www.vercel-status.com/)
- Support: [vercel.com/support](https://vercel.com/support)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

**Project-Specific Issues:**
- Check [BACKEND_SETUP.md](BACKEND_SETUP.md) for API configuration
- Review [DEVELOPMENT.md](DEVELOPMENT.md) for troubleshooting

---

**🎉 You're ready to deploy! Your serverless API will be live in minutes.**
