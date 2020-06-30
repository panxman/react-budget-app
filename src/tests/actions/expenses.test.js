import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup Remove Expense action object", () => {
    const action = removeExpense({ id: "123abc" });

    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc",
    });
});

test("Should setup Edit Expense action object", () => {
    const expenseUpdate = {
        note: "This is a new note"
    };
    const action = editExpense("222bbb", expenseUpdate);

    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "222bbb",
        updates: {
            note: "This is a new note"
        }
    });
});

test("Should setup Add Expense action object with provided values", () => {
    const expenseData = {
        description: "Rent",
        amount: 1095000,
        createdAt: 1000,
        note: "This was last month's rent.",
    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("Should setup Add Expense action object with default values", () => {
    const action = addExpense();

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
}); 
