import https from 'https';

const url = 'https://drive.google.com/drive/folders/1vuTAU5-Sd7otQszAaRlfwiyTRNJYWRhc?usp=drive_link';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Look for image URLs
    const matches = data.match(/https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_-]+/g);
    if (matches) {
      const unique = [...new Set(matches)];
      console.log(unique.slice(0, 5));
    } else {
      console.log('No lh3 matches found');
    }
  });
});
