import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("Should render Expense Form", () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test("Should render Expense Form with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

  expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("Should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New Description";
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });

  expect(wrapper.state("description")).toBe(value);
});

test("Should set note on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "Adding a new note";

  wrapper.find("textarea").simulate("change", {
    target: { value },
  });

  expect(wrapper.state("note")).toBe(value);
});

test("Should set amount if the input is valid", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "23.50";

  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });

  expect(wrapper.state("amount")).toBe(value);
});

test("Should NOT set amount if the input is invalid", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "12.1234";

  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });

  expect(wrapper.state("amount")).toBe("");
});
