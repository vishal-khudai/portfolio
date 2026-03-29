import https from 'https';

const url = 'https://play.google.com/store/apps/details?id=com.weedready.idle.foodgame';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for the main app icon
    const matches = data.match(/https:\/\/play-lh\.googleusercontent\.com\/[a-zA-Z0-9_-]+/g);
    if (matches) {
      console.log('Found image URLs:', [...new Set(matches)].slice(0, 5));
    } else {
      console.log('No image URLs found');
    }
  });
});
