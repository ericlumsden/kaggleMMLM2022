const puppeteer = require('puppeteer');

const year = 2006;

async function scrapeProduct(year) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.sports-reference.com/cbb/postseason/${year}-ncaa.html`);

    const numRegions = await page.$x('//*[@id="content"]/div[2]/div/a'); // numRegions.length gives us the number of regions to loop through
    for (let i = 0; i < numRegions.length; i++) {
        const txt = await numRegions[i].getProperty('textContent');
        const rawTxt = await txt.jsonValue();

        console.log({rawTxt});
    }

    browser.close();
}

scrapeProduct(year);