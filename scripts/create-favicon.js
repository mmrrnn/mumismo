const sharp = require('sharp');
const fs = require('fs');

async function createFavicon() {
  try {
    console.log('🎨 Creating Mumismo favicon...');

    // Create SVG for the favicon
    const svgContent = `
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="6" fill="url(#gradient)"/>
        <text x="16" y="22" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">m</text>
        <circle cx="24" cy="8" r="3" fill="#10b981"/>
      </svg>
    `;

    // Create different sizes
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 48, name: 'favicon-48x48.png' },
      { size: 64, name: 'favicon-64x64.png' },
      { size: 96, name: 'favicon-96x96.png' },
      { size: 128, name: 'favicon-128x128.png' },
      { size: 180, name: 'apple-touch-icon.png' },
      { size: 192, name: 'android-chrome-192x192.png' },
      { size: 512, name: 'android-chrome-512x512.png' }
    ];

    // Generate PNG files
    for (const { size, name } of sizes) {
      const scaledSvg = svgContent.replace('width="32" height="32"', `width="${size}" height="${size}"`)
                                 .replace('font-size="18"', `font-size="${Math.round(size * 0.56)}"`)
                                 .replace('rx="6"', `rx="${Math.round(size * 0.19)}"`)
                                 .replace('cx="24" cy="8" r="3"', `cx="${Math.round(size * 0.75)}" cy="${Math.round(size * 0.25)}" r="${Math.round(size * 0.09)}"`);

      await sharp(Buffer.from(scaledSvg))
        .png()
        .toFile(`./public/${name}`);
      
      console.log(`✅ Created ${name}`);
    }

    // Create ICO file (favicon.ico)
    const icoSvg = svgContent.replace('width="32" height="32"', 'width="32" height="32"');
    await sharp(Buffer.from(icoSvg))
      .png()
      .resize(32, 32)
      .toFile('./public/favicon-temp.png');

    // For ICO format, we'll use a simple approach
    // Most modern browsers support PNG favicons
    fs.copyFileSync('./public/favicon-temp.png', './public/favicon.ico');
    fs.unlinkSync('./public/favicon-temp.png');

    console.log('✅ Created favicon.ico');

    // Create web manifest
    const manifest = {
      "name": "Mumismo - Business Process Optimization",
      "short_name": "Mumismo",
      "description": "Transform your business with cutting-edge IT solutions",
      "icons": [
        {
          "src": "/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
      "theme_color": "#2563eb",
      "background_color": "#ffffff",
      "display": "standalone",
      "start_url": "/",
      "scope": "/"
    };

    fs.writeFileSync('./public/site.webmanifest', JSON.stringify(manifest, null, 2));
    console.log('✅ Created site.webmanifest');

    console.log('\n🎉 Favicon creation completed!');
    console.log('Generated files:');
    console.log('- favicon.ico (main favicon)');
    console.log('- favicon-16x16.png to favicon-128x128.png');
    console.log('- apple-touch-icon.png');
    console.log('- android-chrome-192x192.png');
    console.log('- android-chrome-512x512.png');
    console.log('- site.webmanifest');

  } catch (error) {
    console.error('❌ Error creating favicon:', error);
  }
}

createFavicon();
