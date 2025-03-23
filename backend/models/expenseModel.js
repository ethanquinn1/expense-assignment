let expenses = [];

export function getExpenses() {
  return expenses;
}

export function addExpense(name, amount) {
  const expense = { name, amount };
  expenses.push(expense);
}
