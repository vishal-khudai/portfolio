import https from 'https';

const id = '1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c';
const url = `https://drive.google.com/uc?export=view&id=${id}`;

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Location: ${res.headers['location']}`);
  if (res.headers['location']) {
    https.get(res.headers['location'], (res2) => {
      console.log(`Redirect Status: ${res2.statusCode}`);
      console.log(`Redirect Location: ${res2.headers['location']}`);
    });
  }
});
