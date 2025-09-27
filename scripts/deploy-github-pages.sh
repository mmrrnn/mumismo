#!/bin/bash

# GitHub Pages Deployment Script for Mumismo
# This script automates the deployment process to GitHub Pages

set -e

echo "🚀 Starting GitHub Pages deployment for Mumismo..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if we're on the main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Warning: Not on main branch (currently on $CURRENT_BRANCH)"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Deployment cancelled"
        exit 1
    fi
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps

# Run type check
echo "🔍 Running type check..."
npm run type-check

# Run linting
echo "🧹 Running linting..."
npm run lint

# Run tests
echo "🧪 Running tests..."
npm test

# Build the application
echo "🏗️  Building application..."
npm run build

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: Build output directory 'out' not found"
    exit 1
fi

# Create .nojekyll file to prevent Jekyll processing
echo "📝 Creating .nojekyll file..."
touch out/.nojekyll

# Add CNAME file if custom domain is configured
if [ -n "$CUSTOM_DOMAIN" ]; then
    echo "🌐 Adding CNAME file for custom domain: $CUSTOM_DOMAIN"
    echo "$CUSTOM_DOMAIN" > out/CNAME
fi

# Commit and push to gh-pages branch
echo "📤 Deploying to GitHub Pages..."
git add out/
git commit -m "Deploy to GitHub Pages - $(date)"

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "📤 Pushing to existing gh-pages branch..."
    git subtree push --prefix out origin gh-pages
else
    echo "📤 Creating and pushing to new gh-pages branch..."
    git subtree push --prefix out origin gh-pages
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be available at: https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^/]*\)\/\([^/]*\)\.git.*/\1.github.io\/\2/')"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Set source to 'Deploy from a branch'"
echo "4. Select 'gh-pages' branch and '/ (root)' folder"
echo "5. Save the settings"
echo ""
echo "🎉 Your Mumismo website will be live in a few minutes!"
