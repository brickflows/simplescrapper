const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://mikepowers.gumroad.com/');
  const bodyHandle = await page.$('body');
  const bodyText = await page.evaluate(body => body.innerText, bodyHandle);
  console.log(bodyText);
  await browser.close();
})();
