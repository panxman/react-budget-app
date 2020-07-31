import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test("Should add expense to DB and Store", (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "mouse",
        amount: "3000",
        note: "This one is better",
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });;
});

test("Should add expense with defaults to DB and Store", (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0,
    };

    // no params to get the default value
    store.dispatch(startAddExpense())
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });;
});
