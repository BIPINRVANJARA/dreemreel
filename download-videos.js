const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const videos = [
  {
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    filename: 'birthday.mp4'
  },
  {
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    filename: 'bridal.mp4'
  },
  {
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    filename: 'prewedding.mp4'
  },
  {
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    filename: 'event.mp4'
  }
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${path.basename(filePath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function start() {
  for (const video of videos) {
    const filePath = path.join(dir, video.filename);
    console.log(`Downloading ${video.url} to ${filePath}...`);
    try {
      await download(video.url, filePath);
    } catch (err) {
      console.error(`Failed to download ${video.filename}:`, err);
    }
  }
}

start();
