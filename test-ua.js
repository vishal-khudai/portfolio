import https from 'https';

const id = '1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c';
const url = `https://drive.google.com/uc?export=view&id=${id}`;

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Location: ${res.headers['location']}`);
  if (res.headers['location']) {
    https.get(res.headers['location'], { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res2) => {
      console.log(`Redirect Status: ${res2.statusCode}`);
      let data = '';
      res2.on('data', chunk => data += chunk);
      res2.on('end', () => console.log(data.substring(0, 200)));
    });
  }
});
