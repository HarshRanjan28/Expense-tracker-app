import { useContext } from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpensesContext } from "../store/expense-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpenseOutput
      expensesPeriod="Total"
      expenses={expenseCtx.expenses}
      fallbackText="No expense found!!"
    />
  );
};

export default AllExpenses;
