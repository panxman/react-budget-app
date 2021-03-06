import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Should correctly render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={250} />);

    expect(wrapper).toMatchSnapshot();
});

test("Should correctly render ExpensesSummary with many expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={1024} />);

    expect(wrapper).toMatchSnapshot();
});

