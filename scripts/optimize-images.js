const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = './public';
  const outputDir = './public/optimized';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const imageFiles = ['billing.jpg', 'schedule.jpg'];

  for (const imageFile of imageFiles) {
    const inputPath = path.join(inputDir, imageFile);
    const baseName = path.parse(imageFile).name;

    try {
      console.log(`Processing ${imageFile}...`);

      // Generate WebP version (better compression, same quality)
      await sharp(inputPath)
        .webp({ quality: 95 })
        .toFile(path.join(outputDir, `${baseName}.webp`));

      // Generate AVIF version (even better compression)
      await sharp(inputPath)
        .avif({ quality: 95 })
        .toFile(path.join(outputDir, `${baseName}.avif`));

      // Generate different sizes for responsive images
      const sizes = [
        { width: 400, suffix: '-sm' },
        { width: 800, suffix: '-md' },
        { width: 1200, suffix: '-lg' },
        { width: 1600, suffix: '-xl' }
      ];

      for (const size of sizes) {
        // WebP versions
        await sharp(inputPath)
          .resize(size.width, null, { withoutEnlargement: true })
          .webp({ quality: 90 })
          .toFile(path.join(outputDir, `${baseName}${size.suffix}.webp`));

        // AVIF versions
        await sharp(inputPath)
          .resize(size.width, null, { withoutEnlargement: true })
          .avif({ quality: 90 })
          .toFile(path.join(outputDir, `${baseName}${size.suffix}.avif`));
      }

      console.log(`✅ ${imageFile} optimized successfully!`);

    } catch (error) {
      console.error(`❌ Error processing ${imageFile}:`, error);
    }
  }

  console.log('✅ All images optimized successfully!');
  console.log('Generated files:');
  console.log('- billing.webp/avif (original size)');
  console.log('- schedule.webp/avif (original size)');
  console.log('- billing-sm.webp/avif (400px)');
  console.log('- billing-md.webp/avif (800px)');
  console.log('- billing-lg.webp/avif (1200px)');
  console.log('- billing-xl.webp/avif (1600px)');
  console.log('- schedule-sm.webp/avif (400px)');
  console.log('- schedule-md.webp/avif (800px)');
  console.log('- schedule-lg.webp/avif (1200px)');
  console.log('- schedule-xl.webp/avif (1600px)');
}

optimizeImages();
