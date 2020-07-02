import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("Should setup default filter reducer", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    });
});

test("Should set sortBy to amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});

    expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to date", () => {
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
    };
    const action = { type: "SORT_BY_DATE" };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe("date");
});

test("Should set Text filter", () => {
    const action = { type: "SET_TEXT_FILTER", text: "Rent" };

    const state = filtersReducer(undefined, action);

    expect(state.text).toBe("Rent");
});

test("Should set Start Date filter", () => {
    const action = { type: "SET_START_DATE", date: moment().startOf("month").add(5, "days") };

    const state = filtersReducer(undefined, action);

    expect(state.startDate.valueOf()).toBe(moment().startOf("month").add(5, "days").valueOf());
});

test("Should set End Date filter", () => {
    const action = { type: "SET_END_DATE", date: moment().endOf("month").subtract(5, "days") };

    const state = filtersReducer(undefined, action);

    expect(state.endDate.valueOf()).toBe(moment().endOf("month").subtract(5, "days").valueOf());
});
