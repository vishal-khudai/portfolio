import https from 'https';

const url = 'https://drive.google.com/drive/folders/1vuTAU5-Sd7otQszAaRlfwiyTRNJYWRhc?usp=drive_link';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/"([^"]+\.(png|jpg|jpeg|gif|webp))"/gi);
    if (matches) {
      console.log('Found files:', [...new Set(matches)].slice(0, 10));
    } else {
      console.log('No files found');
    }
  });
});
