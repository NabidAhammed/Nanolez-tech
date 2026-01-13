#!/bin/bash
# Quick Vercel Deployment Script
# This script helps deploy the Nanolez Tech website to Vercel

set -e

echo "🚀 Nanolez Tech - Vercel Deployment Helper"
echo "=========================================="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Test local build
echo "🔨 Testing local build..."
npm run build
echo "✅ Local build successful!"
echo ""

# Check for uncommitted changes
if [ -n "$(git status -s)" ]; then
    echo "⚠️  Warning: You have uncommitted changes."
    echo "   Commit changes before deploying to production:"
    echo "   git add ."
    echo "   git commit -m 'Your message'"
    echo ""
fi

echo "📋 Deployment Options:"
echo "1. Preview deployment (staging)"
echo "2. Production deployment"
echo ""
read -p "Select option (1 or 2): " option

case $option in
    1)
        echo "🔄 Creating preview deployment..."
        vercel
        echo "✅ Preview deployment complete!"
        ;;
    2)
        echo "⚠️  WARNING: Deploying to PRODUCTION"
        read -p "Are you sure? (y/n): " confirm
        if [ "$confirm" = "y" ]; then
            echo "🔄 Deploying to production..."
            vercel --prod
            echo "✅ Production deployment complete!"
        else
            echo "❌ Deployment cancelled"
        fi
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac

echo ""
echo "📊 Next steps:"
echo "1. Check your deployment at: https://vercel.com/dashboard"
echo "2. View live site at: https://nanolez-tech.vercel.app"
echo "3. Monitor analytics and performance"
echo ""
echo "✨ Deployment successful!"
