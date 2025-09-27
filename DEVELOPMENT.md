# Development Guide - Mumismo

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run optimize-images` - Optimize images (WebP/AVIF)
- `npm run create-favicon` - Generate favicon files
- `npm run analyze` - Analyze bundle size
- `npm run performance-check` - Run comprehensive performance checks
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/           # Internationalized routes
│   ├── api/                # API routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Root page (redirects to /en)
│   ├── robots.ts           # Robots.txt
│   └── sitemap.ts          # Sitemap.xml
├── components/             # Reusable components
│   ├── layout/             # Layout components
│   ├── sections/           # Page sections
│   ├── ErrorBoundary.tsx   # Error boundary
│   ├── GoogleAnalytics.tsx # Analytics
│   ├── LanguageSwitcher.tsx # Language switcher
│   ├── LoadingSpinner.tsx  # Loading component
│   └── ResponsiveImage.tsx # Optimized images
├── i18n.ts                 # Internationalization config
├── lib/                    # Utility libraries
├── middleware.ts           # Next.js middleware
└── theme/                  # Material-UI theme
```

## 🌍 Internationalization

The project supports English (`en`) and Polish (`pl`) languages.

### Adding New Translations

1. Add new keys to `messages/en.json` and `messages/pl.json`
2. Use `useTranslations()` hook in components:
   ```tsx
   const t = useTranslations('section.key');
   return <Typography>{t('title')}</Typography>;
   ```

### Adding New Locales

1. Add locale to `locales` array in:
   - `src/i18n.ts`
   - `src/middleware.ts`
   - `src/app/[locale]/layout.tsx`
2. Create translation file: `messages/{locale}.json`
3. Update sitemap and robots.txt
4. Add new language to both `LanguageSwitcher.tsx` and `MobileLanguageSwitcher.tsx` components

## 📱 Mobile Support

### Language Switcher

The project includes two language switcher components:

- **`LanguageSwitcher.tsx`** - Desktop version with dropdown menu
- **`MobileLanguageSwitcher.tsx`** - Mobile-optimized version with button layout

Both components:
- Support touch interactions
- Include fallback navigation for mobile devices
- Have proper touch targets (44px minimum)
- Include visual feedback for touch interactions

### Mobile Optimizations

- Touch-friendly button sizes (44px minimum)
- Prevented zoom on input focus
- Smooth scrolling with `-webkit-overflow-scrolling: touch`
- Custom tap highlighting for better UX
- Responsive breakpoints for mobile/desktop switching

## 🎨 Styling

### Material-UI Theme

- Theme configuration: `src/theme/theme.ts`
- Custom components: `src/components/ThemeProvider.tsx`
- Uses Emotion for CSS-in-JS

### Responsive Design

- Mobile-first approach
- Breakpoints: `xs`, `sm`, `md`, `lg`, `xl`
- Use MUI's `useMediaQuery` for conditional rendering

## 🖼️ Image Optimization

### Automatic Optimization

Images are automatically optimized using:
- WebP format (better compression)
- AVIF format (best compression)
- Multiple sizes for responsive loading
- Fallback to original format

### Usage

```tsx
import ResponsiveImage from '@/components/ResponsiveImage';

<ResponsiveImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority={true}
/>
```

### Manual Optimization

Run the optimization script:
```bash
npm run optimize-images
```

## 🎨 Favicon Management

### Custom Favicon

The project includes a custom favicon that matches the Mumismo brand:
- Blue gradient background matching the primary theme color
- White "m" letter representing the brand
- Green dot indicator for visual appeal
- Multiple sizes for different devices and contexts

### Favicon Files Generated

- `favicon.ico` - Main favicon (32x32)
- `favicon-16x16.png` to `favicon-128x128.png` - Various PNG sizes
- `apple-touch-icon.png` - iOS home screen icon (180x180)
- `android-chrome-192x192.png` - Android Chrome icon (192x192)
- `android-chrome-512x512.png` - Android Chrome icon (512x512)
- `site.webmanifest` - Web app manifest

### Regenerating Favicon

To update the favicon:
```bash
npm run create-favicon
```

This will regenerate all favicon files with the current design.

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- Tests should be in `__tests__` directories or `.test.tsx` files
- Use React Testing Library for component tests
- Mock external dependencies as needed

## 📊 Performance

### Bundle Analysis

```bash
npm run analyze
```

### Performance Monitoring

```bash
npm run performance-check
```

### Best Practices

1. **Code Splitting**: Use dynamic imports for large components
2. **Image Optimization**: Always use `ResponsiveImage` component
3. **Bundle Size**: Monitor with `npm run analyze`
4. **Lazy Loading**: Implement for non-critical components
5. **Caching**: Use Next.js built-in caching strategies

## 🔒 Security

### Headers

Security headers are configured in `next.config.ts`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

### Environment Variables

Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
CONTACT_EMAIL=hi@mumismo.com
```

## 🚀 Deployment

### GitHub Pages (Configured)

The project is configured for GitHub Pages deployment:

1. **Automatic Deployment**:
   - Push to `main` branch triggers automatic deployment
   - GitHub Actions builds and deploys the site
   - Check `.github/workflows/deploy.yml` for configuration

2. **Manual Deployment**:
   ```bash
   # Quick deployment
   npm run deploy
   
   # Full deployment with checks
   npm run deploy:manual
   ```

3. **Setup Instructions**:
   - See `GITHUB_PAGES_SETUP.md` for detailed setup
   - Configure `NEXT_PUBLIC_SITE_URL` in environment variables
   - Enable GitHub Pages in repository settings

### Vercel (Alternative)

1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables for Production

- `NEXT_PUBLIC_SITE_URL`: Production URL
- `NEXT_PUBLIC_GA_TRACKING_ID`: Google Analytics ID
- `CONTACT_EMAIL`: Contact form email
- `SMTP_*`: Email service configuration

## 🐛 Debugging

### Common Issues

1. **Hydration Mismatch**: Use `suppressHydrationWarning` for client-only content
2. **Image Loading**: Check image paths and optimization
3. **Translation Missing**: Verify translation keys exist in both languages
4. **Build Errors**: Run `npm run type-check` and `npm run lint`

### Debug Tools

- React DevTools browser extension
- Next.js built-in debugging
- Browser Network tab for performance analysis

## 📈 Analytics

### Google Analytics

Configure in `src/components/GoogleAnalytics.tsx`:
```tsx
<GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
```

### Custom Events

Track user interactions:
```tsx
// Track button clicks
gtag('event', 'click', {
  event_category: 'engagement',
  event_label: 'contact_form_submit'
});
```

## 🔄 Continuous Integration

### GitHub Actions (Recommended)

Create `.github/workflows/ci.yml`:
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
