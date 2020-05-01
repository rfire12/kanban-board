/* eslint-disable no-console */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { cleanup } from '@testing-library/react';
import { runEnd2End } from '../../helpers/testing-helpers';

afterEach(cleanup);

describe('End to End tests', () => {
  it('On click, it opens the Adding Box (Allowing to add a new card)', async () => {
    const test = async (page) => {
      await page.click("[data-testid='add-card']");
      const addingBoxId = await page.$eval("[data-testid='adding-card']", (input) => input.id); // Returns undefined if it doesn't match any element
      return addingBoxId;
    };

    const testResult = await runEnd2End(test);
    expect(testResult != null).toBeTruthy();
    /* Expect the adding box to exist */
  });

  it('On click, it allows to write a card title', async () => {
    const test = async (page) => {
      await page.click("[data-testid='add-card']");
      await page.type("[data-testid='add-card-title']", "This is card title test. This text doesn't have a single meaning");
      const addListTitle = await page.$eval("[data-testid='add-card-title']", (input) => input.value);
      return addListTitle;
    };

    const testResult = await runEnd2End(test);
    expect(testResult).toBe("This is card title test. This text doesn't have a single meaning");
  });

  it('On click the close icon, AddList closes', async () => {
    const test = async (page) => {
      await page.click("[data-testid='add-list']"); // Clicks on "Add another list", whih opens the component
      await page.click("[data-testid='close-add-list']"); // Closes the component
      const addAnotherListBox = await page.$eval("[data-testid='add-another-list-button']", (input) => input.id);
      return addAnotherListBox;
    };

    const testResult = await runEnd2End(test);
    expect(testResult != null).toBeTruthy();
  });
});
