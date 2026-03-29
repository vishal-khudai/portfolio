import https from 'https';

const id = '1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c';
const url = `https://lh3.google.com/u/0/d/${id}`;

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
});
