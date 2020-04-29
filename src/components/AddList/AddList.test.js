/* eslint-disable no-console */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import puppeteer from 'puppeteer';
import { cleanup, render } from '@testing-library/react';
import { getTestPagePath } from '../../helpers/helpers';

import AddList from './AddList';
import BoardContext from '../../context/boardContext';

afterEach(cleanup);

/**
 * Creates a page on a browser
 * It returns a Promise of an array containing two values.
 * 1. A blank page from a puppeteer browser
 * 2. A browser instance. It's on you to close this instance using: await browser.close()
 * @returns {Array} Promise object representing an array with the two values
 */
const createBrowserPage = async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  return [page, browser];
};

it('Renders shrinked', () => {
  const { queryByTestId } = render(
    <BoardContext.Provider value={{ lastClickedItem: null }}>
      <AddList />
    </BoardContext.Provider>,
  );
  expect(queryByTestId('add-another-list-button')).toBeTruthy();
});

describe('End to End tests', () => {
  const testPage = getTestPagePath();

  it('On click, it allows to add a new list', async () => {
    const [page, browser] = await createBrowserPage();
    let addingBoxId = null;
    try {
      await page.goto(testPage);
      await page.click("[data-testid='add-list']");
      addingBoxId = await page.$eval("[data-testid='adding-list']", (input) => input.id); // Returns undefined if it doesn't match any element
      await browser.close();
    } catch (error) {
      await browser.close();
    }
    expect(addingBoxId != null).toBeTruthy();
    /* Expect the adding box to exist */
  });

  it('On click close icon, AddList closes', async () => {
    const [page, browser] = await createBrowserPage();
    let addAnotherListBox = null;
    try {
      await page.goto(testPage);
      await page.click("[data-testid='add-list']"); // Clicks on "Add another list", whih opens the component
      await page.click("[data-testid='close-add-list']"); // Closes the component
      addAnotherListBox = await page.$eval("[data-testid='add-another-list-button']", (input) => input.id);
      await browser.close();
    } catch (error) {
      await browser.close();
    }
    expect(addAnotherListBox != null).toBeTruthy();
  });
});
