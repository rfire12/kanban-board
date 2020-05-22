/* eslint-disable import/no-extraneous-dependencies */
import puppeteer from 'puppeteer';


/**
 * Creates a page on a browser
 * It returns a Promise of an array containing two values.
 * 1. A blank page from a puppeteer browser
 * 2. A browser instance. It's on you to close this instance using: await browser.close()
 * @returns {Array} Promise object representing an array with the two values
 */
export const createBrowserPage = async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const url = 'http://127.0.0.1:8080';
  await page.goto(url);

  return [page, browser];
};

/**
 * Allows to run End to End tests using puppeteer.
 * This function receives a callback which is the body of a test.
 * Your test function must accept as an argument a page parameter, which is the page where you want to run your tests.
 * @param {Function} test
 * @returns {Any}
 */

export const runEnd2End = async (test) => {
  const [page, browser] = await createBrowserPage();

  let testResult = null;
  try {
    testResult = await test(page);
    await browser.close();
  } catch (error) {
    await browser.close();
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return testResult;
};
