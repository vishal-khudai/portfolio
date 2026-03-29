import gplay from 'google-play-scraper';

async function fetchIcons() {
  const apps = [
    'com.merge.hometown',
    'com.merge.fever',
    'com.hexa.fever',
    'com.sherlock.merge',
    'com.gamestown.candy.sortgames',
    'com.dragontales.mergegames',
    'com.wizardschool.magic.merge',
    'com.gamestown.tower.defense',
    'com.matchingham.mergegame',
    'com.knitbusjam.sortpuzzle',
    'com.threadcolor.blockjampuzzle',
    'com.idle.cityscape',
    'com.pinball.smash'
  ];

  for (const appId of apps) {
    try {
      const app = await gplay.app({ appId });
      console.log(`${appId}: ${app.icon}`);
    } catch (e) {
      console.log(`${appId}: NOT FOUND`);
    }
  }
}

fetchIcons();
