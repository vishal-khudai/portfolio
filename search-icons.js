import gplay from 'google-play-scraper';

async function searchIcons() {
  const queries = [
    'Merge Fever: Merge Games',
    'Hexa Fever: Color Sort Puzzle',
    'Sherlock: Mystry Merge',
    'Idle Cityscape Tycoon',
    'Pinball - Smash & Hit'
  ];

  for (const q of queries) {
    try {
      const results = await gplay.search({ term: q, num: 1 });
      if (results.length > 0) {
        console.log(`${q}: ${results[0].icon}`);
      } else {
        console.log(`${q}: NOT FOUND`);
      }
    } catch (e) {
      console.log(`${q}: ERROR`);
    }
  }
}

searchIcons();
