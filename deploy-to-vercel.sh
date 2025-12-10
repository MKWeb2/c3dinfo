#!/bin/bash

# Civil 3D Training Course - Vercel Deployment Script
# This script automates the Vercel deployment process

set -e  # Exit on error

echo "=========================================="
echo "Civil 3D Training Course - Vercel Deploy"
echo "=========================================="
echo ""

# Navigate to project directory
cd /home/ubuntu/civil3d_training_course/nextjs-app

echo "✓ Project directory: $(pwd)"
echo "✓ Build size: $(du -sh out/ | cut -f1)"
echo ""

# Check if already logged in
echo "Checking Vercel authentication..."
if npx vercel whoami 2>/dev/null; then
    echo "✓ Already authenticated with Vercel"
else
    echo "⚠ Not authenticated. Please login:"
    echo ""
    npx vercel login
    echo ""
fi

echo "=========================================="
echo "Deploying to Vercel Production..."
echo "=========================================="
echo ""

# Deploy to production
npx vercel --prod --yes

echo ""
echo "=========================================="
echo "Deployment Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Save the deployment URL shown above"
echo "2. Add custom domain with:"
echo "   npx vercel domains add classes.c3dinfo.com --prod"
echo "3. Configure DNS records (see VERCEL_DEPLOYMENT_COMPLETE.md)"
echo ""
echo "For detailed instructions, see:"
echo "/home/ubuntu/civil3d_training_course/VERCEL_DEPLOYMENT_COMPLETE.md"
echo ""
