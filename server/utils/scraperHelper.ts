import puppeteer from "puppeteer-core";
const { executablePath } = require("puppeteer");

async function actionScraperPuppeteer(url: string) {
  
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: executablePath(),
  });
  const page = await browser.newPage();
console.log("url", url);
  await page.goto(url);

  const mainImageWebsite = await page.evaluate(() => {
    return [...document.getElementsByTagName("img")].sort(
      (a, b) =>
        b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight
    )[0].src;
  });

  return mainImageWebsite;
}

export default actionScraperPuppeteer;
