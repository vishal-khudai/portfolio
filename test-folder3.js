import https from 'https';

const url = 'https://drive.google.com/drive/folders/1vuTAU5-Sd7otQszAaRlfwiyTRNJYWRhc?usp=drive_link';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_-]+/g);
    if (matches) {
      console.log('Found lh3 URLs:', [...new Set(matches)].slice(0, 5));
    } else {
      console.log('No lh3 URLs found');
    }
    
    const driveViewerMatches = data.match(/https:\/\/lh3\.googleusercontent\.com\/drive-viewer\/[a-zA-Z0-9_-]+/g);
    if (driveViewerMatches) {
      console.log('Found drive-viewer URLs:', [...new Set(driveViewerMatches)].slice(0, 5));
    }
    
    const fifeMatches = data.match(/https:\/\/lh3\.googleusercontent\.com\/fife\/[a-zA-Z0-9_-]+/g);
    if (fifeMatches) {
      console.log('Found fife URLs:', [...new Set(fifeMatches)].slice(0, 5));
    }
  });
});
