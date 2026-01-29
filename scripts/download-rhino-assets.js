#!/usr/bin/env node

/**
 * Script to download Rhino 8 ShrinkWrap assets
 * This is a placeholder script - replace URLs with actual Rhino asset URLs
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'public', 'images', 'rhino8');
const MODELS_DIR = path.join(__dirname, '..', 'public', 'models');

// Ensure directories exist
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}
if (!fs.existsSync(MODELS_DIR)) {
  fs.mkdirSync(MODELS_DIR, { recursive: true });
}

// Asset URLs (replace with actual Rhino URLs)
const assets = [
  {
    url: 'https://example.com/shrinkwrap-hero.png',
    filename: 'shrinkwrap.png',
    description: 'ShrinkWrap hero image'
  },
  {
    url: 'https://example.com/shrinkwrap-before.png', 
    filename: 'shrinkwrap-before.png',
    description: 'Before ShrinkWrap - broken mesh'
  },
  {
    url: 'https://example.com/shrinkwrap-after.png',
    filename: 'shrinkwrap-after.png', 
    description: 'After ShrinkWrap - clean mesh'
  },
  {
    url: 'https://example.com/shrinkwrap-demo1.png',
    filename: 'shrinkwrap-demo1.png',
    description: 'Inflated Point Clouds demo'
  },
  {
    url: 'https://example.com/shrinkwrap-demo2.png',
    filename: 'shrinkwrap-demo2.png',
    description: 'Interior Shells demo'
  },
  {
    url: 'https://example.com/shrinkwrap-demo3.png',
    filename: 'shrinkwrap-demo3.png',
    description: 'Remove Self-Intersections demo'
  },
  {
    url: 'https://example.com/shrinkwrap-demo4.png',
    filename: 'shrinkwrap-demo4.png',
    description: 'Scan Data to Clean QuadMesh demo'
  }
];

// Demo model
const demoModel = {
  url: 'https://example.com/ShrinkWrap-Demo.3dm',
  filename: 'ShrinkWrap-Demo.3dm',
  description: 'ShrinkWrap demo model (shoe last)'
};

function downloadFile(url, filepath, description) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${description}...`);
    
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${description}`);
          resolve();
        });
      } else {
        console.log(`❌ Failed to download ${description}: HTTP ${response.statusCode}`);
        resolve(); // Continue with other downloads
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${description}:`, err.message);
      resolve(); // Continue with other downloads
    });
  });
}

async function downloadAssets() {
  console.log('🚀 Starting Rhino 8 ShrinkWrap asset download...\n');
  
  // Download images
  for (const asset of assets) {
    const filepath = path.join(ASSETS_DIR, asset.filename);
    await downloadFile(asset.url, filepath, asset.description);
  }
  
  // Download demo model
  const modelPath = path.join(MODELS_DIR, demoModel.filename);
  await downloadFile(demoModel.url, modelPath, demoModel.description);
  
  console.log('\n✨ Asset download complete!');
  console.log('\n📝 Note: This script uses placeholder URLs.');
  console.log('   Replace with actual Rhino asset URLs from:');
  console.log('   https://www.rhino3d.com/en/features/shrinkwrap/');
}

// Run the download
downloadAssets().catch(console.error);
