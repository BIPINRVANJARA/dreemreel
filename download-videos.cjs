const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const dir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

// A collection of reliable test video URLs
const videoSources = [
  {
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-illuminated-city-street-40176-large.mp4',
    filename: 'birthday.mp4'
  },
  {
    url: 'https://assets.mixkit.co/videos/preview/mixkit-womans-feet-splashing-in-a-swimming-pool-1234-large.mp4',
    filename: 'bridal.mp4'
  },
  {
    url: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    filename: 'prewedding.mp4'
  },
  {
    url: 'https://www.w3schools.com/html/movie.mp4', // Backups if mixkit is slow/blocked
    filename: 'event.mp4'
  }
];

function download(fileUrl, filePath) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(fileUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'video/mp4,video/*;q=0.9,*/*;q=0.8'
      }
    };

    protocol.get(options, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        console.log(`Redirecting to ${response.headers.location}...`);
        download(response.headers.location, filePath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Server returned status code ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(filePath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        // Check file size to make sure it's valid
        const stats = fs.statSync(filePath);
        if (stats.size < 5000) {
          reject(new Error(`File is too small (${stats.size} bytes) - likely not a real video`));
        } else {
          console.log(`Successfully downloaded ${path.basename(filePath)} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
          resolve();
        }
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// Fallback source list in case some fail
const fallbackSources = {
  'birthday.mp4': 'https://www.w3schools.com/html/mov_bbb.mp4',
  'bridal.mp4': 'https://www.w3schools.com/html/movie.mp4',
  'prewedding.mp4': 'https://www.w3schools.com/html/mov_bbb.mp4',
  'event.mp4': 'https://www.w3schools.com/html/movie.mp4'
};

async function start() {
  for (const source of videoSources) {
    const filePath = path.join(dir, source.filename);
    console.log(`Attempting to download ${source.url} to ${filePath}...`);
    try {
      await download(source.url, filePath);
    } catch (err) {
      console.warn(`Primary download failed for ${source.filename}: ${err.message}. Trying fallback...`);
      try {
        const fallbackUrl = fallbackSources[source.filename];
        await download(fallbackUrl, filePath);
      } catch (fallbackErr) {
        console.error(`All downloads failed for ${source.filename}:`, fallbackErr);
      }
    }
  }
}

start();
