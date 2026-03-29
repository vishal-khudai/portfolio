import https from 'https';

const url = 'https://drive.usercontent.google.com/download?id=1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c&export=view';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  console.log(`Status: ${res.statusCode}`);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data.substring(0, 200)));
});
