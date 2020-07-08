import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("Should render Expense List with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);

    expect(wrapper).toMatchSnapshot();
});

test("Should render Expense List with empty array", () => {
    const wrapper = shallow(<ExpenseList  expenses={[]}/>);

    expect(wrapper).toMatchSnapshot();
});
