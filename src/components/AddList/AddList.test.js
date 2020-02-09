import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup, waitForDomChange } from "@testing-library/react";
import BoardContext from "../../context/boardContext";
import AddList from "./AddList";

afterEach(cleanup);

describe("Add new list item", () => {
  it("on click the box should open if it's closed", () => {
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
