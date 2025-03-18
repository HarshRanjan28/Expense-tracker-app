import { createContext,useReducer } from "react";

const DUMMY_DATA = [
  {
    id: "e1",
    description: "A Pair of Shoes",
    amount: 89.99,
    date: new Date("2019-03-23"),
  },
  {
    id: "e2",
    description: "A Pair of Trousers",
    amount: 69.99,
    date: new Date("2020-03-14"),
  },
  {
    id: "e3",
    description: "A Pair of Bananas",
    amount: 14.99,
    date: new Date("2021-02-15"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 49.99,
    date: new Date("2022-05-14"),
  },
  {
    id: "e5",
    description: "A Keyboard",
    amount: 59.99,
    date: new Date("2022-06-06"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id) => {},
  deleteExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [...state, { ...action.payload, id: id }];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updatableExpenseIndex] = updatedItem;
      return updatedExpense;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_DATA);
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpenseContextProvider;
