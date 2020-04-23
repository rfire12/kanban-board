import React from "react";
import "@testing-library/jest-dom/extend-expect";
import puppeteer from "puppeteer";
import { getTestPagePath } from "../../helpers/helpers";
import { cleanup, render } from "@testing-library/react";

import AddList from "./AddList";
import BoardContext from "../../context/boardContext";

afterEach(cleanup);

it("Renders shrinked", () => {
  const { queryByTestId, debug } = render(
    <BoardContext.Provider value={{ lastClickedItem: null }}>
      <AddList />
    </BoardContext.Provider>
  );
  expect(queryByTestId("add-another-list-button")).toBeTruthy();
});

it("On click, it allows to add a new list", async () => {
  const testPage = getTestPagePath();
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  let addingBoxId = null;
  try {
    await page.goto(testPage);
    await page.click("[data-testid='add-list']");
    addingBoxId = await page.$eval("[data-testid='adding-list']", (input) => input.id); // Returns undefined if it doesn't match any element
    await browser.close();
  } catch (error) {
    console.log(error);
    await browser.close();
  }
  expect(addingBoxId != null).toBeTruthy();
  /* Expect the adding box to exist */
});
