import https from 'https';

const url = 'https://drive.google.com/drive/folders/1vuTAU5-Sd7otQszAaRlfwiyTRNJYWRhc?usp=drive_link';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Look for file IDs in the init data
    const matches = data.match(/"(1[a-zA-Z0-9_-]{27,32})"/g);
    if (matches) {
      const unique = [...new Set(matches.map(m => m.replace(/"/g, '')))];
      console.log(unique.slice(0, 20));
    } else {
      console.log('No matches found');
    }
  });
});
