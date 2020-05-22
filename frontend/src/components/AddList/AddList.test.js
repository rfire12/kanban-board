/* eslint-disable no-console */
import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { runEnd2End } from '../../helpers/testing-helpers';

import AddList from './AddList';
import BoardContext from '../../context/boardContext';

afterEach(cleanup);

it('Renders closed', () => {
  const { queryByTestId } = render(
    <BoardContext.Provider value={{ lastClickedItem: null }}>
      <AddList />
    </BoardContext.Provider>,
  );
  expect(queryByTestId('add-another-list-button')).toBeTruthy();
});

describe('End to End tests', () => {
  it('On click, it opens the Adding Box (Allowing to add a new list)', async () => {
    const test = async (page) => {
      await page.click("[data-testid='add-list']");
      const addingBoxId = await page.$eval("[data-testid='adding-list']", (input) => input.id); // Returns undefined if it doesn't match any element
      return addingBoxId;
    };

    const testResult = await runEnd2End(test);
    expect(testResult != null).toBeTruthy();
    /* Expect the adding box to exist */
  });

  it('On click, it allows to write a new list name', async () => {
    const test = async (page) => {
      await page.click("[data-testid='add-list']");
      await page.type("[data-testid='add-list-title']", 'This is a testing text');
      const addListTitle = await page.$eval("[data-testid='add-list-title']", (input) => input.value);
      return addListTitle;
    };

    const testResult = await runEnd2End(test);
    expect(testResult).toBe('This is a testing text');
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
