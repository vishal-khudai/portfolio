import https from 'https';

const url = 'https://drive.google.com/drive/folders/1vuTAU5-Sd7otQszAaRlfwiyTRNJYWRhc?usp=drive_link';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 500));
    const match = data.match(/https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_-]+/g);
    if (match) console.log(match.slice(0, 5));
  });
});
