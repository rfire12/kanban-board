import "@testing-library/jest-dom/extend-expect";

import { cleanup, render, fireEvent } from "@testing-library/react";

import AddList from "./AddList";
import BoardContext from "../../context/boardContext";
import React from "react";

afterEach(cleanup);

it("Add another list renders shrinked", () => {
  const { queryByTestId, debug } = render(
    <BoardContext.Provider value={{ lastClickedItem: null }}>
      <AddList />
    </BoardContext.Provider>
  );
  expect(queryByTestId("add-another-list-button")).toBeTruthy();
});
