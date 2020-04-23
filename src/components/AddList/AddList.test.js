import React from "react";
import "@testing-library/jest-dom/extend-expect";
import puppeteer from "puppeteer";
import appRoot from "app-root-path";
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
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  let addingBoxId = null;
  try {
    await page.goto(`http://127.0.0.1:8080`);
    await page.click("[data-testid='add-list']");
    addingBoxId = await page.$eval("[data-testid='adding-list']", (input) => input.id);
    await browser.close();
  } catch (error) {
    console.log(error);
    await browser.close();
  }
  expect(addingBoxId).toBe("");
  /* The adding box doesnt't have an ID, so its ID is an empty string. 
    If the adding box ID is undefined, it's because the adding box it's not being displayed. */
});
