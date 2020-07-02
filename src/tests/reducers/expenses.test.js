import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
    const action = { type: "REMOVE_EXPENSE", id: expenses[2].id };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[1]]);
});

test("Should NOT remove expense if ID is invalid", () => {
    const action = { type: "REMOVE_EXPENSE", id: "-1" };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
    const newExpense = {
        id: "4",
        description: "New Expense",
        note: "Testing Add Expense",
        amount: 8900,
        createdAt: undefined
    };

    const action = { type: "ADD_EXPENSE", expense: newExpense };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses.concat(newExpense));
});

test("Should edit an expense with ID", () => {
    const editExpense = {
        id: expenses[2].id,
        description: "Edited Description",
        note: "This is a new description for item 3",
        amount: expenses[2].amount,
        createdAt: expenses[2].createdAt
    };

    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[2].id,
        updates: {
            description: editExpense.description,
            note: editExpense.note
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[1], editExpense]);
});

test("Should NOT edit an expense if ID is invalid", () => {
    const editExpense = {
        id: expenses[2].id,
        description: "Edited Description",
        note: "This is a new description for item 3",
        amount: expenses[2].amount,
        createdAt: expenses[2].createdAt
    };

    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            description: editExpense.description,
            note: editExpense.note
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});
