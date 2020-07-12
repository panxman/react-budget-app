import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
    />
  );
});

test("Should render ExpenseListFilters correctly.", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilters with data correctly.", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test("Should handle Text Change", () => {
    wrapper.find("input").simulate("change", {
        target: { value: "food" }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith("food");
});

test("Should Sort By Date", () => {
    wrapper.setProps({
        filters: altFilters
    });

    wrapper.find("select").simulate("change", {
        target: { value: "date" }
    });

    expect(sortByDate).toHaveBeenCalled();
});

test("Should Sort By Amount", () => {
    wrapper.find("select").simulate("change", {
        target: { value: "amount" }
    });

    expect(sortByAmount).toHaveBeenCalled();
});

test("Should handle Date Changes", () => {
    const startDate = moment(0).add(4, "years");
    const endDate = moment(0).add(8, "years");

    wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({ startDate, endDate });

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("Should handle Date Focus Changes", () => {
    const calendarFocused = "endDate";

    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused);

    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
