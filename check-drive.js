import https from 'https';

const ids = [
  '1yHBCzwFgh0YV0xgXSZbUKL8GVYhtoj1c',
  '1B8y197hGo_LJcJp-0mSEuWpTvTqq0Yru',
  '1SnKpDuZtMR4qo_A2cEZyju6jBz5RNVsg',
  '1nWparle7udiWNgJ-ljz2hZQVdyLktHzu',
  '1-Ftv9Yf-sHJmmHjypG-LRREdwyxew1dw',
  '1HGgfa6edtU3HAfEC4aZpAqYiI1dHtMIT',
  '1gSHeb-U4qkmmQ8dKGy2cjm5RsJQgKtYC',
  '1MXMTU3-kHoW47auWvWYbNr4xN96iKyTI',
  '1qMRSqNTlGMZkc6TxZ-41v4LdsyY-IrNC',
  '1ZhFftHm3tg07sNx_a_aKfIe0AXel_QrY',
  '14AZ37JPTEmnEXvBY9J8NOylI1p3ECGxm',
  '1WEIczLDjrBGeQp8Yac85BVSfA15OO_xP',
  '1wiT-ZObrqX1HNKrW4Jo1jMcB7_XXm37A',
  '1a2Qnfzc3h9fiBptMcvYAx9brshmIes5d',
  '167OlBYEAHowgiihYLRX5Df4x1ShagEdk',
  '1fkM1JEUM9NH7jeegl7yY7sQ0OP8SlA__',
  '15WPs9H1Ttmlwn69qJ2LA_Z6FvoVvRzd0',
  '1IklgtfAeUSaltRxNk8MyUvv8VvRsBeiK',
  '1RJ_mRlDgM60zDepU-tkLLNlig_CSkWvi'
];

async function checkIds() {
  for (const id of ids) {
    const url = `https://drive.google.com/uc?export=view&id=${id}`;
    await new Promise(resolve => {
      https.get(url, (res) => {
        console.log(`${id}: ${res.statusCode} ${res.headers['content-type']}`);
        resolve();
      });
    });
  }
}

checkIds();
