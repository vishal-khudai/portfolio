import https from 'https';

const ids = [
  '1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c',
  '1B8y197hGo_LJcJp-0mSEuWpTvTqq0Yru',
  '1SnKpDuZtMR4qo_A2cEZyju6jBz5RNVsg',
  '1nWparle7udiWNgJ-ljz2hZQVdyLktHzu',
  '1-Ftv9Yf-sHJmmHjypG-LRREdwyxew1dw',
  '1HGgfa6edtU3HAfEC4aZpAqYiI1dHtMIT'
];

async function checkIds() {
  for (const id of ids) {
    const url = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
    await new Promise(resolve => {
      https.get(url, (res) => {
        console.log(`${id} (thumbnail): ${res.statusCode}`);
        resolve();
      });
    });
    
    const url2 = `https://lh3.googleusercontent.com/d/${id}`;
    await new Promise(resolve => {
      https.get(url2, (res) => {
        console.log(`${id} (lh3): ${res.statusCode}`);
        resolve();
      });
    });
  }
}

checkIds();
