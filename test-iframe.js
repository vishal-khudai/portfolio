import https from 'https';

const id = '1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c';
const url = `https://drive.google.com/file/d/${id}/preview`;

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
});
