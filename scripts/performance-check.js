const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Performance monitoring script
function runPerformanceCheck() {
  console.log('🚀 Running performance checks...\n');

  try {
    // Check bundle size
    console.log('📦 Bundle Analysis:');
    execSync('npm run analyze', { stdio: 'inherit' });

    // Check TypeScript
    console.log('\n🔍 TypeScript Check:');
    execSync('npm run type-check', { stdio: 'inherit' });

    // Run linting
    console.log('\n🧹 Linting:');
    execSync('npm run lint', { stdio: 'inherit' });

    // Check for unused dependencies
    console.log('\n🔍 Checking for unused dependencies...');
    try {
      execSync('npx depcheck', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️  depcheck not installed. Install with: npm install -g depcheck');
    }

    console.log('\n✅ Performance check completed!');
  } catch (error) {
    console.error('❌ Performance check failed:', error.message);
    process.exit(1);
  }
}

runPerformanceCheck();
