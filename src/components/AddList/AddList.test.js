/* eslint-disable no-console */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { cleanup, render } from '@testing-library/react';
import { runEnd2End } from '../../helpers/testing-helpers';

import AddList from './AddList';
import BoardContext from '../../context/boardContext';

afterEach(cleanup);

it('Renders shrinked', () => {
  const { queryByTestId } = render(
    <BoardContext.Provider value={{ lastClickedItem: null }}>
      <AddList />
    </BoardContext.Provider>,
  );
  expect(queryByTestId('add-another-list-button')).toBeTruthy();
});

describe('End to End tests', () => {
  it('On click, it allows to add a new list', async () => {
    const test = async (page) => {
      await page.click("[data-testid='add-list']");
      const addingBoxId = await page.$eval("[data-testid='adding-list']", (input) => input.id); // Returns undefined if it doesn't match any element
      expect(addingBoxId != null).toBeTruthy();
      /* Expect the adding box to exist */
    };

    await runEnd2End(test);
  });

  it('On click close icon, AddList closes', async () => {
    const test = async (page) => {
      await page.click("[data-testid='add-list']"); // Clicks on "Add another list", whih opens the component
      await page.click("[data-testid='close-add-list']"); // Closes the component
      const addAnotherListBox = await page.$eval("[data-testid='add-another-list-button']", (input) => input.id);
      expect(addAnotherListBox != null).toBeTruthy();
    };

    await runEnd2End(test);
  });
});
