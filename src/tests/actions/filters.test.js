import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

test("Should generate Set Start Date action object", () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0),
    });
});

test("Should generate Set End Date action object", () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0),
    });
});

test("Should generate Set Text Filter action object", () => {
    const action = setTextFilter("bill");

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "bill",
    });
});

test("Should generate Set Text Filter action object with default values", () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "",
    });
})

test("Should generate Sort By Amount action object", () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
    });
});

test("Should generate Sort By Date action object", () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});
