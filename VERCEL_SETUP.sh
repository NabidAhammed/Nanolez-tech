#!/bin/bash
# Vercel Deployment Configuration
# This script configures environment variables for Vercel deployment

echo "Nanolez Tech - Vercel Deployment Setup"
echo "========================================"
echo ""
echo "Required environment variables for production:"
echo "- VITE_CONTACT_ENDPOINT: Your contact form API endpoint"
echo "- VITE_API_BASE_URL: Your API base URL"
echo ""
echo "To set these variables:"
echo "1. Go to Vercel Project Settings"
echo "2. Navigate to Environment Variables"
echo "3. Add the variables listed above"
echo ""
echo "Build Command: npm run build"
echo "Output Directory: dist"
echo "Install Command: npm install"
echo ""
echo "Note: This project uses Vite for building."
echo "Deployment will be automatic on git push to main branch."
