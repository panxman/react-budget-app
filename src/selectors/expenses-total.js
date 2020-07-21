// Return the sum of given expenses
const getExpensesTotal = (expenses) => {
    return expenses
    .map(expense => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};

export default getExpensesTotal;
