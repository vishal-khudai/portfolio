import https from 'https';
import fs from 'fs';

const id = '1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c';
const url = `https://drive.google.com/uc?export=download&id=${id}`;

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
  if (res.statusCode === 303 && res.headers['location']) {
    https.get(res.headers['location'], (res2) => {
      console.log(`Redirect Status: ${res2.statusCode}`);
      if (res2.statusCode === 200) {
        const file = fs.createWriteStream('test.jpg');
        res2.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded successfully');
        });
      }
    });
  }
});
