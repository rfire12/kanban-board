import React from "react";
import AddList from "./AddList";
import { shallow } from "enzyme";

describe("Add new list component", () => {
    it("starts closed", () => {
        const wrapper = shallow(<AddList />);
        const isAdding = wrapper.isAdding;
        expect(isAdding).toEqual(false);
    })
})