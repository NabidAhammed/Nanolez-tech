# Quick Vercel Deployment Script (PowerShell)
# This script helps deploy the Nanolez Tech website to Vercel

Write-Host "🚀 Nanolez Tech - Vercel Deployment Helper" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

# Check if vercel CLI is installed
$vercelInstalled = $null -ne (Get-Command vercel -ErrorAction SilentlyContinue)

if (-not $vercelInstalled) {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Test local build
Write-Host "🔨 Testing local build..." -ForegroundColor Yellow
npm run build
Write-Host "✅ Local build successful!" -ForegroundColor Green
Write-Host ""

# Check git status
$gitStatus = git status -s
if ($gitStatus) {
    Write-Host "⚠️  Warning: You have uncommitted changes." -ForegroundColor Yellow
    Write-Host "   Commit changes before deploying to production:" -ForegroundColor Yellow
    Write-Host "   git add ." -ForegroundColor Gray
    Write-Host "   git commit -m 'Your message'" -ForegroundColor Gray
    Write-Host ""
}

Write-Host "📋 Deployment Options:" -ForegroundColor Cyan
Write-Host "1. Preview deployment (staging)"
Write-Host "2. Production deployment"
Write-Host ""
$option = Read-Host "Select option (1 or 2)"

switch ($option) {
    "1" {
        Write-Host "🔄 Creating preview deployment..." -ForegroundColor Yellow
        vercel
        Write-Host "✅ Preview deployment complete!" -ForegroundColor Green
    }
    "2" {
        Write-Host "⚠️  WARNING: Deploying to PRODUCTION" -ForegroundColor Red
        $confirm = Read-Host "Are you sure? (y/n)"
        if ($confirm -eq "y") {
            Write-Host "🔄 Deploying to production..." -ForegroundColor Yellow
            vercel --prod
            Write-Host "✅ Production deployment complete!" -ForegroundColor Green
        }
        else {
            Write-Host "❌ Deployment cancelled" -ForegroundColor Red
        }
    }
    default {
        Write-Host "❌ Invalid option" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "📊 Next steps:" -ForegroundColor Cyan
Write-Host "1. Check your deployment at: https://vercel.com/dashboard"
Write-Host "2. View live site at: https://nanolez-tech.vercel.app"
Write-Host "3. Monitor analytics and performance"
Write-Host ""
Write-Host "✨ Deployment successful!" -ForegroundColor Green
