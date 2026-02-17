const fs = require('fs');
const path = require('path');

exports.fixGitHubPages = async () => {
  try {
    const distPath = path.join(__dirname, '../dist');
    const src = path.join(distPath, 'index.html');
    const dest = path.join(distPath, '404.html');

    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log('✅ Successfully created 404.html from index.html for GitHub Pages.');
    } else {
      console.error('❌ Build error: index.html not found in /dist. Run "npm run build" first.');
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Failed to create 404.html:', err);
    process.exit(1);
  }
}
