import https from 'https';

const id = '1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c';
const url = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Content-Type: ${res.headers['content-type']}`);
  console.log(`Location: ${res.headers['location']}`);
});
