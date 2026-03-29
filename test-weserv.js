import https from 'https';

const url = 'https://images.weserv.nl/?url=https://drive.google.com/uc?id=1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c';

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data.substring(0, 200)));
});
