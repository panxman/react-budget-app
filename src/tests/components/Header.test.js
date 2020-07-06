import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("Should render Header correctly", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find("h1").text()).toBe("Budget App");
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);

    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
