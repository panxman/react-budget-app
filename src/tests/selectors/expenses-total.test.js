import expenses from "../fixtures/expenses";
import getExpensesTotal from "../../selectors/expenses-total";

test("Should return 0 with no expenses given", () => {
    const total = getExpensesTotal([]);

    expect(total).toBe(0);
});

test("Should correctly add up a single expense", () => {
    const total = getExpensesTotal([expenses[0]]);

    expect(total).toBe(195);
});

test("Should return the sum of all the expenses", () => {
    const total = getExpensesTotal(expenses);

    expect(total).toBe(114195);
});
