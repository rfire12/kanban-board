import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import AddList from "./AddList";
import BoardContext from "../../context/boardContext";
import React from "react";

afterEach(cleanup);

describe("Add new list item", () => {
  it("on click, the box should open if it's closed", () => {
    const mockHtmlNode = document.createElement("span");
    mockHtmlNode.id = "add-another-list-button";

    const { queryByTestId, debug } = render(
      <BoardContext.Provider value={{ lastClickedItem: mockHtmlNode }}>
        <AddList />
      </BoardContext.Provider>
    );

    expect(queryByTestId("adding-list").getAttribute("data-testid")).toBe("adding-list");
  });
});
