import { useContext, useEffect } from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);
  const recentExpense = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense.date > date7daysAgo;
  });

  return (
    <ExpenseOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpense}
      fallbackText="No recent Expenses for past 7 days!!"
    />
  );
};

export default RecentExpenses;
