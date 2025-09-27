# GitHub Pages Deployment Guide - Mumismo

This guide will help you deploy your Mumismo website to GitHub Pages.

## 🚀 Quick Setup

### Prerequisites
- GitHub account
- Git repository with your Mumismo project
- Node.js 18+ installed locally

### Step 1: Configure Repository

1. **Update the site URL** in `github-pages.env`:
   ```bash
   # Replace 'yourusername' with your actual GitHub username
   NEXT_PUBLIC_SITE_URL=yourusername.github.io
   ```

2. **Copy environment variables**:
   ```bash
   cp github-pages.env .env.local
   ```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 3: Deploy

#### Option A: Automatic Deployment (Recommended)
- Push your code to the `main` branch
- GitHub Actions will automatically build and deploy your site
- Check the **Actions** tab to monitor deployment progress

#### Option B: Manual Deployment
```bash
# Run the deployment script
npm run deploy:manual

# Or use the simple command
npm run deploy
```

## 🔧 Configuration Details

### Environment Variables

Create a `.env.local` file with:
```env
NEXT_PUBLIC_SITE_URL=yourusername.github.io
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX  # Optional
CONTACT_EMAIL=hi@mumismo.com  # Optional
```

### Custom Domain (Optional)

If you have a custom domain:

1. **Add CNAME file**:
   ```bash
   echo "mumismo.com" > public/CNAME
   ```

2. **Update environment variables**:
   ```env
   NEXT_PUBLIC_SITE_URL=mumismo.com
   ```

3. **Configure DNS**:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A record: `@` → GitHub Pages IP addresses

## 📁 Project Structure for GitHub Pages

```
mumismo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── out/                        # Build output (auto-generated)
├── public/
│   ├── CNAME                   # Custom domain (optional)
│   └── .nojekyll              # Prevents Jekyll processing
├── scripts/
│   └── deploy-github-pages.sh # Manual deployment script
└── github-pages.env           # Environment template
```

## 🛠️ Build Configuration

The project is configured for static export with:

- **Static Export**: `output: 'export'` in `next.config.ts`
- **Trailing Slashes**: `trailingSlash: true` for GitHub Pages compatibility
- **Unoptimized Images**: Required for static export
- **No Jekyll**: `.nojekyll` file prevents Jekyll processing

## 🚨 Troubleshooting

### Common Issues

1. **404 Errors**:
   - Ensure `trailingSlash: true` in `next.config.ts`
   - Check that all routes have proper trailing slashes

2. **Images Not Loading**:
   - Images are unoptimized for static export
   - Use absolute paths for images

3. **Language Switching Issues**:
   - Ensure middleware is properly configured
   - Check that all locale routes are generated

4. **Build Failures**:
   - Check GitHub Actions logs
   - Ensure all dependencies are in `package.json`
   - Run `npm run type-check` locally

### Debug Commands

```bash
# Test build locally
npm run build

# Check build output
ls -la out/

# Test static export
npm run build && npx serve out/

# Check for TypeScript errors
npm run type-check

# Run linting
npm run lint
```

## 📊 Performance Optimization

### GitHub Pages Limitations
- Static files only
- No server-side rendering
- No API routes (use external services)

### Optimizations Applied
- Static export with optimized images
- Pre-generated pages for all locales
- Compressed assets
- Proper caching headers

## 🔄 Continuous Deployment

The GitHub Actions workflow automatically:
1. Installs dependencies
2. Runs type checking and linting
3. Runs tests
4. Builds the application
5. Deploys to GitHub Pages

### Workflow Triggers
- Push to `main` branch
- Pull requests to `main` branch

## 📈 Analytics Integration

To add Google Analytics:

1. **Get tracking ID** from Google Analytics
2. **Add to environment variables**:
   ```env
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
3. **Update GoogleAnalytics component** with your tracking ID

## 🌐 SEO Configuration

The site includes:
- Dynamic metadata generation
- OpenGraph tags
- Twitter cards
- Sitemap generation
- Robots.txt
- Proper canonical URLs

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify environment variables
3. Test build locally
4. Check GitHub Pages settings

## 🎉 Success!

Once deployed, your Mumismo website will be available at:
- **GitHub Pages**: `https://yourusername.github.io/mumismo`
- **Custom Domain**: `https://mumismo.com` (if configured)

The site will automatically update when you push changes to the `main` branch!
